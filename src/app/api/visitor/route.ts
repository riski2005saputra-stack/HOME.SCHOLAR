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
  const now = new Date()
  const currentWeekKey = getWeekKey(now)

  // Automatically reset count when a new week begins
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

  if (!visitorStore.visitors.has(uniqueVisitorId)) {
    visitorStore.visitors.add(uniqueVisitorId)
    visitorStore.count += 1
  }

  // Hit external global counter for persistent weekly fallback
  try {
    const extRes = await fetch(`https://api.counterapi.dev/v1/bimbel_bina_juara_net/week_${currentWeekKey}/up`, {
      cache: 'no-store'
    })
    if (extRes.ok) {
      const extData = await extRes.json()
      if (typeof extData?.count === 'number' && extData.count > visitorStore.count) {
        visitorStore.count = extData.count
      }
    }
  } catch {
    // Fallback to in-memory network count
  }

  const finalCount = Math.max(1, visitorStore.count)

  return NextResponse.json(
    {
      count: finalCount,
      periodLabel: 'Minggu Ini',
      ip
    },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    }
  )
}
