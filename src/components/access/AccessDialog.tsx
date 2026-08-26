"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X } from "@phosphor-icons/react";
import { useAccess } from "@/components/access/AccessContext";
import { AccessForm } from "@/components/access/AccessForm";
import { easeEnter } from "@/lib/motion";

export function AccessDialog() {
  const { open, hide } = useAccess();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, hide]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute inset-0 bg-black/70"
            aria-label="Close request access"
            onClick={hide}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="access-title"
            className="relative z-10 w-full max-w-lg rounded-[20px] border border-line bg-bg-2 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.5)] sm:p-8"
            initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.4, ease: easeEnter }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 id="access-title" className="text-2xl font-medium tracking-tight">
                  Request access
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                  Tell us how freight moves through your operation. We will
                  follow up with a workspace walkthrough.
                </p>
              </div>
              <button
                onClick={hide}
                className="rounded-[10px] p-1.5 text-ink-2 hover:bg-white/[0.04] hover:text-ink"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <AccessForm compact />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
