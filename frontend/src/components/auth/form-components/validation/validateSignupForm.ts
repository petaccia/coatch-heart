export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupFormErrors {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const validateSignupForm = (formData: SignupFormData): { isValid: boolean; errors: SignupFormErrors } => {
  let isValid = true;
  const errors: SignupFormErrors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // Validation du prénom
  if (!formData.firstName.trim()) {
    errors.firstName = 'Le prénom est requis';
    isValid = false;
  }

  // Validation du nom
  if (!formData.lastName.trim()) {
    errors.lastName = 'Le nom est requis';
    isValid = false;
  }

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
  } else if (formData.password.length < 8) {
    errors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    isValid = false;
  }

  // Validation de la confirmation du mot de passe
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Les mots de passe ne correspondent pas';
    isValid = false;
  }

  return { isValid, errors };
};
