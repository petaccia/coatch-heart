"use client";
import Link from 'next/link';

interface ActionButtonsProps {
  isMobile?: boolean;
}

const ActionButtons = ({ isMobile = false }: ActionButtonsProps) => {
  return (
    <div className={isMobile ? "space-y-4" : "hidden md:flex space-x-4"}>
      <Link 
        href="/login" 
        className={`${isMobile ? "block" : ""} bg-accent text-black px-4 py-2 rounded hover:bg-yellow-400 transition duration-300`}
      >
        Se connecter
      </Link>
      <Link 
        href="/signup" 
        className={`${isMobile ? "block" : ""} bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition duration-300`}
      >
        S'inscrire
      </Link>
    </div>
  );
};

export default ActionButtons;
