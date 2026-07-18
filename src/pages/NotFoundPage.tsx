import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/common/Logo';

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="aurora aurora-animate pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <Link to="/" className="absolute left-6 top-6">
        <Logo />
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-gradient text-[8rem] font-bold leading-none sm:text-[12rem]">
          404
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-2 text-2xl font-semibold sm:text-3xl"
      >
        This page took a day off
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-3 max-w-md text-muted-foreground"
      >
        The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <Button asChild variant="gradient" size="lg">
          <Link to="/">
            <Home /> Back home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/dashboard">
            <ArrowLeft /> Go to dashboard
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
