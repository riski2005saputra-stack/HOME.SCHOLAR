'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FadeIn } from '@/components/FadeIn'

const WHATSAPP_URL = 'https://wa.me/6285923320768?text=Halo%20Admin%20HOME%20SCHOLAR%2C%20saya%20ingin%20bertanya%20tentang%20les%20privat.'

export function HeroSection() {
  const scrollToPaket = () => {
    document.querySelector('#paket')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="dashboard" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                Les Privat ke Rumah
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                <span className="text-gray-900">HOME</span>{' '}
                <span className="text-blue-600">SCHOLAR</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Les Privat ke Rumah
              </h2>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Belajar lebih nyaman bersama guru profesional yang datang langsung ke rumah Anda.
                Melayani wilayah <span className="font-semibold text-gray-800">Pekanbaru</span>.
                Cocok untuk siswa <span className="font-semibold text-blue-600">SD</span> dan{' '}
                <span className="font-semibold text-blue-600">SMP</span>.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToPaket}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25"
                >
                  Lihat Paket
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-3.5 rounded-xl text-base font-semibold border border-gray-200 transition-all hover:scale-105 hover:shadow-lg"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-500">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hubungi Admin
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right - Image */}
          <FadeIn delay={0.3} direction="right">
            <div className="relative">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/15">
                  <Image
                    src="/hero-teacher.png"
                    alt="Guru HOME SCHOLAR mengajar siswa di rumah"
                    width={1344}
                    height={768}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-2xl opacity-20 -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 rounded-2xl opacity-20 -z-10" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Guru Terverifikasi</p>
                  <p className="text-xs text-gray-500">Seleksi Ketat</p>
                </div>
              </motion.div>

              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-2 -right-2 sm:top-4 sm:-right-4 bg-white rounded-2xl shadow-lg p-4"
              >
                <p className="text-2xl font-extrabold text-blue-600">20+</p>
                <p className="text-xs text-gray-500">Siswa Aktif</p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}