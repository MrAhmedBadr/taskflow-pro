import { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SparklineProps {
  data: number[];
  className?: string;
  /** HSL triplet, e.g. "245 78% 58%". Defaults to the brand primary. */
  color?: string;
  width?: number;
  height?: number;
  /** Draw a soft area fill beneath the line. */
  fill?: boolean;
}

/**
 * Minimal, dependency-free sparkline. Renders a smooth path that draws
 * itself in on mount, with an optional gradient area fill. Perfect for
 * inline trends inside stat cards where a full chart would be overkill.
 */
export function Sparkline({
  data,
  className,
  color = '245 78% 58%',
  width = 120,
  height = 36,
  fill = true,
}: SparklineProps) {
  const id = useId().replace(/:/g, '');
  const reduceMotion = useReducedMotion();

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);

  const points = data.map((d, i) => {
    const x = i * step;
    const y = height - ((d - min) / range) * (height - 4) - 2;
    return [x, y] as const;
  });

  const line = points.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
  const area = `${line} ${width},${height} 0,${height}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={`spark-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={`hsl(${color})`} stopOpacity={0.28} />
          <stop offset="100%" stopColor={`hsl(${color})`} stopOpacity={0} />
        </linearGradient>
      </defs>
      {fill && <polygon points={area} fill={`url(#spark-${id})`} />}
      <motion.polyline
        points={line}
        fill="none"
        stroke={`hsl(${color})`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
        animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
