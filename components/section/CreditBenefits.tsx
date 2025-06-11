import { BadgePercent, Car, ChartNoAxesCombined, ShieldCheck, ShieldUser, Zap } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { UserConnectFormDialog } from '../form/UserConnectFormDialog'
const benefits = [
    {
        "title": "Pilihan Unit Kendaraan Bebas & Fleksibel",
        "description": "Anda memiliki kebebasan penuh untuk mencari mobil bekas impian Anda dari individu (C2C) atau showroom mana pun. Kami juga memfasilitasi pembelian melalui showroom mobil bekas rekanan FAAAuto.",
        Icon: Car,
    },
    {
        "title": "Proses Kredit Cepat & Transparan",
        "description": "Nikmati proses pengajuan kredit yang efisien dengan estimasi 3 hingga 7 hari kerja. Seluruh tahapan akan dijelaskan secara transparan oleh tim kami.",
        Icon: Zap,
    },
    {
        "title": "Fleksibilitas Uang Muka (DP) yang Menarik",
        "description": "Dapatkan penawaran uang muka (DP) mulai dari 20%, dengan opsi DP rendah yang sangat fleksibel menyesuaikan jenis unit, harga, dan ketentuan pasar dari mitra leasing kami.",
        Icon: BadgePercent,

    },
    {
        "title": "Suku Bunga Flat Kompetitif & Tenor Panjang",
        "description": "Kami menawarkan suku bunga Flat Kompetitif yang ringan, membuat cicilan Anda lebih terjangkau. Tersedia pilihan tenor dari 1 hingga maksimal 5 tahun sesuai kebutuhan Anda.",
        Icon: ChartNoAxesCombined,
    },
    {
        "title": "Didukung Jaringan Mitra Pembiayaan OJK Terkemuka",
        "description": "Kami bermitra dengan lembaga pembiayaan terkemuka yang terdaftar dan diawasi Otoritas Jasa Keuangan (OJK), seperti ACC, Clipan, BCA Finance, Adira Finance, BFI Finance, CIMB Niaga, Mega Finance, Buana Finance, dan banyak lagi.",
        Icon: ShieldCheck,
    },
    {
        "title": "Pendampingan Tenaga Ahli & Bantuan Purna Jual",
        "description": "Tim kami yang berpengalaman siap membimbing Anda dalam setiap langkah proses, dari pemilihan unit hingga pengajuan kredit. Kami juga menyediakan bantuan purna jual untuk kenyamanan Anda.",
        Icon: ShieldUser,
    }
]

const CreditBenefits = () => {
    return (
        <section className="px-3 md:lg:xl:px-40  py-20 bg-opacity-10">
            <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border rounded-tl-xl rounded-tr-xl overflow-hidden">

                {
                    benefits.map((benefit, index) => (
                        <div key={index} className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                            <span className="p-5 rounded-full bg-blue-900 text-white shadow-lg shadow-blue-200">
                                {benefit.Icon ? <benefit.Icon className="w-8 h-8" /> : null}
                            </span>
                            <p className="text-lg font-semibold text-slate-700 mt-3">{benefit.title}</p>
                            <p className="mt-2 text-sm text-slate-500">{benefit.description}</p>
                        </div>
                    ))
                }
            </div>

            <div className="w-full bg-blue-900 shadow-xl shadow-indigo-200 p-6 md:p-10 flex flex-col sm:flex-row justify-between items-center rounded-bl-xl rounded-br-xl space-y-4">
                <p className="text-white text-center md:text-left">
                    <span className="text-xl md:text-2xl font-bold">Masih Bingung?</span>
                    <br />
                    <span className="text-sm md:text-lg">Hubungi kami untuk konsultasi lebih lanjut secara gratis!</span>
                </p>
                <UserConnectFormDialog
                    button={
                        <Button variant="outline" className='w-full md:max-w-60 h-10 md:h-12 md:text-lg font-semibold rounded-sm text-blue-900'>
                            Konsultasi
                        </Button>
                    }
                />
            </div>

        </section>
    )
}

export default CreditBenefits