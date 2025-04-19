"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TextInput, EmailInput, PasswordInput, SubmitButton, SocialButtonsGroup, validateSignupForm } from './form-components';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

    // Simuler un appel API
    try {
      // Ici, vous feriez un appel à votre API pour créer un compte
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Redirection vers la page d'accueil ou de connexion
      console.log('Inscription réussie', formData);
      // window.location.href = '/login';

    } catch (error) {
      console.error('Erreur lors de l\'inscription', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Nom */}
      <TextInput
        id="name"
        name="name"
        label="Nom complet"
        value={formData.name}
        placeholder="Entrez votre nom"
        error={errors.name}
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

      {/* Bouton de soumission */}
      <div className="pt-2">
        <SubmitButton
          isLoading={isLoading}
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
  );
};

export default SignupForm;
