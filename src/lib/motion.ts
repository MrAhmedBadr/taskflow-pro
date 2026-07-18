import type { Transition, Variants } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Motion design system                                               */
/*  A single source of truth for easings, springs, and variants so     */
/*  every surface animates with the same physical language.            */
/* ------------------------------------------------------------------ */

/** Signature "expo-out" curve — Apple/Linear-grade deceleration. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** Snappy curve for hovers and taps. */
export const EASE_OUT_QUICK = [0.22, 1, 0.36, 1] as const;

/** Soft, symmetric curve for looping ambient motion. */
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const spring = {
  /** Default UI spring — settles fast, barely overshoots. */
  soft: { type: 'spring', stiffness: 400, damping: 32, mass: 0.8 } as Transition,
  /** Playful spring for pills, toggles, and layout transitions. */
  bounce: { type: 'spring', stiffness: 500, damping: 28, mass: 0.7 } as Transition,
  /** Slow, weighty spring for large hero elements. */
  gentle: { type: 'spring', stiffness: 120, damping: 20 } as Transition,
} as const;

/** Durations, in seconds, keyed by intent. */
export const duration = {
  fast: 0.2,
  base: 0.4,
  slow: 0.6,
  slower: 0.9,
} as const;

/* ---- Reveal (fade + rise on scroll into view) -------------------- */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: EASE_OUT_EXPO },
  },
};

/** Build a fade-up variant with a custom offset/delay. */
export const makeFadeUp = (y = 20, delay = 0): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: EASE_OUT_EXPO, delay },
  },
});

/* ---- Stagger orchestration --------------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

/* ---- Scale-in (for cards / modals / badges) ---------------------- */

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.base, ease: EASE_OUT_EXPO },
  },
};

/* ---- Page transitions -------------------------------------------- */

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: EASE_OUT_QUICK },
  },
};

/** Shared viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, margin: '-80px' } as const;

/** Standard hover-lift props for interactive cards. */
export const hoverLift = {
  whileHover: { y: -4 },
  transition: spring.soft,
} as const;
