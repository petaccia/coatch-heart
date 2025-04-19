"use client";
import { motion } from 'framer-motion';

const FeaturesList = () => {
  const features = [
    {
      text: "Bibliothèque d'exercices personnalisables",
      colStart: 1,
      colEnd: 2,
      rowStart: 1,
      rowEnd: 2
    },
    {
      text: "Planification tactique interactive",
      colStart: 2,
      colEnd: 3,
      rowStart: 2,
      rowEnd: 3
    },
    {
      text: "Partage facile avec votre staff",
      colStart: 3,
      colEnd: 4,
      rowStart: 1,
      rowEnd: 2
    }
  ];

  // Mapper les valeurs aux classes Tailwind
  const colStartClasses: { [key: number]: string } = {
    1: 'lg:col-start-1',
    2: 'lg:col-start-2',
    3: 'lg:col-start-3'
  };

  const colEndClasses : { [key: number]: string } = {
    2: 'lg:col-end-2',
    3: 'lg:col-end-3',
    4: 'lg:col-end-4'
  };

  const rowStartClasses: { [key: number]: string } = {
    1: 'lg:row-start-1',
    2: 'lg:row-start-2'
  };

  const rowEndClasses : { [key: number]: string } = {
    2: 'lg:row-end-2',
    3: 'lg:row-end-3'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-6 sm:mb-8 mobile-center lg:my-16"
    >
      <ul className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2" aria-label="Fonctionnalités principales">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center lg:bg-accent-dark/5 lg:rounded-2xl ${colStartClasses[feature.colStart]} ${colEndClasses[feature.colEnd]} ${rowStartClasses[feature.rowStart]} ${rowEndClasses[feature.rowEnd]}`}
          >
            <svg className="mobile-icon h-5 w-5 sm:h-6 sm:w-6 text-green500 mr-2 hover-scale-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="sr-only">Fonctionnalité incluse:</span>
            <span className="mobile-text">{feature.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeaturesList;
