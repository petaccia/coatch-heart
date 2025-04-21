"use client";
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const AuthCallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useAuth();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      // Stocker le token dans le localStorage
      localStorage.setItem('token', token);

      // Décoder le token pour obtenir les informations de l'utilisateur
      try {
        console.log('Token reçu:', token);

        // Méthode simplifiée pour décoder le token JWT
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload;

        // Utiliser window.atob pour le décodage base64
        if (typeof window !== 'undefined') {
          jsonPayload = window.atob(base64);
          // Convertir les caractères en JSON
          jsonPayload = decodeURIComponent(escape(jsonPayload));
        } else {
          // Fallback pour les environnements sans window
          const buffer = Buffer.from(base64, 'base64');
          jsonPayload = buffer.toString('utf-8');
        }

        console.log('Payload décodé:', jsonPayload);

        const decodedToken = JSON.parse(jsonPayload);
        console.log('Token décodé:', decodedToken);

        // Mettre à jour le contexte d'authentification
        setUser({
          id: decodedToken.id,
          email: decodedToken.email,
          firstName: decodedToken.firstName || '',
          lastName: decodedToken.lastName || '',
          role: decodedToken.role || 'USER',
        });

        // Rediriger vers le tableau de bord
        router.push('/dashboard');
      } catch (error) {
        console.error('Erreur lors du décodage du token:', error);
        router.push('/login?error=invalid_token');
      }
    } else {
      // Rediriger vers la page de connexion en cas d'erreur
      router.push('/login?error=no_token');
    }
  }, [router, searchParams, setUser]);

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
