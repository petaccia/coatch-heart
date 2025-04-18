"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaHome, FaCalendarAlt, FaChalkboardTeacher, FaUserAlt, FaBars } from 'react-icons/fa';

const MobileNavbar = () => {
  const pathname = usePathname();
  // La navbar est toujours visible, pas besoin de gérer le scroll

  const navItems = [
    { href: '/', label: 'Accueil', icon: <FaHome className="w-5 h-5 hover-scale-sm" /> },
    { href: '/programmes', label: 'Programmes', icon: <FaCalendarAlt className="w-5 h-5 hover-scale-sm" /> },
    { href: '/exercices', label: 'Exercices', icon: <FaChalkboardTeacher className="w-5 h-5 hover-scale-sm" /> },
    { href: '/profil', label: 'Profil', icon: <FaUserAlt className="w-5 h-5 hover-scale-sm" /> },
    { href: '/menu', label: 'Menu', icon: <FaBars className="w-5 h-5 hover-scale-sm" /> },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary shadow-lg sm:hidden z-50 backdrop-blur-sm bg-opacity-90"
    >
      <div className="flex justify-around items-center h-16 relative">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full ${
                isActive
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              } transition-colors duration-200 active:scale-95`}
            >
              <div className={`relative p-1 rounded-full ${isActive ? 'bg-white/20' : ''}`}>
                {item.icon}
                {isActive && (
                  <>
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      layoutId="activeIndicatorTop"
                      className="absolute -top-[22px] left-1/2 transform -translate-x-1/2 w-10 h-1 bg-white rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  </>
                )}
              </div>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavbar;
