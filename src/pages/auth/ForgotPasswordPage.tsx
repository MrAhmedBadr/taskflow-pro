import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowLeft, MailCheck } from 'lucide-react';
import { AuthLayout } from '@/features/auth/AuthLayout';
import { forgotSchema, type ForgotValues } from '@/features/auth/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { sleep } from '@/lib/utils';

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ForgotValues>({ resolver: zodResolver(forgotSchema) });

  const onSubmit = async (_values: ForgotValues) => {
    await sleep(800);
    setSent(true);
  };

  return (
    <AuthLayout
      title={sent ? 'Check your inbox' : 'Reset your password'}
      subtitle={
        sent
          ? 'We’ve sent you a secure link to reset your password.'
          : 'Enter your email and we’ll send you a reset link.'
      }
    >
      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 rounded-xl border border-success/30 bg-success/10 p-4">
            <MailCheck className="size-5 text-success" />
            <p className="text-sm">
              A reset link was sent to <span className="font-medium">{getValues('email')}</span>.
            </p>
          </div>
          <Button asChild variant="outline" className="w-full">
            <Link to="/login">
              <ArrowLeft /> Back to sign in
            </Link>
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@company.com" autoComplete="email" {...register('email')} />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <Button type="submit" variant="gradient" className="w-full" loading={isSubmitting}>
            Send reset link
          </Button>
          <Button asChild variant="ghost" className="w-full">
            <Link to="/login">
              <ArrowLeft /> Back to sign in
            </Link>
          </Button>
        </form>
      )}
    </AuthLayout>
  );
}
