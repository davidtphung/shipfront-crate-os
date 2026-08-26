"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { RouteMap } from "@/components/hero/RouteMap";
import { StatusDot } from "@/components/ui/StatusDot";
import { SampleTag } from "@/components/ui/Section";
import { featuredShipment, heroEvents, heroTimeline } from "@/lib/data";
import { easeEnter } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function CommandCenter() {
  const reduce = useReducedMotion();
  const [events, setEvents] = useState(heroEvents.slice(0, 1));
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const cardX = useTransform(sx, [-40, 40], [-8, 8]);
  const cardY = useTransform(sy, [-40, 40], [-6, 6]);

  useEffect(() => {
    if (reduce) {
      setEvents(heroEvents);
      return;
    }
    const timers = heroEvents.map((event, i) =>
      window.setTimeout(() => {
        setEvents((prev) => (prev.includes(event) ? prev : [...prev, event]));
      }, 1400 + i * 700),
    );
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  return (
    <motion.div
      className="panel relative h-[520px] overflow-hidden lg:h-[560px]"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 40);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 40);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.25, ease: easeEnter }}
    >
      <img
        src="/media/horizon.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-bg/40 via-bg-2/20 to-transparent" />
      <RouteMap selected="chi" />

      <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
        <SampleTag />
        <span className="inline-flex items-center gap-1.5 rounded-[8px] border border-line bg-bg/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-2">
          <StatusDot tone="live" pulse />
          Live view
        </span>
      </div>

      <motion.aside
        style={reduce ? undefined : { x: cardX, y: cardY }}
        className="absolute bottom-4 left-4 right-4 z-10 grid gap-3 lg:bottom-5 lg:left-auto lg:right-5 lg:w-[320px]"
        initial={reduce ? false : { opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.55, ease: easeEnter }}
      >
        <div className="rounded-[16px] border border-line bg-bg-2/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[12px] text-cyan">{featuredShipment.id}</p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ok/30 bg-ok/10 px-2 py-0.5 text-[11px] text-ok">
              <StatusDot tone="ok" /> {featuredShipment.status}
            </span>
          </div>
          <h3 className="mt-2 text-[17px] font-medium tracking-tight">
            {featuredShipment.route}
          </h3>
          <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12px] text-ink-2">
            <div>
              <dt className="text-ink-3">Mode</dt>
              <dd className="text-ink">{featuredShipment.mode}</dd>
            </div>
            <div>
              <dt className="text-ink-3">ETA</dt>
              <dd className="font-mono text-ink">{featuredShipment.eta}</dd>
            </div>
            <div>
              <dt className="text-ink-3">Risk</dt>
              <dd className="text-ok">{featuredShipment.risk}</dd>
            </div>
            <div>
              <dt className="text-ink-3">Owner</dt>
              <dd className="text-ink">{featuredShipment.owner}</dd>
            </div>
          </dl>
          <ol className="mt-4 grid grid-cols-4 gap-1.5">
            {heroTimeline.map((step) => (
              <li key={step.label} className="min-w-0">
                <div
                  className={cn(
                    "h-1 rounded-full",
                    step.done
                      ? "bg-ok"
                      : step.current
                        ? "bg-cyan"
                        : "bg-white/10",
                  )}
                />
                <p className="mt-1.5 truncate text-[10px] leading-tight text-ink-3">
                  {step.label}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-[16px] border border-line bg-bg/80 p-3 backdrop-blur-md">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
            Event stream
          </p>
          <ul className="grid gap-1.5">
            {events.map((event) => (
              <motion.li
                key={event}
                className="flex items-start gap-2 text-[12px] text-ink-2"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <StatusDot tone="live" />
                {event}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.aside>
    </motion.div>
  );
}
