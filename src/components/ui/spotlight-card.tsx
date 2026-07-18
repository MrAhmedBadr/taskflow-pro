import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * A card that renders a radial "spotlight" glow tracking the pointer.
 * Pure CSS variables + a single pointer handler — no re-renders on move.
 * Falls back gracefully (no spotlight) under reduced-motion via the base class.
 */
const SpotlightCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, onMouseMove, children, ...props }, ref) => {
    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--y', `${e.clientY - rect.top}px`);
      onMouseMove?.(e);
    };

    return (
      <div
        ref={ref}
        onMouseMove={handleMove}
        className={cn(
          'spotlight group relative overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-card transition-all duration-300 ease-out-quick hover:border-primary/25 hover:shadow-elevated',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
SpotlightCard.displayName = 'SpotlightCard';

export { SpotlightCard };
