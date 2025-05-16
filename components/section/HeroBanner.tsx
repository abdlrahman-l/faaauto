import Image from 'next/image'
import React from 'react'

const HeroBanner = () => {
    return (
        <section className="bg-white lg:grid lg:h-screen lg:place-content-center px-2 lg:px-10" id="hero-banner">
            <div
                className="mx-auto md:grid md:grid-cols-2 md:items-center md:gap-5 p-3.5 lg:px-8 lg:py-2"
            >
                <div className="text-left">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Solusi
                        <strong className="text-blue-700"> Dana Tunai </strong> Cepat
                    </h1>
                    <br />
                    <h2 className="text-xl font-medium text-gray-700 sm:text-2xl">
                        Cairkan BPKB Kendaraan Anda s/d
                        <strong className="text-blue-700"> Rp 1 Miliar  </strong>
                    </h2>
                    <h2 className="text-xl font-medium text-gray-700 sm:text-2xl">
                        Layanan Seluruh
                        <strong className="text-blue-700"> Indonesia! </strong>
                    </h2>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        Dengan pengalaman lebih dari <strong>20</strong> tahun (Sejak <strong>2004</strong>), kami sebagai agen bermitra dengan Leasing OJK Terpercaya siap memberikan layanan personal. Kami bantu proses BPKB dan carikan solusi dana terbaik untuk Anda.
                    </p>
                    <br />
                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded-md bg-blue-700 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-600"
                            href="#"
                        >
                            Konsultasi Gratis & Ajukan
                        </a>

                        {/* <a
                            className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                            href="#"
                        >
                            Learn More
                        </a> */}
                    </div>
                </div>

                <Image
                    src="/image/hero-banner-1.webp"
                    alt='Kendaraan'
                    width={1200}
                    height={1200}
                />

            </div>
        </section>
    )
}

export default HeroBanner