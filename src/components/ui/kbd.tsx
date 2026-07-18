import { cn } from '@/lib/utils';

/** A keyboard-key pill used for shortcut hints (⌘K, Esc, ↵). */
export function Kbd({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <kbd
      className={cn(
        'inline-flex h-5 min-w-5 select-none items-center justify-center rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground shadow-[inset_0_-1px_0_0_hsl(var(--border))]',
        className,
      )}
    >
      {children}
    </kbd>
  );
}
