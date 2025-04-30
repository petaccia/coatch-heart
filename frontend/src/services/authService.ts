// Service d'authentification
import { SignupData, LoginData, AuthResponse } from '../types/auth';
import { fetchApi } from '@/services/apiUtils';

export const authService = {
  // Inscription d'un nouvel utilisateur
  async signup(data: SignupData): Promise<AuthResponse> {
    const response = await fetchApi<{ status: string; data: AuthResponse }>(
      '/auth/signup',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );

    // Stocker le token dans le localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', response.data.token);
      console.log('Token stocké dans localStorage');
    }

    return response.data;
  },

  // Connexion d'un utilisateur existant
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await fetchApi<{
      status: string;
      data: AuthResponse;
    }>(
      '/auth/login',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );

    // Stocker le token dans le localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', response.data.token);
      console.log('Token stocké dans localStorage');
    }

    return response.data;
  },

  // Déconnexion
  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      console.log('Token supprimé du localStorage');
    }
  },

  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return typeof window !== 'undefined' ? !!localStorage.getItem('token') : false;
  },

  // Récupérer le token
  getToken(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  },
};

export default authService;