"use client";
import { motion } from 'framer-motion';
import { pricingPlans } from '@/data/pricingData';
import PricingCard from './PricingCard';

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Des tarifs adaptés à vos besoins
          </h2>
          <p className="mt-4 text-xl !text-gray-600">
            Choisissez le plan qui correspond à votre situation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="!text-gray-600 !text-base mb-6">
            Besoin d'une solution personnalisée pour votre organisation ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md transition-all duration-300"
          >
            Contactez-nous pour un devis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
