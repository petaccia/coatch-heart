"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { EmailInput, PasswordInput, SubmitButton, CheckboxInput, SocialButtonsGroup, validateLoginForm } from './form-components';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Effacer l'erreur lorsque l'utilisateur commence à taper
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Effacer l'erreur générale
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: '' }));
    }
  };

  const validateForm = () => {
    const { isValid, errors: newErrors } = validateLoginForm(formData);
    setErrors({ ...newErrors, general: '' });
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simuler un appel API
    try {
      // Ici, vous feriez un appel à votre API pour vous connecter
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Redirection vers la page d'accueil
      console.log('Connexion réussie', formData);
      // window.location.href = '/dashboard';

    } catch (error) {
      console.error('Erreur lors de la connexion', error);
      setErrors(prev => ({
        ...prev,
        general: 'Email ou mot de passe incorrect'
      }));
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
      {/* Message d'erreur général */}
      {errors.general && (
        <motion.div
          className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {errors.general}
        </motion.div>
      )}

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
      <div>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <Link href="/forgot-password" className="text-sm text-primary hover:text-secondary">
            Mot de passe oublié ?
          </Link>
        </div>
        <PasswordInput
          id="password"
          name="password"
          label=""
          value={formData.password}
          placeholder="Entrez votre mot de passe"
          error={errors.password}
          onChange={handleChange}
          required
        />
      </div>

      {/* Se souvenir de moi */}
      <CheckboxInput
        id="remember"
        label="Se souvenir de moi"
        checked={rememberMe}
        onChange={() => setRememberMe(!rememberMe)}
      />

      {/* Bouton de soumission */}
      <div className="pt-2">
        <SubmitButton
          isLoading={isLoading}
          loadingText="Connexion en cours..."
          text="Se connecter"
        />
      </div>

      {/* Boutons sociaux */}
      <SocialButtonsGroup />
    </motion.form>
  );
};

export default LoginForm;
