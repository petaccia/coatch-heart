"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const DashboardPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    if (!loading && !user && isClient) {
      router.push('/login');
    }
  }, [user, loading, router, isClient]);

  // Afficher un écran de chargement pendant la vérification de l'authentification
  if (loading || !isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">Chargement...</h1>
          <p className="text-gray-600">Veuillez patienter pendant que nous préparons votre tableau de bord.</p>
        </div>
      </div>
    );
  }

  // Si l'utilisateur est connecté, afficher le tableau de bord
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Bienvenue, {user?.firstName || user?.email || 'Utilisateur'} !</h2>
            <p className="text-gray-600 mb-6">
              Votre tableau de bord est en cours de développement. Revenez bientôt pour découvrir toutes les fonctionnalités !
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Carte d'information */}
              <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Votre profil</h3>
                <p className="mb-4">Complétez votre profil pour personnaliser votre expérience.</p>
                <button className="bg-white text-primary font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                  Modifier le profil
                </button>
              </div>
              
              {/* Carte d'information */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Séances d'entraînement</h3>
                <p className="text-gray-600 mb-4">Vous n'avez pas encore de séances d'entraînement programmées.</p>
                <button className="bg-primary text-white font-medium py-2 px-4 rounded hover:bg-primary-dark transition-colors">
                  Créer une séance
                </button>
              </div>
              
              {/* Carte d'information */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Équipes</h3>
                <p className="text-gray-600 mb-4">Vous n'avez pas encore d'équipes créées.</p>
                <button className="bg-primary text-white font-medium py-2 px-4 rounded hover:bg-primary-dark transition-colors">
                  Créer une équipe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
