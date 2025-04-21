"use client";
import { FiMenu } from 'react-icons/fi';
import { User } from '@/types/user';

interface HeaderProps {
  user: User | null;
  onOpenMobileMenu: () => void;
}

const Header = ({ user, onOpenMobileMenu }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm z-10 sticky top-0 mt-4 mb-6">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* Bouton menu mobile */}
          <button 
            className="md:hidden mr-4 text-gray-500 hover:text-gray-700"
            onClick={onOpenMobileMenu}
          >
            <FiMenu className="h-6 w-6" />
          </button>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Tableau de bord</h1>
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
  );
};

export default Header;
