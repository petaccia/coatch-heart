"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroHome = () => {
  return (
    <section className="relative min-h-screen gradient-hero">
      {/* Background Pattern */}

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-6 font-bold text-h1">
              Simplifiez la préparation de vos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green600 to-blue500">
                séances d'entraînement
              </span>
            </h1>
            <p className="mb-8">
              Coach Heart vous aide à créer, organiser et partager vos séances d'entraînement de football en quelques clics.
            </p>
            
            {/* Features List */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 text-left"
            >
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bibliothèque d'exercices personnalisables
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Planification tactique interactive
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Partage facile avec votre staff
                </li>
              </ul>
            </motion.div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gradient-to-r from-green-600 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Commencer maintenant
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-green-600 px-8 py-4 text-lg font-semibold text-green-600 hover:bg-green-50 transition-all duration-300"
              >
                Voir la démo
              </motion.button>
            </div>
          </motion.div>

          {/* Interactive Preview */}
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
        </div>
      </div>

      {/* Floating Elements */}
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
    </section>
  );
};

export default HeroHome;
