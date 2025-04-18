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
      className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg"
      aria-hidden="true" // Élément décoratif qui n'apporte pas d'information essentielle
    >
      <Image
        src="/img/home/card/exercise.png"
        alt="Carte d'exercice d'entraînement"
        width={100}
        height={60}
        className="rounded"
      />
    </motion.div>
  );
};

export default FloatingElement;
