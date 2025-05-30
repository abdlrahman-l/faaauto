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
        <HeroBanner />
        <WhyChooseUs />
        <ProcessBanner />
        <AdditionalBanner />
        <RequirementList />
        <Partners />
      </main>
    </div>
  );
}
