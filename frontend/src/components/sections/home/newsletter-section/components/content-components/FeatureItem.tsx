"use client";
import { motion } from 'framer-motion';

interface FeatureItemProps {
  text: string;
  isMobile?: boolean;
}

const FeatureItem = ({ text, isMobile = false }: FeatureItemProps) => {
  const itemVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? -10 : 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className={`flex items-center ${isMobile ? 'w-full max-w-xs justify-start' : ''}`}
      variants={itemVariants}
    >
      <motion.div
        className={`${isMobile ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10'} rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3`}
        aria-hidden="true"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <svg className={`${isMobile ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-5 h-5'} text-accent-dark`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      <motion.span
        className={`text-white ${isMobile ? '!text-sm sm:!text-base' : '!text-base'}`}
        whileHover={{ color: 'rgba(255, 255, 255, 1)' }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default FeatureItem;
