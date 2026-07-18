import { Reveal } from '@/components/common/Reveal';

const COMPANIES = ['Northwind', 'Lumen', 'Atlas', 'Meridian', 'Shipfast', 'Vercel', 'Linear', 'Ramp'];

export function LogoCloud() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-12">
      <div className="container">
        <Reveal>
          <p className="text-center text-sm font-medium text-muted-foreground">
            Trusted by fast-moving teams at
          </p>
        </Reveal>

        {/* Infinite marquee — pauses on hover, fades at the edges */}
        <div className="group mask-fade-x relative mt-8 flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-x-12 pr-12 group-hover:[animation-play-state:paused] sm:gap-x-16 sm:pr-16">
            {COMPANIES.map((name) => (
              <span
                key={name}
                className="whitespace-nowrap text-xl font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground sm:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
          {/* Duplicate track for a seamless loop */}
          <div
            aria-hidden
            className="flex shrink-0 animate-marquee items-center gap-x-12 pr-12 group-hover:[animation-play-state:paused] sm:gap-x-16 sm:pr-16"
          >
            {COMPANIES.map((name) => (
              <span
                key={name}
                className="whitespace-nowrap text-xl font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground sm:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
