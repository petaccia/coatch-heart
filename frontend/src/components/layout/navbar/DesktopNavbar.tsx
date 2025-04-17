// components/Navbar.js
"use client";
import { useState } from 'react';
import {
  Logo,
  NavLinks,
  ActionButtons,
  MobileMenuButton,
  MobileMenu
} from './navbar-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Links */}
        <NavLinks />

        {/* Actions */}
        <ActionButtons />

        {/* Mobile Menu Button */}
        <MobileMenuButton toggleMenu={toggleMenu} />

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;