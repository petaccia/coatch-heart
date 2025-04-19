"use client";
import { motion } from 'framer-motion';

const CTAButtons = () => {
  return (
    <div className=" justify-center lg-w-div lg:justify-start">
      <motion.a
        href="/signup"
        role="button"
        aria-label="Commencer à utiliser Coach Heart"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-2 lg-w-button rounded-full bg-gradient-to-r from-primary to-secondary  py-3 sm:py-4  sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl button-transition flex items-center justify-center focus-ring"
      >
        Commencer maintenant
      </motion.a>
      <motion.a
        href="/demo"
        role="button"
        aria-label="Voir une démonstration de Coach Heart"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-2 lg-w-button rounded-full border-2 border-primary  py-3 sm:py-4  font-semibold text-primary hover:bg-primary/10 button-transition flex items-center justify-center focus-ring"
      >
        Voir la démo
      </motion.a>
    </div>
  );
};

export default CTAButtons;
