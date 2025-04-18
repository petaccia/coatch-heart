"use client";
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

interface SubmitButtonProps {
  isLoading: boolean;
}

const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
  return (
    <motion.button
      type="submit"
      disabled={isLoading}
      className="flex-1 px-6 py-3 bg-accent text-primary font-medium rounded-lg flex items-center justify-center hover:bg-accent-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
      aria-label="S'inscrire à la newsletter"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="sr-only">Chargement en cours...</span>
        </>
      ) : (
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          S'inscrire <motion.span
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FaPaperPlane aria-hidden="true" />
          </motion.span>
        </motion.div>
      )}
    </motion.button>
  );
};

export default SubmitButton;
