// Point d'entrée pour tous les services API
import authService from './authService';

// Exporter les services individuels
export { authService };

// Exporter un objet par défaut avec tous les services
export default {
  auth: authService,
  // Ajouter d'autres services ici au besoin
};
