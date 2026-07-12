'use client'

import { GraduationCap, Home, Calendar, TrendingUp } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

const keunggulan = [
  {
    icon: GraduationCap,
    title: 'Guru Profesional',
    desc: 'Guru telah melalui proses seleksi.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Home,
    title: 'Belajar di Rumah',
    desc: 'Belajar lebih nyaman tanpa keluar rumah.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Calendar,
    title: 'Jadwal Fleksibel',
    desc: 'Waktu belajar dapat disesuaikan.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: TrendingUp,
    title: 'Pendampingan Maksimal',
    desc: 'Belajar lebih fokus dibanding kelas besar.',
    color: 'bg-purple-100 text-purple-600',
  },
]

export function KeunggulanSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">HOME SCHOLAR</span>?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan les privat terbaik untuk putra-putri Anda.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {keunggulan.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-600/5 hover:-translate-y-1 transition-all duration-300 text-center">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}