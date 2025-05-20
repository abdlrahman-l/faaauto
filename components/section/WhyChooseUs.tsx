import React from 'react'

const itemList = [
    {
        icon: (
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
        ),
        "title": "Pengalaman Lebih dari 20 Tahun (Sejak 2004)",
        "description": "Percayakan kebutuhan dana Anda pada tim agen profesional dan terpercaya yang telah berpengalaman di bidang pendanaan BPKB kendaraan."
    },
    {
        icon: (
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        ),
        "title": "Akses ke Banyak Leasing OJK Terkemuka",
        "description": "Kami bermitra hanya dengan puluhan leasing dan multifinance ternama yang terdaftar dan diawasi OJK, memastikan keamanan dan pilihan terbaik untuk Anda."
    },
    {
        icon: (
            <>
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
            </>
        ),
        "title": "Pinjaman Fleksibel Rp 30 Juta s/d Rp 1 Miliar",
        "description": "Ajukan jumlah pinjaman yang benar-benar sesuai dengan kebutuhan Anda, mulai dari yang kecil hingga jumlah besar."
    },
    {
        icon: (
            <path fillRule="evenodd" d="M11.99 2.243a4.49 4.49 0 0 0-3.398 1.55 4.49 4.49 0 0 0-3.497 1.306 4.491 4.491 0 0 0-1.307 3.498 4.491 4.491 0 0 0-1.548 3.397c0 1.357.6 2.573 1.548 3.397a4.491 4.491 0 0 0 1.307 3.498 4.49 4.49 0 0 0 3.498 1.307 4.49 4.49 0 0 0 3.397 1.549 4.49 4.49 0 0 0 3.397-1.549 4.49 4.49 0 0 0 3.497-1.307 4.491 4.491 0 0 0 1.306-3.497 4.491 4.491 0 0 0 1.55-3.398c0-1.357-.601-2.573-1.549-3.397a4.491 4.491 0 0 0-1.307-3.498 4.49 4.49 0 0 0-3.498-1.307 4.49 4.49 0 0 0-3.396-1.549Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Zm-5.78-.905a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm4.5 4.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
        ),
        "title": "Suku Bunga Kompetitif & Tenor Panjang",
        "description": "Nikmati suku bunga ringan mulai 8% per tahun dan pilihan cicilan yang nyaman hingga 60 bulan (5 tahun)."
    },
    {
        icon: (
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
        ),
        "title": "Proses Mudah & Respon Cepat",
        "description": "Kami pandu seluruh proses pengajuan Anda dengan layanan personal, respon cepat, dan siap memfasilitasi hingga dana cair."
    },
    {
        icon: (
            <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
        ),
        "title": "Solusi BPKB Pajak Mati & Nama Orang Lain",
        "description": "Jangan khawatir! Kami siap bantu carikan solusi dan proses pengajuan meskipun status pajak STNK mati atau BPKB bukan atas nama sendiri."
    },
    {
        icon: (
            <>
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </>
        ),
        "title": "Menerima Semua Jenis Kendaraan",
        "description": "Ajukan pinjaman untuk semua jenis Mobil & Motor (kecuali alat berat) melalui layanan kami."
    },
    {
        icon: (
            <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
        ),
        "title": "Layanan Luas, Seluruh Indonesia",
        "description": "Di mana pun Anda berada di Indonesia (khusus Leaseback), kami siap membantu proses pengajuan pinjaman BPKB Anda."
    },
    {
        icon: (
            <>
                <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clipRule="evenodd" />
            </>
        ),
        "title": "BPKB Aman di Leasing Terpercaya",
        "description": "BPKB kendaraan Anda tersimpan dengan aman di pihak leasing mitra kami yang terdaftar dan diawasi OJK hingga pinjaman lunas."
    }
]

const WhyChooseUs = () => {
    return (
        <div className="bg-white p-2 rounded-md relative" id="why-choose-us">
            <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2  opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br  to-blue-400 from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-blue-600"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-2">
                <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100 text-center mx-auto">
                    <h2 className="my-8 text-2xl font-bold text-gray-800 md:text-4xl">Agen Dana BPKB <strong className='text-blue-900'>Terpercaya</strong> Anda</h2>
                    <p className="text-gray-500">
                        Kami adalah <strong className='text-blue-900'>FAAAuto</strong>, tim agen profesional dan berpengalaman sejak tahun <strong className='text-blue-900'>2004</strong>, spesialis dalam membantu Anda mendapatkan pinjaman tunai dengan jaminan BPKB Mobil atau Motor dari berbagai leasing dan multifinance ternama yang terdaftar dan diawasi <strong className='text-red-700'>OJK</strong>.

                        Berperan sebagai mitra terpercaya Anda, kami siap menjembatani dan mencarikan penawaran pinjaman paling kompetitif serta memandu proses pengajuan Anda agar berjalan mudah dan lancar.
                    </p>
                </div>
                <div
                    className="mt-16 grid divide-x divide-y  divide-gray-400 overflow-hidden  rounded-3xl border text-gray-600 border-gray-400 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
                    {
                        itemList.map(i => (
                            <div key={i.title} className="group relative bg-blue-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                <div className="relative space-y-4 py-12 p-8">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-10">
                                        {i.icon}
                                    </svg>

                                    <div className="space-y-2">
                                        <h5 className="text-md font-semibold text-white transition group-hover:text-secondary">{i.title}</h5>
                                        <p className="text-gray-300 text-xs sm:text-sm">{i.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs