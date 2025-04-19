"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AuthLayout from '@/components/auth/AuthLayout';
import { EmailInput, SubmitButton, validateEmail } from '@/components/auth/form-components';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation de l'email
    const { isValid, error: emailError } = validateEmail(email);
    if (!isValid) {
      setError(emailError);
      return;
    }

    setError('');
    setIsLoading(true);

    // Simuler un appel API
    try {
      // Ici, vous feriez un appel à votre API pour réinitialiser le mot de passe
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitted(true);
    } catch (error) {
      console.error('Erreur lors de la demande de réinitialisation', error);
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Mot de passe oublié"
      subtitle="Entrez votre adresse email pour réinitialiser votre mot de passe"
    >
      {!isSubmitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <EmailInput
            id="email"
            name="email"
            label="Adresse email"
            value={email}
            placeholder="votre@email.com"
            error={error}
            onChange={handleChange}
            required
          />

          <div className="pt-2">
            <SubmitButton
              isLoading={isLoading}
              loadingText="Envoi en cours..."
              text="Réinitialiser le mot de passe"
            />
          </div>
        </motion.form>
      ) : (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Email envoyé</h3>
          <p className="mt-2 text-sm text-gray-600">
            Si un compte existe avec l'adresse {email}, vous recevrez un email avec les instructions pour réinitialiser votre mot de passe.
          </p>
          <div className="mt-6">
            <Link href="/login" className="text-primary hover:text-secondary font-medium">
              Retour à la page de connexion
            </Link>
          </div>
        </motion.div>
      )}

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Vous vous souvenez de votre mot de passe ?{' '}
          <Link href="/login" className="text-primary hover:text-secondary font-medium transition-colors">
            Connectez-vous
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
