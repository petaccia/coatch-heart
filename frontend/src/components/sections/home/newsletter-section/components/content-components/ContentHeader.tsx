"use client";
import { motion } from 'framer-motion';

interface ContentHeaderProps {
  title: string;
  description: string;
  isMobile?: boolean;
}

const ContentHeader = ({ title, description, isMobile = false }: ContentHeaderProps) => {
  return (
    <>
      <motion.h2
        className={`${isMobile ? 'text-2xl sm:text-3xl' : 'text-3xl'} font-bold text-white mb-4 sm:mb-4 ${isMobile ? 'mx-auto max-w-xs sm:max-w-sm md:max-w-md' : ''}`}
        initial={{ opacity: 0, y: isMobile ? -10 : -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className={`!text-accent-dark ${isMobile ? '!text-base sm:!text-lg' : '!text-lg'} mb-6 sm:mb-6 ${isMobile ? 'mx-auto max-w-xs sm:max-w-sm md:max-w-md' : ''}`}
        initial={{ opacity: 0, y: isMobile ? -5 : -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </>
  );
};

export default ContentHeader;
