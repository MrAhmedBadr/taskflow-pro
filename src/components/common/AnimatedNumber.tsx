import { useEffect, useRef } from 'react';
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  /** Digits after the decimal point. */
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Format with thousands separators. */
  format?: boolean;
}

/**
 * Count-up number that animates from 0 → value the first time it scrolls
 * into view. Uses a spring for organic deceleration and writes to the DOM
 * imperatively to avoid per-frame React re-renders.
 */
export function AnimatedNumber({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
  format = false,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 22, mass: 1 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    if (reduceMotion) {
      if (ref.current) ref.current.textContent = render(value);
      return;
    }
    const unsubscribe = spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = render(latest);
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spring, reduceMotion, value, decimals, prefix, suffix, format]);

  function render(n: number) {
    const fixed = format
      ? n.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : n.toFixed(decimals);
    return `${prefix}${fixed}${suffix}`;
  }

  return (
    <span ref={ref} className={className}>
      {render(0)}
    </span>
  );
}
