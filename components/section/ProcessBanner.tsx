import { FileCheck2, FileText, HandCoins, HeartHandshake, ListCheck } from "lucide-react";

const timelineItems = [
    {
        icon: <FileText className="w-6 h-6 lg:w-9 lg:h-9 text-white" />,
        description: "Mengisi formulir pengajuan lalu akan terhubung via WhatsApp."
    },
    {
        icon: <FileCheck2 className="w-6 h-6 lg:w-9 lg:h-9 text-white" />,
        description: "Kami akan melakukan verifikasi data, menganalisa detail kebutuhan, dan mengkonfirmasi kelengkapan dokumen."
    },
    {
        icon: <ListCheck className="w-6 h-6 lg:w-9 lg:h-9 text-white" />,
        description: "Berdasarkan analisa, kami carikan opsi pinjaman BPKB paling sesuai dari mitra leasing kami, lalu Anda bisa memilih penawaran yang terbaik."
    },
    {
        icon: <HeartHandshake className="w-6 h-6 lg:w-9 lg:h-9 text-white" />,
        description: "Kami fasilitasi dan memproses pengajuan formal Anda ke pihak leasing terpilih, termasuk penjadwalan dan pelaksanaan appraisal kendaraan."
    },
    {
        icon: <HandCoins className="w-6 h-6 lg:w-9 lg:h-9 text-white" />,
        description: "Setelah pihak leasing menyetujui, dana akan langsung ditransfer ke rekening bank Anda. BPKB kendaraan aman di pihak leasing kami."
    },
];

export default function HorizontalTimeline() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center space-y-6 lg:space-y-14 relative">
            <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2  opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br  to-blue-400 from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-blue-600"></div>
            </div>
            <h1 className="text-2xl lg:text-3xl text-gray-700 text-center font-bold">Bagaimana Kami Membantu Anda</h1>
            <div className="flex flex-row space-x-2 lg:flex-col lg:items-center py-8 px-10">
                {/* Timeline Icons + Dividers */}
                <div className="flex flex-col lg:flex-row items-center">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="flex flex-col lg:flex-row items-center">
                            {/* Icon */}
                            <div className="relative flex flex-col items-center">
                                <div className="z-10 bg-blue-700 p-5 rounded-full shadow-md">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Divider */}
                            {index !== timelineItems.length - 1 && (
                                <div
                                    className={`
                  bg-gray-300
                  lg:h-0.5 lg:w-40
                  h-10 w-0.5
                `}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Labels */}
                <div className="flex flex-col lg:flex-row mt-0 lg:mt-4 lg:space-x-11 lg:space-y-0">
                    {timelineItems.map((item, index) => (
                        <div key={index}>
                            <div key={index} className="flex items-center lg:w-48 lg:h-fit h-[64px]">
                                <p className="text-xs lg:text-base text-gray-500 lg:text-center">{item.description}</p>
                            </div>
                            <div className="h-10" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
