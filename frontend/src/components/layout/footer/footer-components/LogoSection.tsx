"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from "../../../../../public/logo/logo.svg";

const LogoSection = () => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-1">
      <Link href="/" className="flex items-center mb-4">
        <Image src={logo} alt="Coach-Heart Logo" width={80} height={80} className="mr-2" />
        <span className="font-display text-2xl">Coach-Heart</span>
      </Link>
      <p className="!text-accent text-base mb-4">
        Simplifiez la préparation de vos séances d'entraînement de football avec notre plateforme intuitive.
      </p>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
          <FaInstagram size={24} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
          <FaYoutube size={24} />
        </a>
      </div>
    </div>
  );
};

export default LogoSection;
