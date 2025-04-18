"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const InteractivePreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative h-[280px] sm:h-[320px] md:h-[400px] w-full max-w-2xl mx-auto bg-white rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl p-2 sm:p-4 hover-shadow"
    >
      <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 bg-gray-100 rounded-t-lg sm:rounded-t-xl flex items-center px-2 sm:px-4" aria-hidden="true">
        <div className="flex space-x-1 sm:space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" title="Fermer"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" title="Minimiser"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" title="Agrandir"></div>
        </div>
      </div>
      <div className="mt-10 sm:mt-12">
        <Image
          src="/img/home/hero/tactical-board-preview.jpg"
          alt="Tableau tactique interactif montrant un terrain de football avec des positions de joueurs et des flèches indiquant des mouvements stratégiques"
          fill
          className="object-contain rounded-lg"
          priority
          aria-describedby="preview-description"
        />
        <div id="preview-description" className="sr-only">
          Interface du tableau tactique de Coach Heart permettant de créer et visualiser des stratégies de jeu pour les entraînements de football.
        </div>
      </div>
    </motion.div>
  );
};

export default InteractivePreview;
