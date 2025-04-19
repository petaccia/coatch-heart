"use client";
import { motion } from 'framer-motion';
import { EmailInput, SubmitButton, LearnMoreButton } from './';

interface SubscriptionFormProps {
  email: string;
  setEmail: (email: string) => void;
  error: string;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  isMobile?: boolean;
}

const SubscriptionForm = ({ email, setEmail, error, isLoading, handleSubmit, isMobile = false }: SubscriptionFormProps) => {
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.15 : 0.2,
        delayChildren: isMobile ? 0.05 : 0.1
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

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`mobile-full-width ${isMobile ? 'mobile-text-center' : ''}`}
      aria-labelledby="newsletter-form-title"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 id="newsletter-form-title" className="sr-only">Formulaire d'inscription à la newsletter</h2>

      <motion.div variants={itemVariants}>
        <EmailInput
          email={email}
          setEmail={setEmail}
          error={error}
        />
      </motion.div>

      <motion.div
        className={`${isMobile ? 'mobile-stack' : 'flex flex-col md:flex-row gap-3 md:gap-4 md:items-center md:justify-start'}`}
        variants={itemVariants}
      >
        <SubmitButton isLoading={isLoading} />
        <LearnMoreButton />
      </motion.div>

      <motion.p
        className={`mt-3 sm:mt-4 !text-white/70 mobile-text ${isMobile ? 'mobile-max-width' : ''}`}
        variants={itemVariants}
      >
        Nous respectons votre vie privée. Vous pouvez vous désinscrire à tout moment.
      </motion.p>
    </motion.form>
  );
};

export default SubscriptionForm;
