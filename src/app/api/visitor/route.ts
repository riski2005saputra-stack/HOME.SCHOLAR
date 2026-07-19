import { NextResponse } from 'next/server'

// Serverless in-memory store for unique IP + Device tracking per month
const visitorStore: {
  monthKey: string
  visitors: Set<string>
  count: number
} = {
  monthKey: '',
  visitors: new Set<string>(),
  count: 0
}

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

export async function GET(request: Request) {
  const now = new Date()
  const currentMonthKey = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}`

  // Automatically reset count when month changes
  if (visitorStore.monthKey !== currentMonthKey) {
    visitorStore.monthKey = currentMonthKey
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

  // Also hit public global counter for persistent fallback
  try {
    const extRes = await fetch(`https://api.counterapi.dev/v1/bimbel_bina_juara_net/v_${currentMonthKey}/up`, {
      cache: 'no-store'
    })
    if (extRes.ok) {
      const extData = await extRes.json()
      if (typeof extData?.count === 'number' && extData.count > visitorStore.count) {
        visitorStore.count = extData.count
      }
    }
  } catch {
    // Keep internal network IP count if external call fails
  }

  const monthName = MONTH_NAMES[now.getMonth()]
  const finalCount = Math.max(1, visitorStore.count)

  return NextResponse.json(
    {
      count: finalCount,
      monthName,
      ip
    },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    }
  )
}
