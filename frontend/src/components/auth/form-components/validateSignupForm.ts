export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
}

export const validateSignupForm = (data: SignupFormData): ValidationResult => {
  const errors: ValidationResult['errors'] = {};

  // Validation du prénom
  if (!data.firstName || data.firstName.trim() === '') {
    errors.firstName = 'Le prénom est requis';
  }

  // Validation du nom
  if (!data.lastName || data.lastName.trim() === '') {
    errors.lastName = 'Le nom est requis';
  }

  // Validation de l'email
  if (!data.email) {
    errors.email = 'L\'email est requis';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Format d\'email invalide';
  }

  // Validation du mot de passe
  if (!data.password) {
    errors.password = 'Le mot de passe est requis';
  } else if (data.password.length < 8) {
    errors.password = 'Le mot de passe doit contenir au moins 8 caractères';
  }

  // Validation de la confirmation du mot de passe
  if (!data.confirmPassword) {
    errors.confirmPassword = 'La confirmation du mot de passe est requise';
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Les mots de passe ne correspondent pas';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export default validateSignupForm;
