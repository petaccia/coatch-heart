"use client";
import { useState } from 'react';
import { SubscriptionForm, SuccessMessage } from './form-components';

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
    <div className="p-8 md:p-12 lg:p-16 bg-white/10 backdrop-blur-sm flex items-center">
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
    </div>
  );
};

export default NewsletterForm;
