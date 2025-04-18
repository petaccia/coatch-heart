import HeroHome from '@/components/sections/home/HeroHome';
import FeaturesSection from '@/components/sections/home/FeaturesSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import HowItWorksSection from '@/components/sections/home/HowItWorksSection';
import FaqSection from '@/components/sections/home/faq-section';

export default function Home() {
  return (
    <main>
      <HeroHome />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
