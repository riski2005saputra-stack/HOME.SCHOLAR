'use client'

import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

// BASE_OFFSET set to 0 per user test request
const BASE_OFFSET = 0

export function VisitorCounter() {
  const [count, setCount] = useState<number>(0)
  const currentMonthIndex = new Date().getMonth()
  const monthName = MONTH_NAMES[currentMonthIndex]

  useEffect(() => {
    let isMounted = true
    const now = new Date()
    const monthKey = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}`
    const sessionKey = `bj_live_session_${monthKey}`
    const isNewSession = !sessionStorage.getItem(sessionKey)

    // Using fresh namespace bimbel_bina_juara_live so it starts cleanly from 0
    const endpoint = isNewSession
      ? `https://api.counterapi.dev/v1/bimbel_bina_juara_live/visitors_${monthKey}/up`
      : `https://api.counterapi.dev/v1/bimbel_bina_juara_live/visitors_${monthKey}`

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error('API Error')
        return res.json()
      })
      .then((data) => {
        if (!isMounted) return
        if (isNewSession) {
          sessionStorage.setItem(sessionKey, 'true')
        }
        const apiCount = typeof data?.count === 'number' ? data.count : 1
        setCount(BASE_OFFSET + apiCount)
      })
      .catch(() => {
        if (!isMounted) return
        setCount(1)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full border border-blue-500/30 shadow-md hover:border-blue-400/60 transition-all">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Eye className="w-3.5 h-3.5 text-blue-400 shrink-0" />
      <span className="whitespace-nowrap">
        <strong className="text-amber-300 font-bold text-xs">{count}</strong> Pengunjung Bulan {monthName}
      </span>
      <span className="text-[10px] text-gray-400 border-l border-gray-700 pl-2 hidden sm:inline whitespace-nowrap">
        Diperbarui Real-time
      </span>
    </div>
  )
}
