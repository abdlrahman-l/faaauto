import Image from 'next/image'
import React from 'react'

const logoList = [
    {
        alt: "Acc Logo",
        src: "/image/acc-logo.webp",
    },
    {
        alt: "Adira Logo",
        src: "/image/adira-logo.webp",
    },
    {
        alt: "BFI Logo",
        src: "/image/bfi-logo.webp",
    },
    {
        alt: "Buana Logo",
        src: "/image/buana-logo.webp",
    },
    {
        alt: "CIMB Logo",
        src: "/image/cimb-logo.webp",
    },
    {
        alt: "Clipan Logo",
        src: "/image/clipan-logo.webp",
    },
]

const Partners = () => {
    return (
        <section className='mt-10 min-h-screen flex items-center justify-center flex-col px-10 space-y-4'>

            <div className='max-w-[600px] space-y-5 lg:space-y-10'>
                <h1 className='font-bold text-2xl lg:text-4xl text-center'>Mitra Leasing <strong className='text-blue-900'>Terpercaya</strong> Kami</h1>
                <p className='text-center text-gray-500'>Kami hanya bekerja sama dengan perusahaan leasing dan multifinance ternama yang <strong className='text-blue-900'>terdaftar</strong> dan diawasi <strong className='text-red-700'>OJK</strong>. Ini memastikan keamanan dan legalitas setiap transaksi Anda, serta akses ke penawaran terbaik.</p>
            </div>
            <div className="px-5 lg:px-20 py-5 max-w-[1000px] mx-auto w-full lg:py-20 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-11">
                {
                    logoList.map(l => (
                        <div key={l.alt} className='flex items-center justify-center border-2 border-gray-200 rounded-xl p-4 shadow-xl overflow-hidden'>
                            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" /> */}
                            {/* <div className='h-[100px] w-[80px] lg:h-[140px] lg:w-[120px] relative '> */}
                            <div className='h-full w-full min-h-16 lg:min-h-25 relative'>
                                <Image
                                    objectFit='contain'
                                    fill
                                    src={l.src}
                                    alt={l.alt}
                                    className='absolute'
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Partners