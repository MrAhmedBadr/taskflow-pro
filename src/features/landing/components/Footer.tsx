import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Careers', 'Blog', 'Contact'],
  Resources: ['Docs', 'Help center', 'API', 'Status'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

const SOCIALS = [
  { icon: Twitter, label: 'TaskFlow on X' },
  { icon: Github, label: 'TaskFlow on GitHub' },
  { icon: Linkedin, label: 'TaskFlow on LinkedIn' },
];

export function Footer() {
  const onSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    toast.success('Subscribed!', { description: 'You’re on the list for product updates.' });
    form.reset();
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The premium project management platform for modern teams. Plan, track, and ship
              work you’re proud of.
            </p>

            {/* Newsletter */}
            <form onSubmit={onSubscribe} className="mt-6 max-w-xs">
              <label htmlFor="newsletter" className="text-sm font-medium">
                Stay in the loop
              </label>
              <div className="mt-2 flex gap-2">
                <Input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-10"
                />
                <Button type="submit" size="icon" variant="gradient" aria-label="Subscribe">
                  <ArrowRight />
                </Button>
              </div>
            </form>

            <div className="mt-6 flex gap-2">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-foreground"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold">{group}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TaskFlow Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-success" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              All systems operational
            </span>
            <Link to="/login" className="transition-colors hover:text-foreground">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
