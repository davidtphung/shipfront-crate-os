import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { WhySection } from "@/components/why/WhySection";
import { Capabilities } from "@/components/product/Capabilities";
import { Intelligence } from "@/components/ai/Intelligence";
import { HowItWorks } from "@/components/journey/HowItWorks";
import { Developers } from "@/components/developers/Developers";
import { Pricing } from "@/components/pricing/Pricing";
import { FinalCta } from "@/components/cta/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhySection />
      <Capabilities />
      <Intelligence />
      <HowItWorks />
      <Developers />
      <Pricing />
      <FinalCta />
    </>
  );
}
