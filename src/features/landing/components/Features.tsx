import { motion } from 'framer-motion';
import { Reveal } from '@/components/common/Reveal';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/motion';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { BENTO, FEATURES } from '../data';
import { SectionHeading } from './SectionHeading';

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything your team needs to{' '}
              <span className="text-gradient">ship great work</span>
            </>
          }
          description="A complete toolkit that stays out of your way — thoughtfully designed and ridiculously fast."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <motion.div key={feature.title} variants={staggerItem}>
              <SpotlightCard className="group h-full p-6 hover:-translate-y-1">
                <div className="relative flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-violet-500/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <feature.icon className="size-6" />
                  <span className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento strip */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENTO.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <SpotlightCard className="h-full bg-muted/40 p-6">
                <item.icon className="size-5 text-primary" />
                <h3 className="mt-4 text-base font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
