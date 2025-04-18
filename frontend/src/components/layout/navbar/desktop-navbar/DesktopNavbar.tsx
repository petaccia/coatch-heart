"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import logo from "../../../../../public/logo/logo.svg";

const DesktopNavbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/programmes', label: 'Programmes' },
    { href: '/exercices', label: 'Exercices' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 hidden sm:block transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'bg-gradient-to-r from-primary/90 to-secondary/90 shadow-md py-2' : 'bg-gradient-to-r from-primary/80 to-secondary/80 py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Coach-Heart Logo"
              width={isScrolled ? 40 : 50}
              height={isScrolled ? 40 : 50}
              className="mr-2 transition-all duration-300"
            />
            <span className={`font-display ${isScrolled ? 'text-xl' : 'text-2xl'} text-white transition-all duration-300`}>
              Coach-Heart
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-1 py-2 text-sm font-medium ${
                    isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-accent'
                  } transition-colors duration-200 hover-scale-sm`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicatorDesktop"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Boutons d'action */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium text-white hover:text-accent transition-colors duration-200 hover-scale-sm"
            >
              Connexion
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium text-primary bg-accent hover:bg-accent/90 px-4 py-2 rounded-full transition-colors duration-200 button-transition focus-ring"
            >
              Essayer gratuitement
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default DesktopNavbar;
