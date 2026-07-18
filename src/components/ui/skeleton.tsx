import { cn } from '@/lib/utils';

/** Shimmering placeholder used across loading states. */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('relative overflow-hidden rounded-md bg-muted shimmer', className)}
      {...props}
    />
  );
}

export { Skeleton };
