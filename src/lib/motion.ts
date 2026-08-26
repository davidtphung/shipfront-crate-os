export const easeEnter = [0.16, 1, 0.3, 1] as const;
export const easeSmooth = [0.22, 1, 0.36, 1] as const;
export const easeStandard = [0.4, 0, 0.2, 1] as const;

export const duration = {
  micro: 0.14,
  fast: 0.2,
  ui: 0.3,
  standard: 0.45,
  slow: 0.7,
  hero: 1.1,
};

export function fadeUp(reduce: boolean | null) {
  if (reduce) {
    return {
      initial: false as const,
      whileInView: { opacity: 1, y: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.28 },
    transition: { duration: 0.7, ease: easeEnter },
  };
}
