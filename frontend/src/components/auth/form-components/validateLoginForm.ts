export interface LoginFormData {
  email: string;
  password: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: {
    email?: string;
    password?: string;
    general?: string;
  };
}

export const validateLoginForm = (data: LoginFormData): ValidationResult => {
  const errors: ValidationResult['errors'] = {};
  
  // Validation de l'email
  if (!data.email) {
    errors.email = 'L\'email est requis';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Format d\'email invalide';
  }
  
  // Validation du mot de passe
  if (!data.password) {
    errors.password = 'Le mot de passe est requis';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export default validateLoginForm;
