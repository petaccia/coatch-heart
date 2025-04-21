// Configuration de base de l'API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Pour le débogage
console.log('API_BASE_URL:', API_BASE_URL);

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
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

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

  console.log(`Requête API vers ${url}:`, {
    method: options.method || 'GET',
    headers,
    body: options.body ? JSON.parse(options.body as string) : undefined
  });

  try {
    const response = await fetch(url, config);

    // Vérifier si la réponse est OK
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erreur API:', errorData);
      throw new Error(errorData.message || 'Une erreur est survenue');
    }

    // Retourner les données
    const data = await response.json();
    console.log(`Réponse API de ${url}:`, data);
    return data;
  } catch (error) {
    console.error(`Erreur lors de l'appel à ${url}:`, error);
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
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', response.data.token);
      console.log('Token stocké dans localStorage');
    }

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

// Exporter le service d'API
export default {
  auth: authService,
};
