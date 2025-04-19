"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from "../../../../../public/logo/logo.svg";

const LogoSection = () => {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-1 ">
      <Link href="/" className="text-center flex items-center mb-4 md:mr-2 justify-center ">
        <Image src={logo} alt="Coach-Heart Logo" width={60} height={60} className="text-center sm:w-[80px] sm:h-[80px] w-[60px] h-[60px]" />
        <span className="font-display text-xl sm:text-2xl">Coach-Heart</span>
      </Link>
      <p className="!text-accent text-center mb-4 max-w-xs mx-auto ">
        Simplifiez la préparation de vos séances d'entraînement de football avec notre plateforme intuitive.
      </p>
      <div className="flex justify-center items-center gap-3">
        <div className="flex mt-2 gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors hover-scale-sm">
            <FaFacebook size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors hover-scale-sm">
            <FaTwitter size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
          </a>
        </div>
        <div className="flex justify-center items-center mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors hover-scale-sm">
            <FaInstagram size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
          </a>
        </div>
        <div className="flex justify-center mt-2">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors hover-scale-sm">
            <FaYoutube size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
