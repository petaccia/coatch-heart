"use client";
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const LearnMoreButton = () => {
  return (
    <motion.a
      href="/newsletter-info"
      role="button"
      className="flex-1 mb-4 px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 button-transition flex items-center justify-center focus-ring-light  whitespace-nowrap"
      aria-label="En savoir plus sur notre newsletter"
      whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 1 }}
      >
        En savoir plus
        <motion.span
          className="ml-2 opacity-0"
          initial={{ opacity: 0, x: -5 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaArrowRight aria-hidden="true" />
        </motion.span>
      </motion.div>
    </motion.a>
  );
};

export default LearnMoreButton;
