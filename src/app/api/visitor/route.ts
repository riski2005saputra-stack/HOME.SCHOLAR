import { NextResponse } from 'next/server'

// Serverless store for unique IP + Device tracking per week
const visitorStore: {
  weekKey: string
  visitors: Set<string>
  count: number
} = {
  weekKey: '',
  visitors: new Set<string>(),
  count: 0
}

function getWeekKey(date: Date): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
  return `${d.getUTCFullYear()}_W${weekNo}`
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const isIncrementRequested = searchParams.get('inc') === '1'

  const now = new Date()
  const currentWeekKey = getWeekKey(now)

  // Reset count when a new week begins
  if (visitorStore.weekKey !== currentWeekKey) {
    visitorStore.weekKey = currentWeekKey
    visitorStore.visitors = new Set<string>()
    visitorStore.count = 0
  }

  // Extract client IP address from network headers
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || '127.0.0.1'
  const userAgent = request.headers.get('user-agent') || 'device'
  
  // Unique Network + Device Identifier
  const uniqueVisitorId = `${ip}_${userAgent.substring(0, 40)}`

  const isNewVisitor = !visitorStore.visitors.has(uniqueVisitorId)

  if (isIncrementRequested && isNewVisitor) {
    visitorStore.visitors.add(uniqueVisitorId)
    visitorStore.count += 1
  }

  // Persistent counterapi.dev endpoint bimbel_bina_juara_final
  try {
    const extEndpoint = isIncrementRequested && isNewVisitor
      ? `https://api.counterapi.dev/v1/bimbel_bina_juara_final/week_${currentWeekKey}/up`
      : `https://api.counterapi.dev/v1/bimbel_bina_juara_final/week_${currentWeekKey}`

    const extRes = await fetch(extEndpoint, { cache: 'no-store' })
    if (extRes.ok) {
      const extData = await extRes.json()
      if (typeof extData?.count === 'number') {
        visitorStore.count = Math.max(visitorStore.count, extData.count)
      }
    }
  } catch {
    // Keep internal memory count
  }

  return NextResponse.json(
    {
      count: visitorStore.count,
      periodLabel: 'Minggu Ini',
      isNewVisitor
    },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    }
  )
}
