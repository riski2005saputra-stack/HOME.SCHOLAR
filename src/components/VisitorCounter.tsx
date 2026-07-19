'use client'

import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

export function VisitorCounter() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    let isMounted = true

    // Check device-level lock for current week final
    const now = new Date()
    const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()))
    const dayNum = d.getUTCDay() || 7
    d.setUTCDate(d.getUTCDate() + 4 - dayNum)
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
    const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
    const weekKey = `${d.getUTCFullYear()}_W${weekNo}`

    const storageKey = `bj_visitor_final_${weekKey}`
    const isAlreadyCounted = typeof window !== 'undefined' && !!localStorage.getItem(storageKey)

    // Send inc=1 ONLY if this device has NOT been counted this week
    const url = isAlreadyCounted ? '/api/visitor?inc=0' : '/api/visitor?inc=1'

    fetch(url, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Network response error')
        return res.json()
      })
      .then((data) => {
        if (!isMounted) return
        if (typeof data?.count === 'number') {
          setCount(data.count)
          // Lock device so refreshing page does NOT increment counter
          if (!isAlreadyCounted && typeof window !== 'undefined') {
            localStorage.setItem(storageKey, 'true')
          }
        }
      })
      .catch(() => {
        if (!isMounted) return
        setCount(0)
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
        <strong className="text-amber-300 font-bold text-xs">{count}</strong> Pengunjung Minggu Ini
      </span>
      <span className="text-[10px] text-gray-400 border-l border-gray-700 pl-2 hidden sm:inline whitespace-nowrap">
        Reset 1 Minggu Sekali
      </span>
    </div>
  )
}
