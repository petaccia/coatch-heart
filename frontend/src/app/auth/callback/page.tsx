"use client";
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const AuthCallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useAuth();

  useEffect(() => {
    // Utiliser une variable pour éviter les appels multiples
    let isProcessing = false;

    const processToken = () => {
      if (isProcessing) return;
      isProcessing = true;

      const token = searchParams.get('token');

      if (!token) {
        // Rediriger vers la page de connexion en cas d'erreur
        router.push('/login?error=no_token');
        return;
      }

      // Stocker le token dans le localStorage
      localStorage.setItem('token', token);
      console.log('Token stocké dans localStorage');

      try {
        // Créer un objet utilisateur hardcodé pour le développement
        // Dans un environnement de production, vous devriez décoder le token JWT
        const userData = {
          id: 2,
          email: 'petaccia.seb@gmail.com',
          firstName: 'Sebastien',
          lastName: 'Petaccia',
          role: 'USER',
          profilePicture: null,
          phoneNumber: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        console.log('Informations utilisateur:', userData);

        // Mettre à jour le contexte d'authentification
        setUser(userData);

        // Rediriger vers le tableau de bord après un court délai
        setTimeout(() => {
          router.push('/dashboard');
        }, 100);
      } catch (error) {
        console.error('Erreur lors du traitement du token:', error);
        router.push('/login?error=invalid_token');
      }
    };

    processToken();

    // Nettoyage
    return () => {
      isProcessing = false;
    };
  }, [router, searchParams]);  // Retirer setUser des dépendances

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-gray-800 mb-2">Authentification en cours...</h1>
        <p className="text-gray-600">Veuillez patienter pendant que nous finalisons votre connexion.</p>
      </div>
    </div>
  );
};

export default AuthCallbackPage;
