"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeEnter } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.7, delay, ease: easeEnter }}
    >
      {children}
    </motion.div>
  );
}
