"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SubscriptionForm, SuccessMessage } from './form-components';

interface NewsletterFormProps {
  isMobile?: boolean;
}

const NewsletterForm = ({ isMobile = false }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation simple de l'email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    // Simuler un envoi à l'API
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <motion.div
      className={`p-6 sm:p-8 md:p-10 lg:p-16 h-full bg-white/10 backdrop-blur-sm flex items-center ${isMobile ? 'pb-10' : ''}`}
      initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: isMobile ? 0 : 0.2 }}
    >
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? -50 : 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <SubscriptionForm
              email={email}
              setEmail={setEmail}
              error={error}
              isLoading={isLoading}
              handleSubmit={handleSubmit}
              isMobile={isMobile}
            />
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="w-full"
          >
            <SuccessMessage isMobile={isMobile} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NewsletterForm;
