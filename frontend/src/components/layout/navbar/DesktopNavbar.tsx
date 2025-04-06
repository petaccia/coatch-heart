// components/Navbar.js
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from "../../../../public/logo/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <Image src={logo} alt="Coach-Heart Logo" width={100} height={100} className="mr-2" />
            <span className="font-display text-2xl">Coach-Heart</span>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-accent">Accueil</Link>
          <Link href="/programmes" className="hover:text-accent">Programmes</Link>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="bg-accent text-black px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">Se connecter</Link>
          <Link href="/signup" className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition duration-300">S'inscrire</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-primary-gradient text-white p-4">
            <div className="space-y-4">
              <Link href="/" className="block hover:text-accent">Accueil</Link>
              <Link href="/programmes" className="block hover:text-accent">Programmes</Link>
              <Link href="/blog" className="block hover:text-accent">Blog</Link>
              <Link href="/contact" className="block hover:text-accent">Contact</Link>
              <Link href="/login" className="block bg-accent text-black px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">Se connecter</Link>
              <Link href="/signup" className="block bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition duration-300">S'inscrire</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;