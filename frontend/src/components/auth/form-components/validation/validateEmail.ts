export const validateEmail = (email: string): { isValid: boolean; error: string } => {
  if (!email) {
    return { isValid: false, error: 'L\'email est requis' };
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { isValid: false, error: 'Veuillez entrer une adresse email valide' };
  }
  
  return { isValid: true, error: '' };
};
