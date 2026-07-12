'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { FadeIn } from '@/components/FadeIn'

const testimoniList = [
  {
    nama: 'Ibu Ratna',
    anak: 'Siswa SD Kelas 5',
    komentar: 'Anak saya jadi lebih semangat belajar sejak ada guru HOME SCHOLAR yang datang ke rumah. Nilainya juga naik signifikan!',
    inisial: 'IR',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    nama: 'Bapak Hendra',
    anak: 'Siswa SMP Kelas 8',
    komentar: 'Guru-gurunya sangat sabar dan profesional. Jadwal juga fleksibel, jadi tidak mengganggu kegiatan anak lainnya.',
    inisial: 'BH',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    nama: 'Ibu Dewi Lestari',
    anak: 'Siswa SD Kelas 3',
    komentar: 'HOME SCHOLAR benar-benar solusi buat kami yang sibuk bekerja. Anak tetap dapat bimbingan belajar berkualitas di rumah.',
    inisial: 'DL',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    nama: 'Bapak Rizal',
    anak: 'Siswa SMP Kelas 7',
    komentar: 'Saya sangat puas dengan layanan HOME SCHOLAR. Anak saya lebih percaya diri dan hasil ujiannya memuaskan.',
    inisial: 'RZ',
    color: 'bg-green-100 text-green-600',
  },
  {
    nama: 'Ibu Siti Aminah',
    anak: 'Siswa SD Kelas 6',
    komentar: 'Persiapan ujian anak jadi lebih terarah berkat bimbingan dari guru HOME SCHOLAR. Terima kasih banyak!',
    inisial: 'SA',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    nama: 'Bapak Agus Pratama',
    anak: 'Siswa SMP Kelas 9',
    komentar: 'Guru yang datang sangat kompeten dan mampu menjelaskan materi dengan cara yang mudah dipahami anak saya.',
    inisial: 'AP',
    color: 'bg-teal-100 text-teal-600',
  },
]

export function TestimoniSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimoniList.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimoniList.length) % testimoniList.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlay, next])

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata <span className="text-blue-600">Mereka</span>?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Testimoni dari para orang tua siswa yang telah merasakan layanan HOME SCHOLAR.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto relative">
            {/* Card */}
            <div
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-lg relative"
            >
              <Quote className="w-12 h-12 text-blue-100 absolute top-6 right-6" />

              <div className="text-center">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarFallback className={`${testimoniList[current].color} text-xl font-bold`}>
                    {testimoniList[current].inisial}
                  </AvatarFallback>
                </Avatar>

                <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg italic">
                  &ldquo;{testimoniList[current].komentar}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-bold text-gray-900">{testimoniList[current].nama}</p>
                <p className="text-sm text-gray-500">{testimoniList[current].anak}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex items-center gap-2">
                {testimoniList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}