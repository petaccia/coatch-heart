"use client";
import { motion } from 'framer-motion';
import { steps } from '@/data/howItWorksData';

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Comment ça marche
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Simplifiez votre gestion d'entraînement en 4 étapes simples
          </p>
        </motion.div>

        <div className="relative">
          {/* Ligne de connexion */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-secondary/20 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Numéro de l'étape */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold z-10">
                  {step.id}
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:border-primary/20 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} p-3 mb-6 flex items-center justify-center`}>
                    <step.Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;