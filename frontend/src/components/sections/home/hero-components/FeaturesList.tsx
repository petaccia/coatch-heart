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
      className="mb-8 text-left"
    >
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="h-6 w-6 text-green500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeaturesList;
