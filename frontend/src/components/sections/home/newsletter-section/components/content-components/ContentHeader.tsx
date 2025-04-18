"use client";
import { motion } from 'framer-motion';

interface ContentHeaderProps {
  title: string;
  description: string;
}

const ContentHeader = ({ title, description }: ContentHeaderProps) => {
  return (
    <>
      <motion.h2
        className="text-3xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="!text-white/90 !text-lg mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </>
  );
};

export default ContentHeader;
