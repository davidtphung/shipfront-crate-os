import { AccessForm } from "@/components/access/AccessForm";

export const metadata = {
  title: "Request access - Shipfront",
  description: "Request access to The Crate, Shipfront's freight operating system.",
};

export default function RequestAccessPage() {
  return (
    <section className="mx-auto min-h-[100dvh] max-w-2xl px-5 pb-24 pt-28">
      <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
        Request access
      </h1>
      <p className="mt-4 max-w-[54ch] text-[17px] leading-relaxed text-ink-2">
        Tell us how freight moves through your operation. This preview form
        stays on-device and does not submit to a live waitlist.
      </p>
      <div className="mt-10">
        <AccessForm />
      </div>
    </section>
  );
}
