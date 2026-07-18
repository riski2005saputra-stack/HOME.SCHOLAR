'use client'

import { MapPin, Clock, Mail, Phone } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

const WHATSAPP_URL = 'https://wa.me/6282173354073?text=Halo%20Admin%20HOME%20SCHOLAR%2C%20saya%20ingin%20bertanya.'

export function KontakSection() {
  return (
    <section id="kontak" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-blue-600">Kami</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Kami siap membantu Anda.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                  <p className="text-sm text-gray-500">Pekanbaru, Riau</p>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-sm text-gray-500 group-hover:text-green-600 transition-colors">+62 821-7335-4073</p>
                </div>
              </a>

              <a
                href="mailto:riski2005saputra@gmail.com"
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all group"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-sm text-gray-500 group-hover:text-amber-600 transition-colors">riski2005saputra@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                  <p className="text-sm text-gray-500">Senin – Sabtu</p>
                  <p className="text-sm text-gray-500">08.00 – 20.00 WIB</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Map Embed */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl overflow-hidden h-full min-h-[360px] border border-gray-200 shadow-sm relative flex flex-col">
              <iframe
                title="Peta Wilayah Pekanbaru, Riau"
                src="https://www.openstreetmap.org/export/embed.html?bbox=101.2748%2C0.3484%2C101.6208%2C0.6659&layer=mapnik&marker=0.5071%2C101.4478"
                width="100%"
                height="100%"
                className="flex-1 min-h-[300px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
              <a
                href="https://www.google.com/maps/place/Pekanbaru,+Riau/@0.5071,101.4478,13z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-blue-50 border-t border-gray-200 text-sm text-blue-600 font-medium transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Buka di Google Maps
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}