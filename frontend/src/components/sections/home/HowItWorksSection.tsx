"use client";
import { steps } from '@/data/howItWorksData';
import { SectionTitle, ConnectionLine, StepsGrid } from './how-it-works-components';

const HowItWorksSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container">
        <SectionTitle
          title="Comment ça marche"
          subtitle="Simplifiez votre gestion d'entraînement en 4 étapes simples"
        />

        <div className="relative">
          {/* Ligne de connexion */}
          <ConnectionLine />
          <StepsGrid steps={steps} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;