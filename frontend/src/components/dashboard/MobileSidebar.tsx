"use client";
import { 
  FiHome, FiUsers, FiCalendar, FiActivity,
  FiSettings, FiLogOut, FiUser, FiHeart, FiX
} from 'react-icons/fi';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
      <div className="fixed inset-y-0 left-0 w-64 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white shadow-xl">
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <div className="flex items-center">
            <FiHeart className="h-6 w-6 mr-2" />
            <span className="text-lg font-bold">Coach-Heart</span>
          </div>
          <button 
            onClick={onClose}
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
  );
};

export default MobileSidebar;
