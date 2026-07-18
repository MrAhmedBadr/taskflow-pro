import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/common/MagneticButton';
import { AnimatedNumber } from '@/components/common/AnimatedNumber';
import { EASE_OUT_EXPO } from '@/lib/motion';
import { AppMockup } from './AppMockup';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Ambient background */}
      <div className="aurora aurora-animate pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] dark:bg-grid-dark" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container flex flex-col items-center text-center"
      >
        <motion.a
          variants={item}
          href="#features"
          className="glass group mb-7 inline-flex items-center gap-2 rounded-full py-1.5 pl-2 pr-4 text-sm font-medium shadow-soft transition-shadow hover:shadow-elevated"
        >
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/12 px-2 py-0.5 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" /> New
          </span>
          <span>AI-assisted sprint planning</span>
          <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.h1
          variants={item}
          className="max-w-4xl text-balance text-display-xl"
        >
          Project management,{' '}
          <span className="text-gradient">reimagined</span> for modern teams
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Plan sprints, track tasks, and ship faster with beautiful boards, real-time
          collaboration, and analytics that actually make sense.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <Button asChild size="lg" variant="gradient" className="group w-full sm:w-auto">
              <Link to="/register">
                Start for free
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </Magnetic>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#features">
              <Play /> Watch demo
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground"
        >
          <div className="flex" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-warning text-warning" />
            ))}
          </div>
          <span>
            Loved by{' '}
            <span className="font-semibold text-foreground">
              <AnimatedNumber value={12000} format suffix="+" />
            </span>{' '}
            teams · No credit card required
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT_EXPO }}
          className="relative mt-16 w-full [perspective:2000px]"
        >
          <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-gradient-to-t from-background to-transparent" />
          <AppMockup />
        </motion.div>
      </motion.div>
    </section>
  );
}
