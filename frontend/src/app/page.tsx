import HeroHome from '@/components/sections/home/HeroHome';
import FeaturesSection from '@/components/sections/home/FeaturesSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import HowItWorksSection from '@/components/sections/home/HowItWorksSection';
import FaqSection from '@/components/sections/home/faq-section';
import StatsSection from '@/components/sections/home/stats-section';
import CtaSection from '@/components/sections/home/cta-section';

export default function Home() {
  return (
    <main>
      <HeroHome />
      <StatsSection />
      <FeaturesSection />
      <CtaSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
