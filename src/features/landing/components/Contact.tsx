import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Send } from 'lucide-react';
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
    <section id="contact" className="py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          description="Questions about plans, migration, or a demo? Drop us a line."
        />
        <Reveal className="mx-auto mt-12 max-w-xl">
          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Jane Cooper" {...register('name')} />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="jane@company.com" {...register('email')} />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help?" {...register('message')} />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>
              <Button type="submit" variant="gradient" className="w-full" loading={isSubmitting}>
                {!isSubmitting && <Send />} Send message
              </Button>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
