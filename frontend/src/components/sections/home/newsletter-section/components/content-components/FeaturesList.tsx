"use client";
import { motion } from 'framer-motion';
import FeatureItem from './FeatureItem';

interface FeaturesListProps {
  features: string[];
}

const FeaturesList = ({ features }: FeaturesListProps) => {
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
      className="flex flex-wrap gap-4 mb-8"
      aria-label="Avantages de la newsletter"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} index={index} />
      ))}
    </motion.div>
  );
};

export default FeaturesList;
