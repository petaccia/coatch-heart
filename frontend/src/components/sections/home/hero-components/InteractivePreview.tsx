"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const InteractivePreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative h-[500px] w-full bg-white rounded-xl shadow-2xl p-4"
    >
      <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 rounded-t-xl flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="mt-12">
        <Image
          src="/img/home/hero/tactical-board-preview.jpg"
          alt="Tableau tactique interactif"
          fill
          className="object-contain rounded-lg"
          priority
        />
      </div>
    </motion.div>
  );
};

export default InteractivePreview;
