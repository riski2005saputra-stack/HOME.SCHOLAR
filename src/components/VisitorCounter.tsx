'use client'

import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

export function VisitorCounter() {
  const [count, setCount] = useState<number>(0)

  const currentMonthIndex = new Date().getMonth()
  const monthName = MONTH_NAMES[currentMonthIndex]

  useEffect(() => {
    const now = new Date()
    const currentMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`

    // Base start count for new month
    const baseCount = 240
    const storedMonth = localStorage.getItem('bj_visitor_month')
    let storedCount = parseInt(localStorage.getItem('bj_visitor_count') || '0', 10)

    if (storedMonth !== currentMonthKey) {
      // Reset counter automatically when month changes
      localStorage.setItem('bj_visitor_month', currentMonthKey)
      storedCount = baseCount
      localStorage.setItem('bj_visitor_count', storedCount.toString())
    } else {
      // Same month: increment if new session
      const sessionKey = `bj_visited_${currentMonthKey}`
      if (!sessionStorage.getItem(sessionKey)) {
        storedCount += 1
        sessionStorage.setItem(sessionKey, 'true')
        localStorage.setItem('bj_visitor_count', storedCount.toString())
      }
    }

    setCount(storedCount)
  }, [])

  if (!count) return null

  return (
    <div className="inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full border border-blue-500/30 shadow-md hover:border-blue-400/60 transition-all">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Eye className="w-3.5 h-3.5 text-blue-400 shrink-0" />
      <span className="whitespace-nowrap">
        <strong className="text-amber-300 font-bold text-xs">{count}+</strong> Pengunjung Bulan {monthName}
      </span>
      <span className="text-[10px] text-gray-400 border-l border-gray-700 pl-2 hidden sm:inline whitespace-nowrap">
        Diperbarui 1 Bulan Sekali
      </span>
    </div>
  )
}
