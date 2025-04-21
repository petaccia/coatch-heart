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
      className="hidden md:flex md:w-1/2 items-center justify-center p-8 relative overflow-hidden"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Fond avec dégradé complexe */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/90 z-0" />

      {/* Effet de vague pour transition fluide */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary to-transparent z-10" />

      {/* Motif de points */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px] z-10" />
      <div className="max-w-md text-white relative z-20">
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
