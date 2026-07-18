import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppMockup } from './AppMockup';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Ambient background */}
      <div className="aurora pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] dark:bg-grid-dark" />

      <div className="container flex flex-col items-center text-center">
        <motion.a
          href="#features"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass group mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium shadow-soft"
        >
          <Sparkles className="size-4 text-primary" />
          <span>Now with AI-assisted sprint planning</span>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Project management,{' '}
          <span className="text-gradient">reimagined</span> for modern teams
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
        >
          Plan sprints, track tasks, and ship faster with beautiful boards, real-time
          collaboration, and analytics that actually make sense.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" variant="gradient" className="group w-full sm:w-auto">
            <Link to="/register">
              Start for free
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#features">
              <Play /> Watch demo
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-warning text-warning" />
            ))}
          </div>
          <span>Loved by 12,000+ teams · No credit card required</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 w-full"
        >
          <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-gradient-to-t from-background to-transparent" />
          <AppMockup />
        </motion.div>
      </div>
    </section>
  );
}
