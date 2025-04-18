"use client";
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-10 sm:mb-16 mobile-text-center"
    >
      <h2 className="mobile-title font-bold text-gray-900">
        {title}
      </h2>
      <p className="mt-3 sm:mt-4 mobile-subtitle text-gray-600">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
