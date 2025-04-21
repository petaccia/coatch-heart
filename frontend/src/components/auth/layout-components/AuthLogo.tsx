"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/logo/logo.svg';

interface AuthLogoProps {
  size?: number;
  className?: string;
  withAnimation?: boolean;
}

const AuthLogo = ({ size = 80, className = "", withAnimation = true }: AuthLogoProps) => {
  const logoComponent = (
    <Link href="/">
      <Image 
        src={logo} 
        alt="Coach-Heart Logo" 
        width={size} 
        height={size} 
        className={className}
      />
    </Link>
  );

  if (withAnimation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {logoComponent}
      </motion.div>
    );
  }

  return logoComponent;
};

export default AuthLogo;
