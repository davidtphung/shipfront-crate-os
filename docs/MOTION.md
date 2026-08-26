# Shipfront motion specifications

Easing
- Enter: cubic-bezier(0.22, 1, 0.36, 1)
- Standard: cubic-bezier(0.16, 1, 0.3, 1)

Timing
- Micro-interactions: 120-220ms (buttons, chips, links)
- Component transitions: 260-450ms (tabs, tables, panels)
- Section choreography: 600-1000ms (hero, in-view reveals)

Hero sequence
1. Grid field is present on first paint
2. Horizon glow fades in (1100ms)
3. Headline clips upward, line by line (800ms, 160ms stagger)
4. Route arcs draw (1150ms, 80ms stagger)
5. Port markers scale in (500ms)
6. Shipment panel springs from the right (550ms at 900ms)
7. Event stream items arrive (700ms stagger)
8. CTAs rise (550ms at 680ms)
9. Route dashes continue at low speed

Interaction
- Buttons: 1px lift, edge glow, 200ms. Active: scale 0.98
- Cards: 6px lift, brighter 1px border
- Map tooltips: fade + 4px rise
- Tabs: shared layout underline
- Charts: pathLength draw on viewport entry; hover for exact values
- How it works: GSAP pin + scrub on desktop only (`start: "top top"`)

Reduced motion
- Disable pulse, dash flow, typing, parallax, and scroll pin
- Keep opacity reveals instant or very short
- Honor `prefers-reduced-motion`
