"use client";
import { motion } from 'framer-motion';

const SuccessMessage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
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
        className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
        aria-hidden="true"
        variants={iconVariants}
      >
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
        className="text-2xl font-bold text-white mb-2"
        variants={itemVariants}
      >
        Merci pour votre inscription !
      </motion.h3>
      <motion.p
        className="!text-white/90"
        variants={itemVariants}
      >
        Vous recevrez bientôt nos prochaines newsletters avec des conseils et astuces exclusifs.
      </motion.p>
    </motion.div>
  );
};

export default SuccessMessage;
