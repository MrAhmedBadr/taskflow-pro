import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/common/Reveal';
import { sleep } from '@/lib/utils';
import { SectionHeading } from './SectionHeading';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email address'),
  message: z.string().min(10, 'Tell us a little more (10+ characters)'),
});

type ContactForm = z.infer<typeof contactSchema>;

const CHANNELS = [
  { icon: Mail, label: 'Email us', value: 'hello@taskflow.pro' },
  { icon: MessageSquare, label: 'Live chat', value: 'Mon–Fri, 9–6 ET' },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    await sleep(900); // simulate network
    toast.success('Message sent!', {
      description: `Thanks ${data.name}, we’ll get back to you shortly.`,
    });
    reset();
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          description="Questions about plans, migration, or a demo? Drop us a line."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center gap-4">
              {CHANNELS.map((c) => (
                <Card key={c.label} className="flex items-center gap-4 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{c.label}</div>
                    <div className="text-sm text-muted-foreground">{c.value}</div>
                  </div>
                </Card>
              ))}
              <p className="px-1 text-sm leading-relaxed text-muted-foreground">
                Prefer a guided walkthrough? Our team will tailor a demo to your workflow and
                answer migration questions in real time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Jane Cooper"
                    error={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    error={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help?"
                    error={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button type="submit" variant="gradient" className="w-full" loading={isSubmitting}>
                  {!isSubmitting && <Send />} Send message
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
