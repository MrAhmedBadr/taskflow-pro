import { motion } from 'framer-motion';
import { Logo } from './Logo';

/** Full-screen fallback shown while a lazily-loaded route resolves. */
export function PageLoader() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden">
      <div className="aurora pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="animate-float"
      >
        <Logo showWordmark={false} />
      </motion.div>

      {/* Indeterminate progress track */}
      <div className="h-1 w-40 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-violet-500"
          animate={{ x: ['-100%', '260%'] }}
          transition={{ duration: 1.1, ease: 'easeInOut', repeat: Infinity }}
        />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
