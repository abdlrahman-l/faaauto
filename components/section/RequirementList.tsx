import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function RequirementList() {
    return (
        <section className="text-center space-y-8 lg:space-y-20 flex items-center flex-col my-36">
            <div className="flex items-center flex-col space-y-4 lg:space-y-8">
                <h2 className="font-bold text-xl lg:text-3xl text-gray-700">Syarat Mudah, Proses Lancar</h2>
                <p className="max-w-8/12 lg:max-w-7/12 text-gray-500">Kami telah merancang persyaratan yang transparan dan mudah dipenuhi. Pahami kriteria pemohon, dokumen yang diperlukan, dan profil kendaraan Anda agar pengajuan dana berjalan lancar.</p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-10/12 lg:max-w-6/12 mx-auto p-6 lg:p-10 bg-blue-900 rounded-3xl text-left text-gray-200 shadow-2xl">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="lg:text-xl font-semibold text-gray-100">Persyaratan Profil Peminjam</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-inside list-disc space-y-1 px-2 text-xs lg:text-lg">
                            <li>
                                <strong>Warga Negara Indonesia (WNI).</strong>
                            </li>
                            <li>
                                <strong>Berusia 21 hingga 60 Tahun</strong> saat pinjaman jatuh tempo (usia maksimal saat pengajuan menyesuaikan tenor).
                            </li>
                            <li>
                                <strong>Status Perkawinan:</strong> Mencakup Belum Menikah, Menikah, atau Cerai.
                            </li>
                            <li>
                                <strong>Status Tempat Tinggal:</strong>
                                <ul className="list-inside list-disc space-y-0.5 px-2">
                                    <li>Diutamakan Rumah Milik Sendiri atau Keluarga.</li>
                                    <li>Jika berstatus Kontrak atau Sewa, wajib melampirkan Penjamin (Orang Tua Kandung).</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Memiliki Profesi atau Pekerjaan:</strong>
                                <ul className="list-inside list-disc space-y-0.5 px-2">
                                    <li>Karyawan (Tetap atau Kontrak)</li>
                                    <li>Pegawai Negeri Sipil (PNS)</li>
                                    <li>Wiraswasta (Memiliki Usaha)</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Tidak dapat Diterima Apabila:</strong> Jenis usaha/profesi melanggar hukum.
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="lg:text-xl font-semibold text-gray-100">Persyaratan Profil Kendaraan</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-inside list-disc space-y-1 px-2 text-xs lg:text-lg">
                            <li>
                                Memiliki <strong>BPKB Kendaraan Asli</strong> (Mobil atau Motor).
                            </li>
                            <li>
                                <strong>Kepemilikan BPKB:</strong> Tidak wajib atas nama pemohon sendiri. Bisa atas nama orang lain (jumlah pencairan pinjaman menyesuaikan).
                            </li>
                            <li>
                                <strong>Tahun Minimal Kendaraan (Leaseback):</strong>
                                <ul className="list-inside list-disc space-y-1 px-2">
                                    <li>Mobil: Minimal Tahun <strong>2006</strong> (khusus merk Jepang Fast Moving seperti Toyota, Honda, Daihatsu, Suzuki, Mitsubishi, Nissan).</li>
                                    <li>Motor: Minimal Tahun <strong>2012</strong>.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Status Pajak STNK:</strong> Bisa diajukan meskipun status pajak mati (jumlah pencairan pinjaman menyesuaikan).
                            </li>
                            <li>
                                <strong>Jenis Kendaraan:</strong> Menerima pengajuan untuk <strong>semua jenis Mobil dan Motor</strong> (kecuali alat berat).
                            </li>
                            <li>
                                Kondisi fisik kendaraan baik dan layak.
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}
