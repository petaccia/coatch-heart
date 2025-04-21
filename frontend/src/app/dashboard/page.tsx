"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import {
  FiHome, FiUsers, FiCalendar, FiActivity,
  FiSettings, FiLogOut, FiUser, FiPlus,
  FiTrendingUp, FiClock, FiAward, FiHeart,
  FiMenu, FiX
} from 'react-icons/fi';

const DashboardPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Barre latérale pour desktop */}
      <div className="hidden md:flex md:flex-shrink-0 pt-8">
        <div className="flex flex-col w-64 bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
          {/* Logo et titre */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-white/10">
            <FiHeart className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Coach-Heart</span>
          </div>

          {/* Menu de navigation */}
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <nav className="flex-1 px-2 space-y-1">
              <a href="#" className="flex items-center px-4 py-3 text-white bg-white/10 rounded-md group">
                <FiHome className="mr-3 h-5 w-5" />
                <span>Tableau de bord</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiUsers className="mr-3 h-5 w-5" />
                <span>Équipes</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiCalendar className="mr-3 h-5 w-5" />
                <span>Séances</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiActivity className="mr-3 h-5 w-5" />
                <span>Exercices</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiUser className="mr-3 h-5 w-5" />
                <span>Profil</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiSettings className="mr-3 h-5 w-5" />
                <span>Paramètres</span>
              </a>
            </nav>

            {/* Bouton de déconnexion */}
            <div className="px-2 mt-6">
              <button className="flex w-full items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiLogOut className="mr-3 h-5 w-5" />
                <span>Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile (visible uniquement sur mobile) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-64 bg-gradient-to-br from-primary to-secondary text-white shadow-xl">
            <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
              <div className="flex items-center">
                <FiHeart className="h-6 w-6 mr-2" />
                <span className="text-lg font-bold">Coach-Heart</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-white/80"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 px-2 pt-5 pb-4 space-y-1 overflow-y-auto">
              <a href="#" className="flex items-center px-4 py-3 text-white bg-white/10 rounded-md group">
                <FiHome className="mr-3 h-5 w-5" />
                <span>Tableau de bord</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiUsers className="mr-3 h-5 w-5" />
                <span>Équipes</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiCalendar className="mr-3 h-5 w-5" />
                <span>Séances</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiActivity className="mr-3 h-5 w-5" />
                <span>Exercices</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiUser className="mr-3 h-5 w-5" />
                <span>Profil</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                <FiSettings className="mr-3 h-5 w-5" />
                <span>Paramètres</span>
              </a>
              <div className="px-2 mt-6">
                <button className="flex w-full items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-md group transition-colors">
                  <FiLogOut className="mr-3 h-5 w-5" />
                  <span>Déconnexion</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Barre supérieure */}
        <header className="bg-white shadow-sm z-10 sticky top-0 mt-4">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              {/* Bouton menu mobile */}
              <button
                className="md:hidden mr-4 text-gray-500 hover:text-gray-700"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <FiMenu className="h-6 w-6" />
              </button>
              <h1 className="text-xl md:text-2xl md:mt-8 font-semibold text-gray-900">Tableau de bord</h1>
            </div>

            {/* Profil utilisateur */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">{user?.firstName || user?.email || 'Utilisateur'}</span>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-md">
                {user?.firstName ? user.firstName[0].toUpperCase() : 'U'}
              </div>
            </div>
          </div>
        </header>

        {/* Contenu du tableau de bord */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-gray-50 to-blue-50 mt-4">
          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 flex items-center border-l-4 border-blue-500 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <FiUsers className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Membres</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 flex items-center border-l-4 border-green-500 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <FiCalendar className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Séances</p>
                <p className="text-2xl font-semibold text-gray-900">8</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 flex items-center border-l-4 border-purple-500 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <FiClock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Heures</p>
                <p className="text-2xl font-semibold text-gray-900">24</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 flex items-center border-l-4 border-amber-500 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-amber-100 text-amber-600 mr-4">
                <FiAward className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Objectifs</p>
                <p className="text-2xl font-semibold text-gray-900">3/5</p>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Activité récente */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-indigo-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center"><span className="bg-indigo-100 text-indigo-600 p-1 rounded-md mr-2"><FiActivity className="h-5 w-5" /></span>Activité récente</h2>
                <button className="text-sm text-primary hover:text-primary-dark transition-colors">
                  Voir tout
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-4 shadow-sm">
                    <FiCalendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Séance d'entraînement créée</p>
                    <p className="text-sm text-gray-500">Vous avez créé une nouvelle séance pour l'équipe Junior.</p>
                    <p className="text-xs text-gray-400 mt-1">Il y a 2 heures</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4 shadow-sm">
                    <FiUsers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Nouveau membre</p>
                    <p className="text-sm text-gray-500">Thomas Dubois a rejoint l'équipe Senior.</p>
                    <p className="text-xs text-gray-400 mt-1">Il y a 1 jour</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600 mr-4 shadow-sm">
                    <FiActivity className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Exercice terminé</p>
                    <p className="text-sm text-gray-500">L'équipe Junior a terminé l'exercice de passes.</p>
                    <p className="text-xs text-gray-400 mt-1">Il y a 2 jours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-indigo-100 hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center"><span className="bg-indigo-100 text-indigo-600 p-1 rounded-md mr-2"><FiPlus className="h-5 w-5" /></span>Actions rapides</h2>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg hover:shadow-md transition-all">
                  <div className="flex items-center">
                    <FiCalendar className="h-5 w-5 mr-3" />
                    <span>Nouvelle séance</span>
                  </div>
                  <FiPlus className="h-5 w-5" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-blue-300 hover:text-blue-600 hover:shadow-sm transition-all">
                  <div className="flex items-center">
                    <FiUsers className="h-5 w-5 mr-3" />
                    <span>Ajouter un membre</span>
                  </div>
                  <FiPlus className="h-5 w-5" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-green-300 hover:text-green-600 hover:shadow-sm transition-all">
                  <div className="flex items-center">
                    <FiActivity className="h-5 w-5 mr-3" />
                    <span>Nouvel exercice</span>
                  </div>
                  <FiPlus className="h-5 w-5" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-purple-300 hover:text-purple-600 hover:shadow-sm transition-all">
                  <div className="flex items-center">
                    <FiTrendingUp className="h-5 w-5 mr-3" />
                    <span>Suivi de progression</span>
                  </div>
                  <FiPlus className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
