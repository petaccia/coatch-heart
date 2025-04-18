"use client";
import { features } from '@/data/features';
import {
  SectionTitle,
  FeaturesGrid
} from './features-components';

const FeaturesSection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Tout ce dont vous avez besoin pour réussir"
          subtitle="Des outils puissants pour optimiser vos entraînements"
        />

        <FeaturesGrid features={features} />
      </div>
    </section>
  );
};

export default FeaturesSection;
