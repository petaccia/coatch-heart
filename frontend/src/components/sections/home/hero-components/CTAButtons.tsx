"use client";
import { motion } from 'framer-motion';

const CTAButtons = () => {
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center lg:justify-start">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full bg-gradient-to-r from-green-600 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Commencer maintenant
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full border-2 border-green-600 px-8 py-4 text-lg font-semibold text-green-600 hover:bg-green-50 transition-all duration-300"
      >
        Voir la démo
      </motion.button>
    </div>
  );
};

export default CTAButtons;
