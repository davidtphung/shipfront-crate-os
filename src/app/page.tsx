import { Hero } from "@/components/shipfront/Hero";
import { NetworkExperience } from "@/components/shipfront/NetworkExperience";
import { ServiceModules } from "@/components/shipfront/ServiceModules";
import { ProcessJourney } from "@/components/shipfront/ProcessJourney";
import { CustomerSuccess } from "@/components/shipfront/CustomerSuccess";
import { ContactCTA } from "@/components/shipfront/ContactCTA";
import { capabilityList } from "@/data/site-copy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section aria-label="Capabilities" className="border-y border-line bg-paper">
        <ul className="mx-auto flex max-w-[1440px] flex-wrap gap-x-6 gap-y-2 px-5 py-5 text-[13px] font-medium tracking-[0.04em] text-ink-2 sm:px-8">
          {capabilityList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <NetworkExperience />
      <ServiceModules />
      <ProcessJourney />
      <CustomerSuccess />
      <ContactCTA />
    </>
  );
}
