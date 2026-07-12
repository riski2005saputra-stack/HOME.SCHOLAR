'use client'

import { MessageCircle, Users, Package, Search, Home, BookOpen } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

const steps = [
  {
    icon: MessageCircle,
    title: 'Hubungi Admin',
    desc: 'Hubungi Admin melalui WhatsApp.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Users,
    title: 'Konsultasi',
    desc: 'Konsultasi kebutuhan belajar.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Package,
    title: 'Pilih Paket',
    desc: 'Pilih paket yang sesuai.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Search,
    title: 'Pencarian Guru',
    desc: 'Admin mencarikan guru terbaik.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Home,
    title: 'Guru Datang',
    desc: 'Guru datang ke rumah Anda.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: BookOpen,
    title: 'Mulai Belajar',
    desc: 'Sesi belajar dimulai!',
    color: 'bg-teal-100 text-teal-600',
  },
]

export function CaraPemesananSection() {
  return (
    <section id="pemesanan" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara <span className="text-blue-600">Pemesanan</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Proses pemesanan yang mudah dan cepat. Hanya 6 langkah untuk memulai.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-amber-200 to-blue-200 hidden sm:block" />

            <div className="space-y-6 md:space-y-8">
              {steps.map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.1}>
                  <div className="relative flex items-start gap-4 md:gap-6">
                    {/* Step number circle */}
                    <div className="relative z-10 shrink-0">
                      <div className={`w-12 h-12 md:w-16 md:h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                        <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {i + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Langkah {i + 1}</h3>
                      <p className="text-base font-semibold text-blue-600 mb-1">{step.title}</p>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}