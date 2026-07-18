import { Navbar } from '@/features/landing/components/Navbar';
import { Hero } from '@/features/landing/components/Hero';
import { LogoCloud } from '@/features/landing/components/LogoCloud';
import { Features } from '@/features/landing/components/Features';
import { Pricing } from '@/features/landing/components/Pricing';
import { Testimonials } from '@/features/landing/components/Testimonials';
import { FAQ } from '@/features/landing/components/FAQ';
import { Contact } from '@/features/landing/components/Contact';
import { CTA } from '@/features/landing/components/CTA';
import { Footer } from '@/features/landing/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <Hero />
        <LogoCloud />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
