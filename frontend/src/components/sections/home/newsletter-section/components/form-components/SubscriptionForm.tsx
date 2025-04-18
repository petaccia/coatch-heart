"use client";
import { EmailInput, SubmitButton, LearnMoreButton } from './';

interface SubscriptionFormProps {
  email: string;
  setEmail: (email: string) => void;
  error: string;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const SubscriptionForm = ({ email, setEmail, error, isLoading, handleSubmit }: SubscriptionFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="w-full" aria-labelledby="newsletter-form-title">
      <h2 id="newsletter-form-title" className="sr-only">Formulaire d'inscription à la newsletter</h2>
      
      <EmailInput 
        email={email} 
        setEmail={setEmail} 
        error={error} 
      />
      
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

export default SubscriptionForm;
