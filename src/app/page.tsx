'use client'

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <KeunggulanSection />
        <PaketLesSection />
        <PengajarSection />
        <MapelSection />
        <CaraPemesananSection />
        <TestimoniSection />
        <FAQSection />
        <TentangKamiSection />
        <KontakSection />
      </main>
      <Footer />
    </div>
  )
}