import HeroBanner from "@/components/section/HeroBanner";
import Partners from "@/components/section/Partners";

export const metadata = {
  title: 'FAAAuto | Kredit Mobil Bekas | ACC, Adira, BFI, Buana Finance, Cimb Niaga, Clipan Panin',
  description: 'Fasilitasi kredit mobil bekas C2C/showroom di Jabodetabek. DP mulai 20% (opsi rendah). ACC, Adira, BFI, Buana Finance, Cimb Niaga, Clipan Panin. Terpercaya dan aman!',
};

export default function CreditPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <HeroBanner
          title={
            <>
              Kredit Mobil Bekas <strong className="text-blue-900">Mudah  </strong>&  <strong className="text-blue-900">Cepat </strong> di <strong className="text-blue-900">Jabodetabek </strong>
            </>
          }
          subTitle={
            <>
              DP Mulai <strong className="text-blue-900">20%</strong>,  Bunga<strong className="text-blue-900"> Flat   </strong>Kompetitif, <br />Tenor hingga
              <strong className="text-blue-900"> 5 Tahun! </strong>
            </>
          }
          description={
            // <>Dengan pengalaman lebih dari <strong>20</strong> tahun (Sejak <strong>2004</strong>), kami sebagai agen bermitra dengan Leasing OJK Terpercaya siap memberikan layanan personal. Kami bantu proses BPKB dan carikan solusi dana terbaik untuk Anda.</>
            <>Kami fasilitasi pembelian mobil bekas idaman Anda di Jabodetabek dengan proses kredit mudah, cepat <strong>3-7</strong> hari, bunga <strong>flat kompetitif</strong>, dan DP mulai <strong>20%</strong> dengan opsi <strong>DP rendah</strong> serta tenor hingga 5 tahun.</>
          }
          imageSrc="/image/pajero.webp"
        />

        <Partners />
      </main>
    </div>
  );
}
