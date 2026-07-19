'use client'

import { FadeIn } from '@/components/FadeIn'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { CheckCircle } from 'lucide-react'

const guruList = [
  {
    nama: 'Riski Saputra, A.Md.T',
    bidang: 'Komputer Dasar (SD & SMP)',
    pengalaman: '3 Tahun Pengalaman',
    bintang: 5,
    inisial: 'RS',
    color: 'bg-blue-100 text-blue-600',
    foto: '/riski.jpg',
  },
  {
    nama: 'Riska, S.Pd',
    bidang: 'Semua Mata Pelajaran (SD & SMP)',
    pengalaman: '6 Tahun Pengalaman',
    bintang: 5,
    inisial: 'RS',
    color: 'bg-green-100 text-green-600',
  },
  {
    nama: 'Nadia Armanda, S.Pd',
    bidang: 'Semua Mata Pelajaran (SD & SMP)',
    pengalaman: '4 Tahun Pengalaman',
    bintang: 5,
    inisial: 'NA',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    nama: 'Widia, S.Pd',
    bidang: 'Semua Mata Pelajaran (SD & SMP)',
    pengalaman: '6 Tahun Pengalaman',
    bintang: 5,
    inisial: 'WD',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    nama: 'Nisa Amelia, S.Pd',
    bidang: 'Semua Mata Pelajaran (SD & SMP)',
    pengalaman: '3 Tahun Pengalaman',
    bintang: 5,
    inisial: 'NA',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    nama: 'Fajar Hidayat, S.Pd',
    bidang: 'Semua Mata Pelajaran (SD & SMP)',
    pengalaman: '8 Tahun Pengalaman',
    bintang: 5,
    inisial: 'FH',
    color: 'bg-teal-100 text-teal-600',
  },
]

export function PengajarSection() {
  return (
    <section id="pengajar" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Guru <span className="text-blue-600">Profesional</span> Kami
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Semua guru telah melalui proses seleksi ketat untuk memastikan kualitas pengajaran terbaik.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {guruList.map((guru, i) => (
            <FadeIn key={guru.nama} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-600/5 hover:-translate-y-1 transition-all duration-300 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-blue-600/20 shadow-md">
                  {guru.foto && (
                    <AvatarImage src={guru.foto} alt={guru.nama} className="object-cover" />
                  )}
                  <AvatarFallback className={`${guru.color} text-2xl font-bold`}>
                    {guru.inisial}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{guru.nama}</h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{guru.bidang}</p>
                <p className="text-sm text-gray-500 mb-3">{guru.pengalaman}</p>
                <div className="flex items-center justify-center gap-0.5 mb-4">
                  {Array.from({ length: guru.bintang }).map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Lulus Seleksi BIMBEL BINA JUARA
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}