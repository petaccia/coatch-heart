import HeroHome from '@/components/sections/home/HeroHome';
import FeaturesSection from '@/components/sections/home/FeaturesSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroHome />
      <FeaturesSection />
      <TestimonialsSection />
    </main>
  );
}
