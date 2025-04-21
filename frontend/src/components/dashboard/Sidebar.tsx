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
      <div className="flex flex-col w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
        {/* Logo et titre */}
        <div className="flex items-center justify-center h-16 px-4 border-b border-indigo-500/30">
          <div className="p-2 rounded-full bg-indigo-600/30 mr-2">
            <FiHeart className="h-6 w-6 text-indigo-300" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-300 to-blue-300 text-transparent bg-clip-text">Coach-Heart</span>
        </div>

        {/* Menu de navigation */}
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <nav className="flex-1 px-2 space-y-1">
            <a href="#" className="flex items-center px-4 py-3 text-white bg-indigo-600/80 rounded-md group">
              <FiHome className="mr-3 h-5 w-5 text-indigo-300" />
              <span>Tableau de bord</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-blue-600/30 rounded-md group transition-colors">
              <FiUsers className="mr-3 h-5 w-5 text-blue-400 group-hover:text-blue-300" />
              <span>Équipes</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-green-600/30 rounded-md group transition-colors">
              <FiCalendar className="mr-3 h-5 w-5 text-green-400 group-hover:text-green-300" />
              <span>Séances</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-purple-600/30 rounded-md group transition-colors">
              <FiActivity className="mr-3 h-5 w-5 text-purple-400 group-hover:text-purple-300" />
              <span>Exercices</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-amber-600/30 rounded-md group transition-colors">
              <FiUser className="mr-3 h-5 w-5 text-amber-400 group-hover:text-amber-300" />
              <span>Profil</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-white/80 hover:bg-gray-500/30 rounded-md group transition-colors">
              <FiSettings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />
              <span>Paramètres</span>
            </a>
          </nav>

          {/* Bouton de déconnexion */}
          <div className="px-2 mt-6">
            <button className="flex w-full items-center px-4 py-3 text-white/80 hover:bg-red-600/30 rounded-md group transition-colors">
              <FiLogOut className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-300" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
