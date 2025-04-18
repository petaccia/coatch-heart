"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const FloatingElement = () => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{ repeat: Infinity, duration: 3 }}
      className="absolute -bottom-16 right-4 md:-bottom-20 md:right-10 bg-white p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg shadow-md sm:shadow-lg z-10"
      aria-hidden="true" // Élément décoratif qui n'apporte pas d'information essentielle
    >
      <Image
        src="/img/home/card/exercise.png"
        alt="Carte d'exercice d'entraînement"
        width={80}
        height={48}
        sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, 100px"
        className="rounded"
      />
    </motion.div>
  );
};

export default FloatingElement;
