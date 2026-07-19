'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  User,
  Phone,
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  MessageSquare,
  BookOpen,
  Layers,
  Sparkles,
  LocateFixed,
  Loader2,
  X,
} from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  initialPaket?: string
}

const WHATSAPP_NUMBER = '6282173354073'

export function BookingModal({ isOpen, onClose, initialPaket = '' }: BookingModalProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    parentWhatsapp: '',
    studentName: '',
    studentClass: '',
    subject: '',
    paket: initialPaket || 'Paket Reguler',
    sessions: initialPaket === 'Paket Basic' ? '1 Pertemuan' : '8 Pertemuan',
    startDate: '',
    startTime: '',
    teacherPreference: 'Bebas (Laki-laki / Perempuan)',
    address: '',
    learningNeeds: '',
  })

  const [isLocating, setIsLocating] = useState(false)

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('Browser Anda tidak mendukung Geolocation / GPS')
      return
    }

    setIsLocating(true)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
            {
              headers: {
                'Accept-Language': 'id-ID,id;q=0.9,en;q=0.8',
                'User-Agent': 'HomeScholarBookingModal/1.0',
              },
            }
          )
          
          if (!response.ok) throw new Error('Failed to fetch address')
          
          const data = await response.json()
          
          if (data && data.display_name) {
            setFormData((prev) => ({
              ...prev,
              address: data.display_name,
            }))
          } else {
            setFormData((prev) => ({
              ...prev,
              address: `Koordinat GPS: https://www.google.com/maps?q=${latitude},${longitude}`,
            }))
          }
        } catch (error) {
          console.error('Error reverse geocoding:', error)
          setFormData((prev) => ({
            ...prev,
            address: `Koordinat GPS: https://www.google.com/maps?q=${latitude},${longitude}`,
          }))
        } finally {
          setIsLocating(false)
        }
      },
      (error) => {
        console.error('Error getting location:', error)
        let errorMsg = 'Gagal mendeteksi lokasi otomatis.'
        if (error.code === error.PERMISSION_DENIED) {
          errorMsg = 'Akses lokasi ditolak. Silakan aktifkan izin lokasi/GPS di browser Anda.'
        }
        alert(errorMsg)
        setIsLocating(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 0,
      }
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => {
      const updated = { ...prev, [name]: value }
      if (name === 'paket') {
        if (value === 'Paket Basic') {
          updated.sessions = '1 Pertemuan'
        } else if (prev.paket === 'Paket Basic') {
          updated.sessions = '8 Pertemuan'
        }
      }
      return updated
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (
      !formData.parentName ||
      !formData.parentWhatsapp ||
      !formData.studentName ||
      !formData.studentClass ||
      !formData.subject ||
      !formData.paket ||
      !formData.sessions ||
      !formData.startDate ||
      !formData.startTime ||
      !formData.address
    ) {
      alert('Mohon lengkapi semua field yang wajib diisi (*)')
      return
    }

    // Format Date from YYYY-MM-DD to DD-MM-YYYY or readable Indonesian
    const dateObj = new Date(formData.startDate)
    const formattedDate = isNaN(dateObj.getTime())
      ? formData.startDate
      : dateObj.toLocaleDateString('id-ID', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })

    // Construct the message following the exact requested format
    const message = `Halo Admin BIMBEL BINA JUARA,

Saya ingin memesan layanan les privat.

━━━━━━━━━━━━━━
DATA ORANG TUA

Nama : ${formData.parentName}
WhatsApp : ${formData.parentWhatsapp}

━━━━━━━━━━━━━━
DATA SISWA

Nama Siswa : ${formData.studentName}
Kelas : ${formData.studentClass}
Mata Pelajaran : ${formData.subject}

━━━━━━━━━━━━━━
PAKET

Paket : ${formData.paket}
Jumlah Pertemuan : ${formData.sessions}

━━━━━━━━━━━━━━
JADWAL

Tanggal : ${formattedDate}
Jam : ${formData.startTime} WIB

━━━━━━━━━━━━━━
PREFERENSI

Guru : ${formData.teacherPreference}
Alamat : ${formData.address}
Kebutuhan Belajar : ${formData.learningNeeds || '-'}

Mohon informasi guru yang tersedia.

Terima kasih.`

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer')
    
    // Close Modal
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 rounded-2xl border-none shadow-2xl bg-white scrollbar-thin scrollbar-thumb-gray-200" showCloseButton={false}>
        <DialogHeader className="p-6 pb-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50/35 sticky top-0 z-10 rounded-t-2xl">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                Form Pemesanan Layanan
              </DialogTitle>
              <DialogDescription className="text-gray-500 text-sm mt-1">
                Lengkapi data di bawah ini untuk memesan layanan les privat terbaik kami.
              </DialogDescription>
            </div>
            <DialogClose asChild>
              <button
                type="button"
                onClick={onClose}
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-white/80 transition-all cursor-pointer mt-0.5"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </DialogClose>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* DATA ORANG TUA */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-blue-600 tracking-wider uppercase flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> DATA ORANG TUA
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="parentName" className="text-xs font-semibold text-gray-700">
                  Nama Lengkap Orang Tua *
                </Label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="parentWhatsapp" className="text-xs font-semibold text-gray-700">
                  Nomor WhatsApp *
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="parentWhatsapp"
                    name="parentWhatsapp"
                    type="tel"
                    value={formData.parentWhatsapp}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* DATA SISWA */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-blue-600 tracking-wider uppercase flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" /> DATA SISWA
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-1 space-y-1.5">
                <Label htmlFor="studentName" className="text-xs font-semibold text-gray-700">
                  Nama Siswa *
                </Label>
                <Input
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Nama lengkap anak"
                  className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="studentClass" className="text-xs font-semibold text-gray-700">
                  Kelas *
                </Label>
                <Select
                  value={formData.studentClass}
                  onValueChange={(val) => handleSelectChange('studentClass', val)}
                >
                  <SelectTrigger className="h-11 border-gray-200 rounded-xl bg-white w-full">
                    <SelectValue placeholder="Pilih kelas" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    <SelectItem value="SD - Kelas 1">SD - Kelas 1</SelectItem>
                    <SelectItem value="SD - Kelas 2">SD - Kelas 2</SelectItem>
                    <SelectItem value="SD - Kelas 3">SD - Kelas 3</SelectItem>
                    <SelectItem value="SD - Kelas 4">SD - Kelas 4</SelectItem>
                    <SelectItem value="SD - Kelas 5">SD - Kelas 5</SelectItem>
                    <SelectItem value="SD - Kelas 6">SD - Kelas 6</SelectItem>
                    <SelectItem value="SMP - Kelas 7">SMP - Kelas 7</SelectItem>
                    <SelectItem value="SMP - Kelas 8">SMP - Kelas 8</SelectItem>
                    <SelectItem value="SMP - Kelas 9">SMP - Kelas 9</SelectItem>
                    <SelectItem value="Lainnya">Lainnya / Umum</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="subject" className="text-xs font-semibold text-gray-700">
                  Mata Pelajaran *
                </Label>
                <div className="relative">
                  <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Matematika, IPA"
                    className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* PAKET */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-blue-600 tracking-wider uppercase flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> PAKET LAYANAN
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="paket" className="text-xs font-semibold text-gray-700">
                  Pilihan Paket
                </Label>
                <Input
                  id="paket"
                  name="paket"
                  value={
                    formData.paket === 'Paket Basic'
                      ? 'Paket Basic (SD & SMP)'
                      : formData.paket === 'Paket Reguler'
                      ? 'Paket Reguler (SD & SMP)'
                      : 'Paket Khusus (Kebutuhan Khusus)'
                  }
                  disabled
                  className="bg-gray-50 border-gray-200 text-gray-700 font-medium h-11 rounded-xl pl-3.5 cursor-not-allowed select-none"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="sessions" className="text-xs font-semibold text-gray-700">
                  Jumlah Pertemuan *
                </Label>
                {formData.paket === 'Paket Basic' ? (
                  <Input
                    id="sessions"
                    name="sessions"
                    value="1 Pertemuan"
                    disabled
                    className="bg-gray-50 border-gray-200 text-gray-700 font-medium h-11 rounded-xl pl-3.5 cursor-not-allowed select-none"
                  />
                ) : (
                  <Select
                    value={formData.sessions}
                    onValueChange={(val) => handleSelectChange('sessions', val)}
                  >
                    <SelectTrigger className="h-11 border-gray-200 rounded-xl bg-white w-full">
                      <SelectValue placeholder="Pilih jumlah pertemuan" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      <SelectItem value="8 Pertemuan">8 Pertemuan (Rekomendasi 1 Bulan)</SelectItem>
                      <SelectItem value="12 Pertemuan">12 Pertemuan</SelectItem>
                      <SelectItem value="16 Pertemuan">16 Pertemuan</SelectItem>
                      <SelectItem value="Custom / Lainnya">Custom / Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* JADWAL */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-blue-600 tracking-wider uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> JADWAL BELAJAR
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="startDate" className="text-xs font-semibold text-gray-700">
                  Tanggal Mulai *
                </Label>
                <div className="relative">
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl text-gray-900 bg-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="startTime" className="text-xs font-semibold text-gray-700">
                  Jam Belajar yang Diinginkan *
                </Label>
                <div className="relative">
                  <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="startTime"
                    name="startTime"
                    type="text"
                    value={formData.startTime}
                    onChange={handleChange}
                    placeholder="Contoh: 14:00 atau 16:30"
                    className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                    required
                  />
                </div>
                {/* Pemilihan Cepat Jam Belajar */}
                <div className="mt-2.5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                    Pilih Cepat Jam:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: 'Pagi (08:00)', value: '08:00' },
                      { label: 'Pagi (10:00)', value: '10:00' },
                      { label: 'Siang (13:30)', value: '13:30' },
                      { label: 'Sore (16:00)', value: '16:00' },
                      { label: 'Malam (19:30)', value: '19:30' },
                    ].map((slot) => {
                      const isSelected = formData.startTime === slot.value
                      return (
                        <button
                          key={slot.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, startTime: slot.value }))}
                          className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer select-none font-medium ${
                            isSelected
                              ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-600/25 scale-105'
                              : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 text-gray-600'
                          }`}
                        >
                          {slot.value}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* PREFERENSI & ALAMAT */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-blue-600 tracking-wider uppercase flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> PREFERENSI & ALAMAT
            </h3>
            
            <div className="space-y-1.5">
              <Label htmlFor="teacherPreference" className="text-xs font-semibold text-gray-700">
                Preferensi Guru *
              </Label>
              <Select
                value={formData.teacherPreference}
                onValueChange={(val) => handleSelectChange('teacherPreference', val)}
              >
                <SelectTrigger className="h-11 border-gray-200 rounded-xl bg-white w-full">
                  <SelectValue placeholder="Pilih preferensi guru" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bebas (Laki-laki / Perempuan)">Bebas (Laki-laki / Perempuan)</SelectItem>
                  <SelectItem value="Guru Laki-laki">Guru Laki-laki</SelectItem>
                  <SelectItem value="Guru Perempuan">Guru Perempuan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="address" className="text-xs font-semibold text-gray-700">
                  Alamat Lengkap *
                </Label>
                <button
                  type="button"
                  onClick={handleGetLocation}
                  disabled={isLocating}
                  className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 cursor-pointer disabled:opacity-50 transition-opacity select-none"
                >
                  {isLocating ? (
                    <>
                      <Loader2 className="w-3 h-3 animate-spin" />
                      Mencari lokasi...
                    </>
                  ) : (
                    <>
                      <LocateFixed className="w-3.5 h-3.5" />
                      Gunakan GPS
                    </>
                  )}
                </button>
              </div>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Masukkan alamat lengkap atau klik 'Gunakan GPS'"
                  className="pl-10 min-h-[80px] border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl resize-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="learningNeeds" className="text-xs font-semibold text-gray-700">
                Kebutuhan Belajar / Catatan Tambahan (Opsional)
              </Label>
              <Textarea
                id="learningNeeds"
                name="learningNeeds"
                value={formData.learningNeeds}
                onChange={handleChange}
                placeholder="Contoh: Fokus persiapan UTS, anak kesulitan di perkalian, butuh guru sabar, dll."
                className="min-h-[80px] border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl resize-none"
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-12 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 h-12 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-gray-900/10 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Kirim via WhatsApp
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
