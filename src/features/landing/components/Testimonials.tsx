import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Reveal } from '@/components/common/Reveal';
import { AnimatedNumber } from '@/components/common/AnimatedNumber';
import { STATS, TESTIMONIALS } from '../data';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-y border-border/60 bg-muted/30 py-24 sm:py-32"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Teams everywhere <span className="text-gradient">love TaskFlow</span>
            </>
          }
          description="Do not take our word for it — here is what real teams say after switching."
        />

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="text-center">
              <div className="text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
                <AnimatedNumber
                  value={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </Reveal>
          ))}
        </div>

        {/* Masonry-ish grid */}
        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06}>
              <Card className="group break-inside-avoid p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                <div className="mb-3 flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/90">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-primary to-indigo-500 text-white">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.title}</div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
