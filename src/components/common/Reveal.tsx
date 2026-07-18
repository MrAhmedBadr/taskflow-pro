import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_OUT_EXPO, viewportOnce } from '@/lib/motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Optional element tag for correct semantics. */
  as?: 'div' | 'li' | 'span';
}

/** Fade + rise on scroll into view. Respects reduced-motion via CSS globally. */
export function Reveal({ children, delay = 0, y = 20, className, as = 'div' }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </MotionTag>
  );
}

// Re-exported for backwards compatibility — canonical source is '@/lib/motion'.
export { staggerContainer, staggerItem } from '@/lib/motion';
