"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const NewsletterForm = () => {
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
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="p-8 md:p-12 lg:p-16 bg-white/10 backdrop-blur-sm flex items-center"
    >
      {!isSubmitted ? (
        <SubscriptionForm 
          email={email}
          setEmail={setEmail}
          error={error}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />
      ) : (
        <SuccessMessage />
      )}
    </motion.div>
  );
};

interface SubscriptionFormProps {
  email: string;
  setEmail: (email: string) => void;
  error: string;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const SubscriptionForm = ({ email, setEmail, error, isLoading, handleSubmit }: SubscriptionFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-medium mb-2">
          Adresse email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />
        {error && <p className="mt-2 text-accent text-sm">{error}</p>}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <SubmitButton isLoading={isLoading} />
        <LearnMoreButton />
      </div>
      <p className="mt-4 !text-white/70 !text-sm">
        Nous respectons votre vie privée. Vous pouvez vous désinscrire à tout moment.
      </p>
    </form>
  );
};

const SubmitButton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      disabled={isLoading}
      className="flex-1 px-6 py-3 bg-accent text-primary font-medium rounded-lg flex items-center justify-center hover:bg-accent-dark transition-all duration-300"
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <>
          S'inscrire <FaPaperPlane className="ml-2" />
        </>
      )}
    </motion.button>
  );
};

const LearnMoreButton = () => {
  return (
    <button
      type="button"
      className="flex-1 px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
    >
      En savoir plus
    </button>
  );
};

const SuccessMessage = () => {
  return (
    <div className="text-center w-full">
      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Merci pour votre inscription !</h3>
      <p className="!text-white/90">
        Vous recevrez bientôt nos prochaines newsletters avec des conseils et astuces exclusifs.
      </p>
    </div>
  );
};

export default NewsletterForm;
