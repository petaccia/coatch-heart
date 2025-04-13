"use client";
import { motion } from 'framer-motion';

const HeroTitle = () => {
  return (
    <div className="text-center lg:text-left">
      <h1 className="mb-6 font-bold text-h1">
        Simplifiez la préparation de vos{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green600 to-blue500">
          séances d'entraînement
        </span>
      </h1>
      <p className="mb-8">
        Coach Heart vous aide à créer, organiser et partager vos séances d'entraînement de football en quelques clics.
      </p>
    </div>
  );
};

export default HeroTitle;
