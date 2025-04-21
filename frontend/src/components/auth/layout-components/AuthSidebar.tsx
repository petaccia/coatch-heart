"use client";
import { motion } from 'framer-motion';
import AuthLogo from './AuthLogo';
import FeaturesList from './FeaturesList';

const features = [
  "Créez des séances personnalisées en quelques clics",
  "Accédez à une bibliothèque d'exercices variés",
  "Partagez vos séances avec vos joueurs"
];

const AuthSidebar = () => {
  return (
    <motion.div 
      className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary to-secondary items-center justify-center p-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md text-white">
        <AuthLogo size={120} className="mb-8" />
        
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Simplifiez la préparation de vos séances d'entraînement
        </motion.h2>
        
        <FeaturesList features={features} />
      </div>
    </motion.div>
  );
};

export default AuthSidebar;
