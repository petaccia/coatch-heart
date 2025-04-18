"use client";
import { motion } from 'framer-motion';

interface SuccessMessageProps {
  isMobile?: boolean;
}

const SuccessMessage = ({ isMobile = false }: SuccessMessageProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.2 : 0.3,
        delayChildren: isMobile ? 0.1 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.4 : 0.5 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: isMobile ? 250 : 300,
        damping: isMobile ? 15 : 10,
        duration: isMobile ? 0.6 : 0.8
      }
    }
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: isMobile ? 0.3 : 0.5,
        duration: isMobile ? 0.6 : 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="text-center w-full"
      role="status"
      aria-live="polite"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={`${isMobile ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-16 h-16'} bg-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}
        aria-hidden="true"
        variants={iconVariants}
      >
        <svg className={`${isMobile ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-8 h-8'} text-primary`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
            variants={checkmarkVariants}
          />
        </svg>
      </motion.div>
      <motion.h3
        className={`${isMobile ? 'text-xl sm:text-2xl' : 'text-2xl'} font-bold text-white mb-2`}
        variants={itemVariants}
      >
        Merci pour votre inscription !
      </motion.h3>
      <motion.p
        className={`!text-white/90 ${isMobile ? '!text-sm sm:!text-base' : '!text-base'} ${isMobile ? 'mx-auto max-w-xs sm:max-w-sm' : ''}`}
        variants={itemVariants}
      >
        Vous recevrez bientôt nos prochaines newsletters avec des conseils et astuces exclusifs.
      </motion.p>
    </motion.div>
  );
};

export default SuccessMessage;
