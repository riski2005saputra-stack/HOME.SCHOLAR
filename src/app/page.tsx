'use client'

import { useState } from 'react'
import { Navbar } from '@/components/sections/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { KeunggulanSection } from '@/components/sections/KeunggulanSection'
import { PaketLesSection } from '@/components/sections/PaketLesSection'
import { PengajarSection } from '@/components/sections/PengajarSection'
import { MapelSection } from '@/components/sections/MapelSection'
import { CaraPemesananSection } from '@/components/sections/CaraPemesananSection'
import { TestimoniSection } from '@/components/sections/TestimoniSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { TentangKamiSection } from '@/components/sections/TentangKamiSection'
import { KontakSection } from '@/components/sections/KontakSection'
import { Footer } from '@/components/sections/Footer'
import { BookingModal } from '@/components/sections/BookingModal'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [defaultPaket, setDefaultPaket] = useState('')

  const handleOpenBooking = (paketName: string = '') => {
    setDefaultPaket(paketName)
    setIsBookingOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <main className="flex-1">
        <HeroSection />
        <KeunggulanSection />
        <PaketLesSection onOpenBooking={handleOpenBooking} />
        <PengajarSection />
        <MapelSection />
        <CaraPemesananSection />
        <TestimoniSection />
        <FAQSection />
        <TentangKamiSection />
        <KontakSection />
      </main>
      <Footer />

      <BookingModal
        key={`${isBookingOpen}-${defaultPaket}`}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialPaket={defaultPaket}
      />
    </div>
  )
}