import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { title } from "process";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  title: 'FAAAuto | Pinjaman BPKB Mobil & Motor | ACC, Adira, BFI, Buana Finance, Cimb Niaga, Clipan Panin',
  description: 'Ajukan pinjaman jaminan BPKB motor/mobil proses cepat. ACC, Adira, BFI, Buana Finance, Cimb Niaga, Clipan Panin. Terpercaya dan aman!',
}

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'FAAAuto',
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/image/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "Pinjaman Dana Cepat",
      },
    ]
  },

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
