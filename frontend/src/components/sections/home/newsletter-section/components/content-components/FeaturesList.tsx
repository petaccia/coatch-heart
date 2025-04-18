"use client";
import { motion } from 'framer-motion';
import FeatureItem from './FeatureItem';

interface FeaturesListProps {
  features: string[];
  isMobile?: boolean;
}

const FeaturesList = ({ features, isMobile = false }: FeaturesListProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div
      className={`${isMobile ? 'flex flex-col items-center sm:items-start space-y-3' : 'flex flex-wrap gap-3 sm:gap-4'} mb-6 sm:mb-8`}
      aria-label="Avantages de la newsletter"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} isMobile={isMobile} />
      ))}
    </motion.div>
  );
};

export default FeaturesList;
