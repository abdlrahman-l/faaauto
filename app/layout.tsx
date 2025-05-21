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

export const metadata: Metadata = {
  title: 'Pinjaman BPKB Mobil & Motor | ACC, Adira, BFI, Buana Finance, Cimb Niaga, Clipan Panin',
  description: 'Ajukan pinjaman jaminan BPKB motor/mobil proses cepat. ACC, Adira, BFI, Buana Finance, Cimb Niaga, Clipan Panin. Terpercaya dan aman!',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images: ['/image/faauto-banner-1.webp']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </head>
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
