interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email: string;
  password: string;
  general: string;
}

export const validateLoginForm = (formData: LoginFormData): { isValid: boolean; errors: LoginFormErrors } => {
  let isValid = true;
  const errors: LoginFormErrors = {
    email: '',
    password: '',
    general: '',
  };
  
  // Validation de l'email
  if (!formData.email) {
    errors.email = 'L\'email est requis';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Veuillez entrer une adresse email valide';
    isValid = false;
  }
  
  // Validation du mot de passe
  if (!formData.password) {
    errors.password = 'Le mot de passe est requis';
    isValid = false;
  }
  
  return { isValid, errors };
};
