'use client'

import { GraduationCap, Users, MapPin, Award } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

const stats = [
  { icon: Users, value: '500+', label: 'Siswa Aktif', color: 'text-blue-600' },
  { icon: GraduationCap, value: '50+', label: 'Guru Profesional', color: 'text-amber-600' },
  { icon: Award, value: '5+', label: 'Tahun Pengalaman', color: 'text-green-600' },
  { icon: MapPin, value: 'Pekanbaru', label: 'Area Layanan', color: 'text-purple-600' },
]

export function TentangKamiSection() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                Tentang Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-blue-600">HOME SCHOLAR</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  HOME SCHOLAR merupakan layanan les privat ke rumah yang membantu siswa SD dan SMP
                  memperoleh pengalaman belajar yang lebih nyaman, fokus, dan efektif.
                </p>
                <p>
                  Guru kami telah melalui proses seleksi sehingga mampu memberikan pendampingan belajar
                  yang berkualitas. Saat ini HOME SCHOLAR melayani wilayah Pekanbaru dengan sistem
                  pembelajaran yang fleksibel sesuai kebutuhan siswa.
                </p>
                <p>
                  Kami percaya bahwa setiap anak memiliki potensi yang berbeda. Oleh karena itu,
                  pendekatan belajar kami disesuaikan dengan kemampuan dan kebutuhan masing-masing siswa.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}