'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FadeIn } from '@/components/FadeIn'

const faqList = [
  {
    q: 'Apakah guru datang ke rumah?',
    a: 'Ya, guru BIMBEL BINA JUARA akan datang langsung ke rumah Anda sesuai jadwal yang telah disepakati. Anda tidak perlu repot mengantar anak ke tempat bimbel.',
  },
  {
    q: 'Apakah bisa memilih jadwal?',
    a: 'Tentu saja! Jadwal belajar sangat fleksibel dan dapat disesuaikan dengan waktu luang anak Anda. Kami melayani sesi pagi, siang, maupun sore hari.',
  },
  {
    q: 'Apakah tersedia guru perempuan?',
    a: 'Ya, kami memiliki guru perempuan dan laki-laki yang sama-sama berkualitas. Anda bisa menyampaikan preferensi guru saat konsultasi awal.',
  },
  {
    q: 'Bagaimana sistem pembayaran?',
    a: 'Pembayaran dilakukan secara bulanan melalui transfer bank. Detail metode pembayaran akan diinformasikan oleh admin saat proses pendaftaran.',
  },
  {
    q: 'Apakah tersedia paket bulanan?',
    a: 'Ya, kami menyediakan paket bulanan dengan berbagai pilihan frekuensi belajar (2x, 4x, atau 8x per bulan). Silakan konsultasikan kebutuhan Anda kepada admin.',
  },
  {
    q: 'Berapa lama durasi setiap sesi belajar?',
    a: 'Durasi belajar bervariasi tergantung paket yang dipilih. Paket Basic 90 menit, Paket Reguler 120 menit, dan Paket Khusus dapat disesuaikan.',
  },
  {
    q: 'Apakah ada uji coba gratis?',
    a: 'Untuk informasi mengenai sesi trial, silakan hubungi admin kami melalui WhatsApp. Kami akan berikan penjelasan lebih lanjut.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang <span className="text-blue-600">Sering Diajukan</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Temukan jawaban atas pertanyaan yang sering ditanyakan tentang layanan kami.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqList.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white rounded-xl border border-gray-100 px-6 data-[state=open]:shadow-md data-[state=open]:shadow-blue-600/5 transition-shadow"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:no-underline hover:text-blue-600 py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}