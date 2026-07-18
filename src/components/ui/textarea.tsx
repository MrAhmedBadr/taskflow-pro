import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, 'aria-invalid': ariaInvalid, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={ariaInvalid ?? error ?? undefined}
      className={cn(
        'flex min-h-[112px] w-full resize-y rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-soft transition-all duration-200',
        'placeholder:text-muted-foreground',
        'hover:border-input/70',
        'focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40',
        'disabled:cursor-not-allowed disabled:opacity-50',
        (error || ariaInvalid) &&
          'border-destructive/60 focus-visible:border-destructive focus-visible:ring-destructive/30',
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = 'Textarea';

export { Textarea };
