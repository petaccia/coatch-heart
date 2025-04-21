"use client";
import { motion } from 'framer-motion';
import FeatureItem from './FeatureItem';

interface FeaturesListProps {
  features: string[];
}

const FeaturesList = ({ features }: FeaturesListProps) => {
  return (
    <motion.ul 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      {features.map((feature, index) => (
        <FeatureItem 
          key={index} 
          text={feature} 
          delay={0.5 + (index * 0.1)} 
        />
      ))}
    </motion.ul>
  );
};

export default FeaturesList;
