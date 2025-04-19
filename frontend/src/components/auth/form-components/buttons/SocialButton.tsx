"use client";
import { ReactNode } from 'react';

interface SocialButtonProps {
  icon: ReactNode;
  text: string;
  onClick?: () => void;
}

const SocialButton = ({ icon, text, onClick }: SocialButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 w-full"
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  );
};

export default SocialButton;
