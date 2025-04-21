"use client";
import { motion } from 'framer-motion';
import AuthLogo from './AuthLogo';

interface AuthContentProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthContent = ({ title, subtitle, children }: AuthContentProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-md">
        {/* Logo pour mobile */}
        <div className="md:hidden flex justify-center mb-8">
          <AuthLogo size={80} withAnimation={false} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 mb-8">{subtitle}</p>
          
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default AuthContent;
