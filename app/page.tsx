import { UserConnectFormDialog } from "@/components/form/UserConnectFormDialog";
import AdditionalBanner from "@/components/section/AdditionalBanner";
import HeroBanner from "@/components/section/HeroBanner";
import Partners from "@/components/section/Partners";
import ProcessBanner from "@/components/section/ProcessBanner";
import { RequirementList } from "@/components/section/RequirementList";
import WhyChooseUs from "@/components/section/WhyChooseUs";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <HeroBanner
          title={
            <>
              Pinjaman <strong className="text-blue-900">Dana Cepat </strong>Jaminan
              <strong className="text-blue-900"> BPKB  </strong> Motor dan Mobil
            </>
          }
          subTitle={
            <>
              Gadai BPKB Motor atau Mobil Tanpa Ribet s/d
              <strong className="text-blue-900"> Rp 1 Miliar  </strong>
              <br />
              Layanan Seluruh
              <strong className="text-blue-900"> Indonesia! </strong>
            </>
          }
          description={
            <>
            Dengan pengalaman lebih dari <strong>20</strong> tahun (Sejak <strong>2004</strong>), kami sebagai agen bermitra dengan Leasing OJK Terpercaya siap memberikan layanan personal. Kami bantu proses BPKB dan carikan solusi dana terbaik untuk Anda.</>
          }
          imageSrc="/image/hero-banner-1.webp"
        />
        <WhyChooseUs />
        <ProcessBanner />
        <AdditionalBanner />
        <RequirementList />
        <Partners />
      </main>
    </div>
  );
}
