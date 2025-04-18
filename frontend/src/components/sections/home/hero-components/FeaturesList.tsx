"use client";
import { motion } from 'framer-motion';

const FeaturesList = () => {
  const features = [
    "Bibliothèque d'exercices personnalisables",
    "Planification tactique interactive",
    "Partage facile avec votre staff"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-6 sm:mb-8 mobile-center"
    >
      <ul className="space-y-2 sm:space-y-3 mobile-feature-list" aria-label="Fonctionnalités principales">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="mobile-icon h-5 w-5 sm:h-6 sm:w-6 text-green500 mr-2 hover-scale-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="sr-only">Fonctionnalité incluse:</span>
            <span className="mobile-text">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeaturesList;
