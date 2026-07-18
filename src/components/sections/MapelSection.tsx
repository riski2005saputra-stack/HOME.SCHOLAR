'use client'

import {
  Calculator,
  BookOpen,
  FlaskConical,
  Globe,
  Landmark,
  Monitor,
} from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

const pelajaranSD = [
  { nama: 'Matematika', icon: Calculator, color: 'bg-blue-100 text-blue-600' },
  { nama: 'Bahasa Indonesia', icon: BookOpen, color: 'bg-red-100 text-red-600' },
  { nama: 'IPA', icon: FlaskConical, color: 'bg-green-100 text-green-600' },
  { nama: 'IPS', icon: Landmark, color: 'bg-amber-100 text-amber-600' },
  { nama: 'Bahasa Inggris', icon: Globe, color: 'bg-purple-100 text-purple-600' },
  { nama: 'Komputer Dasar', icon: Monitor, color: 'bg-teal-100 text-teal-600' },
]

const pelajaranSMP = [
  { nama: 'Matematika', icon: Calculator, color: 'bg-blue-100 text-blue-600' },
  { nama: 'IPA', icon: FlaskConical, color: 'bg-green-100 text-green-600' },
  { nama: 'IPS', icon: Landmark, color: 'bg-amber-100 text-amber-600' },
  { nama: 'Bahasa Indonesia', icon: BookOpen, color: 'bg-red-100 text-red-600' },
  { nama: 'Bahasa Inggris', icon: Globe, color: 'bg-purple-100 text-purple-600' },
  { nama: 'Komputer Dasar', icon: Monitor, color: 'bg-teal-100 text-teal-600' },
]

export function MapelSection() {
  return (
    <section id="mapel" className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mata <span className="text-blue-600">Pelajaran</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Kami menyediakan pengajaran untuk berbagai mata pelajaran SD dan SMP.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* SD */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                📚 Tingkat SD
              </div>
              <div className="grid grid-cols-2 gap-4">
                {pelajaranSD.map((pel) => (
                  <div
                    key={`sd-${pel.nama}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group cursor-default"
                  >
                    <div className={`w-11 h-11 ${pel.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <pel.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{pel.nama}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* SMP */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                📖 Tingkat SMP
              </div>
              <div className="grid grid-cols-2 gap-4">
                {pelajaranSMP.map((pel) => (
                  <div
                    key={`smp-${pel.nama}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group cursor-default"
                  >
                    <div className={`w-11 h-11 ${pel.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <pel.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{pel.nama}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}