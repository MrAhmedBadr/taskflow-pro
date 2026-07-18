import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Reveal } from '@/components/common/Reveal';
import { cn } from '@/lib/utils';
import { spring } from '@/lib/motion';
import { PRICING } from '../data';
import { SectionHeading } from './SectionHeading';

type Cycle = 'monthly' | 'yearly';

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>('yearly');

  return (
    <section id="pricing" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple pricing that <span className="text-gradient">scales with you</span>
            </>
          }
          description="Start free, upgrade when you are ready. Every plan includes unlimited tasks."
        />

        <Reveal className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/60 p-1">
            {(['monthly', 'yearly'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                aria-pressed={cycle === c}
                className={cn(
                  'relative rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors',
                  cycle === c ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {cycle === c && (
                  <motion.span
                    layoutId="cycle-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary shadow-glow-sm"
                    transition={spring.bounce}
                  />
                )}
                {c}
                {c === 'yearly' && (
                  <span className={cn('ml-1.5 text-xs', cycle === c ? 'text-primary-foreground/80' : 'text-success')}>
                    –25%
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 lg:grid-cols-3">
          {PRICING.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <SpotlightCard
                className={cn(
                  'flex h-full flex-col p-7',
                  plan.popular
                    ? 'border-primary/40 shadow-glow lg:-translate-y-3 lg:scale-[1.02]'
                    : 'hover:-translate-y-1',
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
                    <Sparkles className="size-3" /> Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-sm font-medium text-muted-foreground">$</span>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={plan.price[cycle]}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="text-5xl font-semibold tracking-tight tabular-nums"
                    >
                      {plan.price[cycle]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="pb-1 text-sm text-muted-foreground">/user/mo</span>
                </div>

                <Button
                  asChild
                  variant={plan.popular ? 'gradient' : 'outline'}
                  className="mt-6 w-full"
                >
                  <Link to="/register">{plan.cta}</Link>
                </Button>

                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/12 text-success">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
