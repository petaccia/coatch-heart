"use client";
import { motion } from 'framer-motion';

interface SubmitButtonProps {
  text: string;
  loadingText?: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const SubmitButton = ({
  text,
  loadingText = 'Chargement...',
  isLoading = false,
  onClick,
}: SubmitButtonProps) => {
  return (
    <motion.button
      type="submit"
      className={`w-full py-2.5 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
        isLoading
          ? 'bg-primary/70 cursor-not-allowed'
          : 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 active:scale-[0.98] button-transition focus-ring'
      }`}
      disabled={isLoading}
      onClick={onClick}
      whileTap={{ scale: isLoading ? 1 : 0.98 }}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {loadingText}
        </div>
      ) : (
        text
      )}
    </motion.button>
  );
};

export default SubmitButton;
