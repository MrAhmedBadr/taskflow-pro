import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Quote } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { ThemeToggle } from '@/components/common/ThemeToggle';

const PERKS = [
  'Unlimited tasks on every plan',
  'Real-time collaboration built in',
  'No credit card required to start',
];

export function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="aurora aurora-animate absolute inset-0 -z-10" />
        <div className="grain absolute inset-0 -z-10 opacity-[0.12] mix-blend-overlay" />
        <div className="absolute inset-0 -z-10 bg-grid-dark bg-[size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <Link to="/">
          <Logo />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <Quote className="size-10 text-primary" />
          <p className="mt-6 text-2xl font-medium leading-snug">
            TaskFlow Pro replaced three tools for us. Our team ships 40% faster and everyone
            actually enjoys planning now.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-indigo-500 font-bold text-white">
              SD
            </span>
            <div>
              <div className="font-semibold">Sarah Dohan</div>
              <div className="text-sm text-muted-foreground">VP Engineering, Northwind</div>
            </div>
          </div>
        </motion.div>

        <ul className="space-y-3">
          {PERKS.map((perk) => (
            <li key={perk} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 text-success" />
              {perk}
            </li>
          ))}
        </ul>
      </div>

      {/* Form panel */}
      <div className="relative flex flex-col justify-center px-6 py-12 sm:px-12">
        <div className="absolute right-6 top-6 flex items-center gap-2">
          <ThemeToggle />
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="lg:hidden">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 lg:mt-0"
          >
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            <div className="mt-8">{children}</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
