import { Reveal } from '@/components/common/Reveal';

const COMPANIES = ['Northwind', 'Lumen', 'Atlas', 'Meridian', 'Shipfast', 'Vercel'];

export function LogoCloud() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-12">
      <div className="container">
        <Reveal>
          <p className="text-center text-sm font-medium text-muted-foreground">
            Trusted by fast-moving teams at
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {COMPANIES.map((name, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <span className="text-xl font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground sm:text-2xl">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
