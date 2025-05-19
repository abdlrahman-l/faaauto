import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Pinjaman Dana BPKB Mobil & Motor Cepat Cair | Agen OJK Terpercaya',
  description: 'Pinjaman Dana BPKB Mobil & Motor cepat cair s/d 1 Miliar. Bermitra leasing OJK terpercaya. Taksasi tinggi, bunga kompetitif. Ajukan via agen ahli, layanan se-Indonesia!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
