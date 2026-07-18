import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/common/Reveal';

export function CTA() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 px-6 py-16 text-center sm:px-16">
            <div className="aurora absolute inset-0 -z-10 opacity-90" />
            <div className="absolute inset-0 -z-10 bg-background/40" />
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Ready to ship faster with your team?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Join 12,000+ teams already planning smarter with TaskFlow Pro. Free to start.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="gradient" className="group w-full sm:w-auto">
                <Link to="/register">
                  Start for free
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href="#contact">Talk to sales</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
