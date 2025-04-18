"use client";
import { motion } from 'framer-motion';

const NewsletterContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="p-8 md:p-12 lg:p-16"
    >
      <h2 className="text-3xl font-bold text-white mb-4">
        Restez informé des dernières actualités
      </h2>
      <p className="!text-accent-dark !text-lg mb-6">
        Inscrivez-vous à notre newsletter pour recevoir des conseils d'entraînement, des exercices exclusifs et des mises à jour sur nos nouvelles fonctionnalités.
      </p>
      <div className="flex flex-wrap gap-4 mb-8">
        <FeatureItem text="Conseils hebdomadaires" />
        <FeatureItem text="Exercices exclusifs" />
        <FeatureItem text="Offres spéciales" />
      </div>
    </motion.div>
  );
};

const FeatureItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-white">{text}</span>
    </div>
  );
};

export default NewsletterContent;
