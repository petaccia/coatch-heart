"use client";
import { motion } from 'framer-motion';

interface FeatureItemProps {
  text: string;
  delay: number;
}

const FeatureItem = ({ text, delay }: FeatureItemProps) => {
  return (
    <motion.li 
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <span className="bg-white/20 rounded-full p-1 mr-3">
        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
      {text}
    </motion.li>
  );
};

export default FeatureItem;
