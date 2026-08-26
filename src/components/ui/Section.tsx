import { cn } from "@/lib/cn";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-28 px-5 md:px-8 lg:px-12", className)}
    >
      <div className="mx-auto w-full max-w-[1440px]">{children}</div>
    </section>
  );
}

export function SampleTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[8px] border border-line bg-bg/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3",
        className,
      )}
    >
      Sample workspace
    </span>
  );
}
