import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function RequirementList() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-9/12 lg:max-w-6/12 mx-auto min-h-screen">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg lg:text-3xl font-bold text-gray-600">Persyaratan Profil Peminjam</AccordionTrigger>
                <AccordionContent>
                    <ul className="list-inside list-disc space-y-1 px-2 lg:text-lg">
                        <li>
                            <strong className="text-blue-700">Warga Negara Indonesia (WNI).</strong>
                        </li>
                        <li>
                            <strong className="text-blue-700">Berusia 21 hingga 60 Tahun</strong> saat pinjaman jatuh tempo (usia maksimal saat pengajuan menyesuaikan tenor).
                        </li>
                        <li>
                            <strong className="text-blue-700">Status Perkawinan:</strong> Mencakup Belum Menikah, Menikah, atau Cerai.
                        </li>
                        <li>
                            <strong className="text-blue-700">Status Tempat Tinggal:</strong>
                            <ul className="list-inside list-disc space-y-0.5 px-2">
                                <li>Diutamakan Rumah Milik Sendiri atau Keluarga.</li>
                                <li>Jika berstatus Kontrak atau Sewa, wajib melampirkan Penjamin (Orang Tua Kandung).</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="text-blue-700">Memiliki Profesi atau Pekerjaan:</strong>
                            <ul className="list-inside list-disc space-y-0.5 px-2">
                                <li>Karyawan (Tetap atau Kontrak)</li>
                                <li>Pegawai Negeri Sipil (PNS)</li>
                                <li>Wiraswasta (Memiliki Usaha)</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="text-blue-700">Tidak dapat Diterima Apabila:</strong> Jenis usaha/profesi melanggar hukum.
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg lg:text-3xl font-bold text-gray-600">Persyaratan Profil Kendaraan</AccordionTrigger>
                <AccordionContent>
                    <ul className="list-inside list-disc space-y-1 px-2 lg:text-lg">
                        <li>
                            Memiliki <strong className="text-blue-700">BPKB Kendaraan Asli</strong> (Mobil atau Motor).
                        </li>
                        <li>
                            <strong className="text-blue-700">Kepemilikan BPKB:</strong> Tidak wajib atas nama pemohon sendiri. Bisa atas nama orang lain (jumlah pencairan pinjaman menyesuaikan).
                        </li>
                        <li>
                            <strong className="text-blue-700">Tahun Minimal Kendaraan (Leaseback):</strong>
                            <ul className="list-inside list-disc space-y-1 px-2">
                                <li>Mobil: Minimal Tahun <strong className="text-blue-700">2006</strong> (khusus merk Jepang Fast Moving seperti Toyota, Honda, Daihatsu, Suzuki, Mitsubishi, Nissan).</li>
                                <li>Motor: Minimal Tahun <strong className="text-blue-700">2012</strong>.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="text-blue-700">Status Pajak STNK:</strong> Bisa diajukan meskipun status pajak mati (jumlah pencairan pinjaman menyesuaikan).
                        </li>
                        <li>
                            <strong className="text-blue-700">Jenis Kendaraan:</strong> Menerima pengajuan untuk <strong className="text-blue-700">semua jenis Mobil dan Motor</strong> (kecuali alat berat).
                        </li>
                        <li>
                            Kondisi fisik kendaraan baik dan layak.
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
