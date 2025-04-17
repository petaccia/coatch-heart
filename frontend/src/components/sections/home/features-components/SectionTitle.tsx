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
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-xl text-gray-600">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
