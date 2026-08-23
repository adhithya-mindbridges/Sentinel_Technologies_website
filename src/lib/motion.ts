/**
 * Shared Framer Motion variants and easing for the whole site.
 * Keeping one definition here (instead of redefining fadeUp/scaleIn per page)
 * guarantees every page reveals content with identical timing.
 */

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: EASE_PREMIUM },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.06, ease: EASE_PREMIUM },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

/** Spring used for icon micro-interactions on hover (chips, capability icons). */
export const iconSpring = { type: "spring", stiffness: 300, damping: 12 } as const;

/** Standard viewport config for scroll-reveal - fires once, slightly before entering view. */
export const revealOnce = { once: true, margin: "-60px" } as const;
export const revealOnceTight = { once: true, margin: "-40px" } as const;
