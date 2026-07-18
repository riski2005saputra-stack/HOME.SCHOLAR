import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HOME SCHOLAR - Les Privat ke Rumah untuk Anak SD & SMP di Pekanbaru",
  description:
    "Layanan les privat ke rumah yang membantu siswa SD dan SMP memperoleh pengalaman belajar yang lebih nyaman, fokus, dan efektif. Guru profesional yang datang langsung ke rumah Anda. Melayani wilayah Pekanbaru.",
  keywords: [
    "les privat",
    "les privat Pekanbaru",
    "guru ke rumah",
    "bimbel Pekanbaru",
    "les SD",
    "les SMP",
    "HOME SCHOLAR",
  ],
  authors: [{ name: "HOME SCHOLAR" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "HOME SCHOLAR - Les Privat ke Rumah",
    description:
      "Belajar lebih nyaman bersama guru profesional yang datang langsung ke rumah Anda. Melayani wilayah Pekanbaru.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}