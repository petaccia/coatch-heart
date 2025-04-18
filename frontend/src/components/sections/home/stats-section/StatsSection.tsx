"use client";
import { motion } from 'framer-motion';
import { statsData } from '@/data/statsData';
import CountUp from './CountUp';

const StatsSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 mobile-text-center"
        >
          <h2 className="mobile-title font-bold text-gray-900">
            Coach Heart en chiffres
          </h2>
          <p className="mt-3 sm:mt-4 mobile-subtitle text-gray-600">
            Des résultats concrets pour les entraîneurs du monde entier
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6 text-center hover-shadow"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 hover-scale-sm">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                <CountUp value={stat.value} />
              </div>
              <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 sm:mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg sm:rounded-xl p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between mobile-text-center md:text-left"
        >
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
              Prêt à rejoindre la communauté ?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Commencez dès aujourd'hui et transformez votre approche d'entraînement.
            </p>
          </div>
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md button-transition focus-ring"
          >
            Essayer gratuitement
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
