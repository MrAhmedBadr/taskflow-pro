import { Loader2 } from 'lucide-react';
import { Logo } from './Logo';

/** Full-screen fallback shown while a lazily-loaded route resolves. */
export function PageLoader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <Logo showWordmark={false} className="animate-float" />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="size-4 animate-spin" />
        Loading…
      </div>
    </div>
  );
}
