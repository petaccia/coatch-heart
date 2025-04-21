"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TextInput, EmailInput, PasswordInput, SubmitButton, SocialButtonsGroup, validateSignupForm } from './form-components';
import { useAuth } from '@/contexts/AuthContext';
import { WelcomeAnimation } from '@/components/animations';

const SignupForm = () => {
  const { signup, loading, error: authError, clearError } = useAuth();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  // Effacer les erreurs d'authentification lorsque le formulaire change
  useEffect(() => {
    if (authError) {
      clearError();
    }
  }, [formData, authError, clearError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Effacer l'erreur lorsque l'utilisateur commence à taper
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const { isValid, errors: newErrors } = validateSignupForm(formData);
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Appel à l'API via le contexte d'authentification
    try {
      await signup({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName
      });

      // Afficher l'animation de bienvenue
      setShowWelcomeAnimation(true);

      // La redirection est gérée dans le contexte d'authentification après l'animation
    } catch (error) {
      console.error('Erreur lors de l\'inscription', error);
    }
  };

  // Fonction pour gérer la fin de l'animation
  const handleAnimationComplete = () => {
    setShowWelcomeAnimation(false);
    setRegistrationComplete(true);
  };

  return (
    <>
      {showWelcomeAnimation && (
        <WelcomeAnimation
          userName={formData.firstName || 'nouvel utilisateur'}
          onComplete={handleAnimationComplete}
        />
      )}

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
      {/* Prénom */}
      <TextInput
        id="firstName"
        name="firstName"
        label="Prénom"
        value={formData.firstName}
        placeholder="Entrez votre prénom"
        error={errors.firstName}
        onChange={handleChange}
        required
      />

      {/* Nom */}
      <TextInput
        id="lastName"
        name="lastName"
        label="Nom"
        value={formData.lastName}
        placeholder="Entrez votre nom"
        error={errors.lastName}
        onChange={handleChange}
        required
      />

      {/* Email */}
      <EmailInput
        id="email"
        name="email"
        label="Adresse email"
        value={formData.email}
        placeholder="votre@email.com"
        error={errors.email}
        onChange={handleChange}
        required
      />

      {/* Mot de passe */}
      <PasswordInput
        id="password"
        name="password"
        label="Mot de passe"
        value={formData.password}
        placeholder="Créez un mot de passe"
        error={errors.password}
        onChange={handleChange}
        required
      />

      {/* Confirmation du mot de passe */}
      <PasswordInput
        id="confirmPassword"
        name="confirmPassword"
        label="Confirmez le mot de passe"
        value={formData.confirmPassword}
        placeholder="Confirmez votre mot de passe"
        error={errors.confirmPassword}
        onChange={handleChange}
        required
      />

      {/* Message d'erreur d'authentification */}
      {authError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 p-3 rounded-lg border border-red-200 text-red-600 text-sm"
        >
          {authError}
        </motion.div>
      )}

      {/* Bouton de soumission */}
      <div className="pt-2">
        <SubmitButton
          isLoading={loading}
          loadingText="Création en cours..."
          text="Créer mon compte"
        />
      </div>

      {/* Conditions d'utilisation */}
      <p className="text-xs text-gray-500 text-center mt-4">
        En créant un compte, vous acceptez nos{' '}
        <a href="/conditions" className="text-primary hover:text-secondary">
          Conditions d'utilisation
        </a>{' '}
        et notre{' '}
        <a href="/confidentialite" className="text-primary hover:text-secondary">
          Politique de confidentialité
        </a>
      </p>

      {/* Boutons sociaux */}
      <SocialButtonsGroup />
    </motion.form>
    </>
  );
};

export default SignupForm;
