"use client";
import { motion } from 'framer-motion';
import { EmailInput, SubmitButton, LearnMoreButton } from './';

interface SubscriptionFormProps {
  email: string;
  setEmail: (email: string) => void;
  error: string;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const SubscriptionForm = ({ email, setEmail, error, isLoading, handleSubmit }: SubscriptionFormProps) => {
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full"
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
        className="flex flex-col sm:flex-row gap-4"
        variants={itemVariants}
      >
        <SubmitButton isLoading={isLoading} />
        <LearnMoreButton />
      </motion.div>

      <motion.p
        className="mt-4 !text-white/70 !text-sm"
        variants={itemVariants}
      >
        Nous respectons votre vie privée. Vous pouvez vous désinscrire à tout moment.
      </motion.p>
    </motion.form>
  );
};

export default SubscriptionForm;
