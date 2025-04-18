"use client";
import { motion } from 'framer-motion';

const CTAButtons = () => {
  return (
    <div className="mobile-stack justify-center lg:justify-start">
      <motion.a
        href="/signup"
        role="button"
        aria-label="Commencer à utiliser Coach Heart"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full bg-gradient-to-r from-green-600 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl button-transition flex items-center justify-center focus-ring"
      >
        Commencer maintenant
      </motion.a>
      <motion.a
        href="/demo"
        role="button"
        aria-label="Voir une démonstration de Coach Heart"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full border-2 border-green-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-green-600 hover:bg-green-50 button-transition flex items-center justify-center focus-ring"
      >
        Voir la démo
      </motion.a>
    </div>
  );
};

export default CTAButtons;
