'use client'

import { Check, Star } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

const WHATSAPP_URL = 'https://wa.me/6282173354073?text=Halo%20Admin%20BIMBEL%20BINA%20JUARA%2C%20saya%20tertarik%20dengan%20paket%20les%20privat.'

const paketList = [
  {
    nama: 'Paket Basic',
    target: 'Untuk SD & SMP',
    harga: 'Mulai 80K / Sesi',
    populer: false,
    fitur: [
      '1x Pertemuan',
      '90 Menit per Sesi',
      'Guru Datang ke Rumah',
      'Jadwal Fleksibel',
      'Harga SD: Rp 80.000 / Sesi',
      'Harga SMP: Rp 90.000 / Sesi',
    ],
    btnText: 'Pilih Paket',
    btnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    nama: 'Paket Reguler',
    target: 'Untuk SD & SMP',
    harga: 'Mulai 600K',
    populer: true,
    fitur: [
      '90 Menit per Sesi',
      '2 Mata Pelajaran',
      'Guru Datang ke Rumah',
      'Konsultasi PR',
      'Jadwal Fleksibel',
      'Harga 8x Pertemuan:\n• SD: Rp 600.000\n• SMP: Rp 680.000',
      'Harga 12x Pertemuan:\n• SD: Rp 900.000\n• SMP: Rp 1.020.000',
      'Harga 16x Pertemuan:\n• SD: Rp 1.200.000\n• SMP: Rp 1.360.000',
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
      'Belajar Mengaji',
    ],
    btnText: 'Konsultasi Paket',
    btnClass: 'bg-amber-400 hover:bg-amber-500 text-gray-900',
  },
]

interface PaketLesSectionProps {
  onOpenBooking: (paketName: string) => void
}

export function PaketLesSection({ onOpenBooking }: PaketLesSectionProps) {
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
                  <p className="text-sm text-blue-600 font-medium mb-1">{paket.target}</p>
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-100/60 mt-1">
                    {paket.harga}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {paket.fitur.map((fitur) => {
                    const isPriceItem =
                      fitur.includes('|') ||
                      fitur.includes('/ Sesi') ||
                      fitur.toLowerCase().startsWith('harga') ||
                      fitur.includes('x Pertemuan:')
                    return (
                      <li
                        key={fitur}
                        className={`flex items-start gap-2.5 ${
                          isPriceItem
                            ? 'bg-blue-50/70 border border-blue-100/80 rounded-xl p-2.5 my-1 shadow-2xs'
                            : ''
                        }`}
                      >
                        <div
                          className={`w-5 h-5 ${
                            isPriceItem
                              ? 'bg-blue-600 text-white font-bold text-[10px]'
                              : 'bg-blue-100 text-blue-600'
                          } rounded-full flex items-center justify-center mt-0.5 shrink-0`}
                        >
                          {isPriceItem ? 'Rp' : <Check className="w-3 h-3" />}
                        </div>
                        <span
                          className={`text-sm ${
                            isPriceItem
                              ? 'font-semibold text-blue-950 whitespace-pre-line leading-relaxed'
                              : 'text-gray-600'
                          }`}
                        >
                          {fitur}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <button
                  onClick={() => onOpenBooking(paket.nama)}
                  className={`block w-full text-center ${paket.btnClass} px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg cursor-pointer`}
                >
                  {paket.btnText}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}