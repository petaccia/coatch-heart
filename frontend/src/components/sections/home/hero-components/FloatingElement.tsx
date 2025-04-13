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
    >
      <Image
        src="/img/home/card/exercise.png"
        alt="Exercise Card"
        width={100}
        height={60}
        className="rounded"
      />
    </motion.div>
  );
};

export default FloatingElement;
