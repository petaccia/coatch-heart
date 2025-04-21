"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { authService, User, SignupData, LoginData } from '@/services/api';

// Interface pour le contexte d'authentification
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signup: (data: SignupData) => Promise<void>;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  setUser: (user: User) => void;
}

// Création du contexte
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Props pour le provider
interface AuthProviderProps {
  children: ReactNode;
}

// Provider du contexte
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Effet pour vérifier l'authentification au chargement
  useEffect(() => {
    // Fonction pour vérifier l'authentification
    const checkAuth = async () => {
      try {
        // Vérifier si un token existe
        const token = localStorage.getItem('token');

        if (token) {
          // TODO: Ajouter une route pour vérifier le token et récupérer l'utilisateur
          // Pour l'instant, on simule un utilisateur connecté
          // Dans une implémentation réelle, vous devriez appeler une API pour vérifier le token

          // Simuler un délai de chargement
          setTimeout(() => {
            setLoading(false);
          }, 500);
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.error('Auth check error:', err);
        setError('Erreur lors de la vérification de l\'authentification');
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Fonction d'inscription
  const signup = async (data: SignupData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.signup(data);
      setUser(response.user);
      router.push('/dashboard'); // Rediriger vers le tableau de bord après l'inscription
    } catch (err: any) {
      setError(err.message || 'Erreur lors de l\'inscription');
    } finally {
      setLoading(false);
    }
  };

  // Fonction de connexion
  const login = async (data: LoginData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.login(data);
      setUser(response.user);
      router.push('/dashboard'); // Rediriger vers le tableau de bord après la connexion
    } catch (err: any) {
      setError(err.message || 'Erreur lors de la connexion');
    } finally {
      setLoading(false);
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    authService.logout();
    setUser(null);
    router.push('/'); // Rediriger vers la page d'accueil après la déconnexion
  };

  // Fonction pour effacer les erreurs
  const clearError = () => {
    setError(null);
  };

  // Fonction pour définir l'utilisateur (utilisée pour l'authentification OAuth)
  const updateUser = (userData: User) => {
    console.log('Mise à jour de l\'utilisateur:', userData);
    setLoading(false);
    setError(null);
    // Utiliser directement la fonction setState de React
    setUser(userData);
  };

  // Valeur du contexte
  const value = {
    user,
    loading,
    error,
    signup,
    login,
    logout,
    clearError,
    setUser: updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
