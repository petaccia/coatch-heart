"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaHome, FaCalendarAlt, FaChalkboardTeacher, FaUserAlt, FaBars, FaSignInAlt } from 'react-icons/fa';

const MobileNavbar = () => {
  const pathname = usePathname();
  // La navbar est toujours visible, pas besoin de gérer le scroll

  const [showAuthMenu, setShowAuthMenu] = useState(false);

  const navItems = [
    { href: '/', label: 'Accueil', icon: <FaHome className="w-5 h-5 hover-scale-sm" /> },
    { href: '/programmes', label: 'Programmes', icon: <FaCalendarAlt className="w-5 h-5 hover-scale-sm" /> },
    { href: '/exercices', label: 'Exercices', icon: <FaChalkboardTeacher className="w-5 h-5 hover-scale-sm" /> },
    {
      href: '#',
      label: 'Compte',
      icon: <FaUserAlt className="w-5 h-5 hover-scale-sm" />,
      onClick: () => setShowAuthMenu(!showAuthMenu)
    },
    { href: '/menu', label: 'Menu', icon: <FaBars className="w-5 h-5 hover-scale-sm" /> },
  ];

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary shadow-lg lg:hidden z-50 backdrop-blur-sm bg-opacity-90"
      >
        <div className="flex justify-around items-center h-16 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <div
                key={item.href}
                className={`flex flex-col items-center justify-center w-full h-full ${
                  isActive
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                } transition-colors duration-200 active:scale-95`}
                onClick={item.onClick}
              >
                {item.href !== '#' ? (
                  <Link
                    href={item.href}
                    className="flex flex-col items-center justify-center w-full h-full"
                  >
                    <div className={`relative p-1 rounded-full ${isActive ? 'bg-white/20' : ''}`}>
                      {item.icon}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full animate-pulse shadow-glow"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                    <span className="text-xs mt-1 font-medium">{item.label}</span>
                  </Link>
                ) : (
                  <>
                    <div className={`relative p-1 rounded-full ${isActive ? 'bg-white/20' : ''}`}>
                      {item.icon}
                    </div>
                    <span className="text-xs mt-1 font-medium">{item.label}</span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Overlay d'authentification */}
      {showAuthMenu && (
        <>
          {/* Fond flouté */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowAuthMenu(false)}
          />

          {/* Menu d'authentification */}
          <motion.div
            className="fixed inset-x-0 top-0 bottom-16 lg:hidden z-40 flex flex-col justify-center items-center p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white w-full max-w-sm rounded-xl shadow-2xl p-6 space-y-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button
                  onClick={() => setShowAuthMenu(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                <Link
                  href="/login"
                  className="flex items-center justify-center space-x-2 bg-primary/10 text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/20 transition-colors"
                  onClick={() => setShowAuthMenu(false)}
                >
                  <FaSignInAlt className="w-5 h-5" />
                  <span>Connexion</span>
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center justify-center space-x-2 border border-primary text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                  onClick={() => setShowAuthMenu(false)}
                >
                  <span>Inscription</span>
                </Link>
                <Link
                  href="/try-free"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-colors"
                  onClick={() => setShowAuthMenu(false)}
                >
                  <span>Essayer gratuitement</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default MobileNavbar;
