'use client'

import { Check, Star } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

const WHATSAPP_URL = 'https://wa.me/6281234567890?text=Halo%20Admin%20HOME%20SCHOLAR%2C%20saya%20tertarik%20dengan%20paket%20les%20privat.'

const paketList = [
  {
    nama: 'Paket Basic',
    target: 'Untuk SD',
    harga: 'Hubungi Admin',
    populer: false,
    fitur: [
      '90 menit per sesi',
      '1 Mata Pelajaran',
      'Guru datang ke rumah',
      'Jadwal fleksibel',
    ],
    btnText: 'Pilih Paket',
    btnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    nama: 'Paket Reguler',
    target: 'Untuk SD dan SMP',
    harga: 'Hubungi Admin',
    populer: true,
    fitur: [
      '120 menit per sesi',
      '2 Mata Pelajaran',
      'Guru datang ke rumah',
      'Konsultasi PR',
      'Jadwal fleksibel',
    ],
    btnText: 'Pilih Paket',
    btnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    nama: 'Paket Khusus',
    target: 'Sesuai Kebutuhan',
    harga: 'Konsultasi Dulu',
    populer: false,
    fitur: [
      'Persiapan Ujian Sekolah',
      'Persiapan ANBK',
      'Persiapan Olimpiade',
      'Pendampingan Harian',
      'Kelas Intensif',
      'Home Schooling',
      'Belajar Membaca',
      'Belajar Berhitung',
      'Program Naik Peringkat',
    ],
    btnText: 'Konsultasi Paket',
    btnClass: 'bg-amber-400 hover:bg-amber-500 text-gray-900',
  },
]

export function PaketLesSection() {
  return (
    <section id="paket" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pilihan <span className="text-blue-600">Paket Les</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Pilih paket yang paling sesuai dengan kebutuhan belajar putra-putri Anda.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {paketList.map((paket, i) => (
            <FadeIn key={paket.nama} delay={i * 0.15}>
              <div
                className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${
                  paket.populer
                    ? 'border-2 border-blue-600 shadow-lg shadow-blue-600/10'
                    : 'border border-gray-100'
                }`}
              >
                {paket.populer && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      <Star className="w-3.5 h-3.5 fill-white" />
                      PALING POPULER
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{paket.nama}</h3>
                  <p className="text-sm text-blue-600 font-medium">{paket.target}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {paket.fitur.map((fitur) => (
                    <li key={fitur} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-600">{fitur}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center ${paket.btnClass} px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg`}
                >
                  {paket.btnText}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}