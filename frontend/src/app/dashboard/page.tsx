"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import {
  Sidebar,
  MobileSidebar,
  Header,
  Stats,
  RecentActivity,
  QuickActions
} from '@/components/dashboard';

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
      <Sidebar />
      
      {/* Menu mobile */}
      <MobileSidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      {/* Contenu principal */}
      <div className="flex flex-col flex-1 overflow-hidden pt-0">
        {/* Barre supérieure */}
        <Header 
          user={user} 
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)} 
        />
        
        {/* Contenu du tableau de bord */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-gray-50 to-blue-50 mt-4">
          {/* Statistiques */}
          <Stats />
          
          {/* Contenu principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Activité récente */}
            <RecentActivity />
            
            {/* Actions rapides */}
            <QuickActions />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
