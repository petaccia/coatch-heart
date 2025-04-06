"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: "Création de séances",
    description: "Créez des séances d'entraînement personnalisées en quelques clics avec notre interface intuitive",
    icon: "/images/features/create-icon.svg",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Bibliothèque d'exercices",
    description: "Accédez à une vaste collection d'exercices prêts à l'emploi et personnalisables",
    icon: "/images/features/library-icon.svg",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Planification tactique",
    description: "Visualisez et planifiez vos stratégies avec notre tableau tactique interactif",
    icon: "/images/features/tactics-icon.svg",
    color: "from-indigo-500 to-indigo-700"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Tout ce dont vous avez besoin pour réussir
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des outils puissants pour optimiser vos entraînements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="h-full bg-white rounded-2xl shadow-xl p-8 transition-transform duration-300 group-hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
