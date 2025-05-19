import { UserConnectFormDialog } from "@/components/form/UserConnectFormDialog";
import HeroBanner from "@/components/section/HeroBanner";
import Partners from "@/components/section/Partners";
import ProcessBanner from "@/components/section/ProcessBanner";
import WhyChooseUs from "@/components/section/WhyChooseUs";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <HeroBanner />
        <WhyChooseUs />
        <Partners />
        <ProcessBanner />
      </main>
    </div>
  );
}
