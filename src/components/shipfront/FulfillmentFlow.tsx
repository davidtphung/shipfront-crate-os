"use client";

import { useReducedMotion } from "motion/react";
import { flowLabels } from "@/data/site-copy";

export function FulfillmentFlow() {
  const reduce = useReducedMotion();

  return (
    <figure className="relative overflow-hidden rounded-[20px] border border-line bg-paper shadow-[0_24px_80px_rgba(13,21,32,0.08)]">
      <figcaption className="sr-only">
        Illustrative Shipfront order flow from storefront through inventory, picking,
        packing, and delivery. Not live customer data.
      </figcaption>
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          Shipfront / Order Flow
        </p>
        <p className="font-mono text-[11px] text-muted">Illustrative</p>
      </div>
      <div className="relative aspect-[5/4] min-h-[280px] bg-[radial-gradient(circle_at_70%_30%,rgba(35,104,246,0.08),transparent_46%)]">
        <svg
          viewBox="0 0 640 500"
          className="h-full w-full"
          role="img"
          aria-label="Abstract fulfillment path: store, inventory, pick, pack, ship, customer"
        >
          <defs>
            <linearGradient id="route" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2368F6" />
              <stop offset="100%" stopColor="#42D8F4" />
            </linearGradient>
          </defs>
          <rect width="640" height="500" fill="#F7F8F4" />
          <g opacity="0.35" stroke="#DCE2E7" strokeWidth="1">
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 56} y1="0" x2={i * 56} y2="500" />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 52} x2="640" y2={i * 52} />
            ))}
          </g>

          <path
            d="M120 120 C 180 120, 210 200, 320 210 C 430 220, 470 140, 540 150"
            fill="none"
            stroke="url(#route)"
            strokeWidth="2"
            className={reduce ? undefined : "flow-dash"}
            pathLength={1}
          />
          <path
            d="M320 210 C 330 280, 250 320, 170 360"
            fill="none"
            stroke="url(#route)"
            strokeWidth="2"
            opacity="0.7"
            className={reduce ? undefined : "flow-dash"}
          />
          <path
            d="M320 210 C 360 300, 470 340, 540 380"
            fill="none"
            stroke="url(#route)"
            strokeWidth="2"
            opacity="0.7"
            className={reduce ? undefined : "flow-dash"}
          />

          {!reduce ? (
            <>
              <circle r="5" fill="#2368F6">
                <animateMotion
                  dur="8s"
                  repeatCount="indefinite"
                  path="M120 120 C 180 120, 210 200, 320 210 C 430 220, 470 140, 540 150"
                />
              </circle>
              <circle r="4" fill="#42D8F4">
                <animateMotion
                  dur="11s"
                  begin="2s"
                  repeatCount="indefinite"
                  path="M320 210 C 360 300, 470 340, 540 380"
                />
              </circle>
            </>
          ) : null}

          <g>
            <rect x="48" y="78" width="148" height="86" rx="14" fill="#fff" stroke="#DCE2E7" />
            <text x="64" y="104" fill="#667382" fontSize="10" fontFamily="ui-monospace, monospace">
              STORE
            </text>
            <text x="64" y="128" fill="#0D1520" fontSize="16" fontWeight="700">
              Storefront
            </text>
            <text x="64" y="148" fill="#2368F6" fontSize="11" fontFamily="ui-monospace, monospace">
              {flowLabels[0]}
            </text>
          </g>

          <g>
            <rect x="250" y="168" width="140" height="96" rx="16" fill="#0D1520" />
            <circle cx="320" cy="204" r="10" fill="#2368F6" className={reduce ? undefined : "node-breathe"} />
            <text x="270" y="232" fill="#F7FBFF" fontSize="12" fontWeight="700">
              SHIPFRONT
            </text>
            <text x="270" y="250" fill="#A7BBCC" fontSize="10" fontFamily="ui-monospace, monospace">
              {flowLabels[1]}
            </text>
          </g>

          <g>
            {Array.from({ length: 6 }).map((_, i) => (
              <rect
                key={i}
                x={78 + (i % 3) * 22}
                y={300 + Math.floor(i / 3) * 22}
                width="18"
                height="18"
                rx="4"
                fill={i === 2 ? "#2368F6" : "#E7EFFF"}
              />
            ))}
            <text x="78" y="290" fill="#667382" fontSize="10" fontFamily="ui-monospace, monospace">
              INVENTORY
            </text>
          </g>

          <g>
            <rect x="230" y="330" width="150" height="70" rx="12" fill="#fff" stroke="#DCE2E7" />
            <text x="246" y="358" fill="#0D1520" fontSize="14" fontWeight="700">
              Pick / Pack
            </text>
            <text x="246" y="380" fill="#2368F6" fontSize="11" fontFamily="ui-monospace, monospace">
              {flowLabels[2]} → {flowLabels[3]}
            </text>
          </g>

          <g>
            <rect x="470" y="108" width="122" height="78" rx="14" fill="#fff" stroke="#DCE2E7" />
            <text x="486" y="136" fill="#667382" fontSize="10" fontFamily="ui-monospace, monospace">
              PARCEL
            </text>
            <text x="486" y="160" fill="#0D1520" fontSize="13" fontWeight="700">
              {flowLabels[4]}
            </text>
          </g>

          <g>
            <rect x="470" y="344" width="122" height="70" rx="14" fill="#E7EFFF" />
            <circle cx="496" cy="372" r="6" fill="#37C988" />
            <text x="512" y="376" fill="#0D1520" fontSize="13" fontWeight="700">
              Customer
            </text>
            <text x="486" y="396" fill="#164AB6" fontSize="10" fontFamily="ui-monospace, monospace">
              {flowLabels[5]}
            </text>
          </g>
        </svg>
        {!reduce ? (
          <div
            className="scan-line pointer-events-none absolute inset-y-10 w-16 bg-gradient-to-r from-transparent via-cyan/25 to-transparent"
            aria-hidden
          />
        ) : null}
      </div>
    </figure>
  );
}
