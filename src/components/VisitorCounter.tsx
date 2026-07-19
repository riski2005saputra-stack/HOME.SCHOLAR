'use client'

import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

export function VisitorCounter() {
  const [count, setCount] = useState<number>(0)
  const [monthName, setMonthName] = useState<string>('')

  useEffect(() => {
    let isMounted = true

    fetch('/api/visitor', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Network response error')
        return res.json()
      })
      .then((data) => {
        if (!isMounted) return
        if (typeof data?.count === 'number') {
          setCount(data.count)
        }
        if (data?.monthName) {
          setMonthName(data.monthName)
        }
      })
      .catch(() => {
        if (!isMounted) return
        setCount(1)
      })

    return () => {
      isMounted = false
    }
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
        <strong className="text-amber-300 font-bold text-xs">{count}</strong> Pengunjung Bulan {monthName || 'Ini'}
      </span>
      <span className="text-[10px] text-gray-400 border-l border-gray-700 pl-2 hidden sm:inline whitespace-nowrap">
        Diperbarui Real-time
      </span>
    </div>
  )
}
