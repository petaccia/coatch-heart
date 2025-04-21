// Configuration de base de l'API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Types pour l'authentification
export interface SignupData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role?: 'ADMIN' | 'COACH' | 'USER';
  phoneNumber?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  role: string;
  profilePicture: string | null;
  phoneNumber: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Fonction utilitaire pour les requêtes API
async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Récupérer le token d'authentification s'il existe
  const token = localStorage.getItem('token');
  
  // Configuration par défaut des headers
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  
  // Fusionner les options
  const config = {
    ...options,
    headers,
  };
  
  try {
    const response = await fetch(url, config);
    
    // Vérifier si la réponse est OK
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Une erreur est survenue');
    }
    
    // Retourner les données
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Service d'authentification
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
    localStorage.setItem('token', response.data.token);
    
    return response.data;
  },
  
  // Connexion d'un utilisateur existant
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await fetchApi<{ status: string; data: AuthResponse }>(
      '/auth/login',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    
    // Stocker le token dans le localStorage
    localStorage.setItem('token', response.data.token);
    
    return response.data;
  },
  
  // Déconnexion
  logout(): void {
    localStorage.removeItem('token');
  },
  
  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  },
  
  // Récupérer le token
  getToken(): string | null {
    return localStorage.getItem('token');
  },
};

// Exporter le service d'API
export default {
  auth: authService,
};
