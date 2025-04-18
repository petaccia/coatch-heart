"use client";
import { motion } from 'framer-motion';

interface FeatureItemProps {
  text: string;
  index?: number;
}

const FeatureItem = ({ text }: FeatureItemProps) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="flex items-center"
      variants={itemVariants}
    >
      <motion.div
        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3"
        aria-hidden="true"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      <motion.span
        className="text-white !text-base"
        whileHover={{ color: 'rgba(255, 255, 255, 1)' }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default FeatureItem;
