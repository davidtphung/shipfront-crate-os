import { capabilityList, services } from "@/data/site-copy";
import { withBase } from "@/lib/paths";
import { Reveal } from "@/components/motion/Reveal";

export function ServiceModules() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">
        Warehousing, fulfillment, ecommerce integrations, and location
      </h2>

      <Reveal className="grid items-center gap-8 overflow-hidden rounded-[20px] border border-line bg-paper lg:grid-cols-2">
        <div className="relative min-h-[280px] lg:min-h-[420px]">
          <img
            src={withBase("/media/procurement.jpg")}
            alt="High angle pick floor of yellow bins and cartons under pallet racking"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="px-6 py-8 lg:px-10">
          <h3 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">
            {services.warehousing.title}
          </h3>
          <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-ink-2 sm:text-[17px]">
            {services.warehousing.copy}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-8 rounded-[20px] border border-line bg-surface px-6 py-10 sm:px-10">
        <h3 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">
          {services.fulfillment.title}
        </h3>
        <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-ink-2 sm:text-[17px]">
          {services.fulfillment.copy}
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {capabilityList.map((item) => (
            <li
              key={item}
              className="rounded-[14px] border border-line bg-paper px-3 py-4 text-center text-[13px] font-medium text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 overflow-hidden rounded-[16px]">
          <img
            src={withBase("/media/parcels.jpg")}
            alt="Stacked kraft parcels with barcode labels, used as an abstract fulfillment visual"
            className="h-56 w-full object-cover sm:h-72"
            loading="lazy"
          />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="rounded-[20px] border border-line bg-paper p-6 sm:p-10">
          <h3 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">
            {services.integrations.title}
          </h3>
          <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-ink-2 sm:text-[17px]">
            {services.integrations.copy}
          </p>
        </Reveal>
        <Reveal delay={0.08} className="overflow-hidden rounded-[20px] border border-line">
          <img
            src={withBase("/media/route-nodes.jpg")}
            alt="Abstract route line connecting circular nodes on a pale surface"
            className="h-full min-h-[240px] w-full object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>

      <Reveal className="mt-8 overflow-hidden rounded-[20px] border border-line">
        <img
          src={withBase("/media/logistics-usa.jpg")}
          alt="A row of long hood freight tractors lined up at dusk"
          className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
          loading="lazy"
        />
      </Reveal>

      <Reveal className="relative mt-8 min-h-[420px] overflow-hidden rounded-[20px]">
        <img
          src={withBase("/media/downtown-la.jpg")}
          alt="The Reef building in downtown Los Angeles, home to Shipfront, with the city skyline beyond"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10" />
        <div className="relative flex min-h-[420px] items-end p-6 sm:p-10">
          <div className="max-w-[40rem] text-night-text">
            <h3 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">
              {services.location.title}
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-night-text/90 sm:text-[17px]">
              {services.location.copy}
            </p>
            <p className="mt-4 text-[14px] text-night-text/80">{services.location.note}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
