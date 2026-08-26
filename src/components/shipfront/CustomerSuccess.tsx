import { customerSuccess } from "@/data/site-copy";

export function CustomerSuccess() {
  return (
    <section className="bg-accent-soft" aria-labelledby="success-heading">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <h2 id="success-heading" className="sr-only">
            Customer success
          </h2>
          <p className="max-w-[18ch] text-[34px] leading-[1.12] font-semibold tracking-[-0.04em] text-ink sm:text-[48px] lg:text-[56px]">
            {customerSuccess.copy}
          </p>
        </div>
        <div
          className="rounded-[20px] border border-line bg-paper p-6"
          aria-hidden
        >
          <svg viewBox="0 0 360 260" className="w-full">
            <path
              d="M70 70 C 140 70, 140 130, 180 130 C 230 130, 240 80, 300 80"
              fill="none"
              stroke="#2368F6"
              strokeWidth="1.6"
            />
            <path
              d="M180 130 C 180 180, 240 200, 300 200"
              fill="none"
              stroke="#37C988"
              strokeWidth="1.6"
            />
            <circle cx="70" cy="70" r="28" fill="#E7EFFF" />
            <circle cx="180" cy="130" r="34" fill="#0D1520" />
            <circle cx="300" cy="80" r="28" fill="#E7EFFF" />
            <circle cx="300" cy="200" r="16" fill="#37C988" />
            <text x="70" y="74" textAnchor="middle" fontSize="9" fill="#0D1520">
              Merchant
            </text>
            <text x="180" y="128" textAnchor="middle" fontSize="8" fill="#F7FBFF">
              Account
            </text>
            <text x="180" y="140" textAnchor="middle" fontSize="8" fill="#F7FBFF">
              manager
            </text>
            <text x="300" y="84" textAnchor="middle" fontSize="8" fill="#0D1520">
              Operations
            </text>
            <text x="300" y="204" textAnchor="middle" fontSize="8" fill="#07111E">
              Done
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
