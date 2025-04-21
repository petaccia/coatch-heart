"use client";
import {
  FiHome, FiUsers, FiCalendar, FiActivity,
  FiSettings, FiLogOut, FiUser, FiHeart
} from 'react-icons/fi';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = '' }: SidebarProps) => {
  return (
    <div className={`hidden md:flex md:flex-shrink-0 pt-8 ${className}`}>
      <div className="flex flex-col w-64 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white shadow-lg">
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
  );
};

export default Sidebar;
