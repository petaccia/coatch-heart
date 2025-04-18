"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-accent to-accent-dark overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -bottom-32 right-1/3 w-80 h-80 rounded-full bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Prêt à révolutionner vos entraînements de football ?
            </h2>
            <p className="text-xl text-primary mb-8">
              Rejoignez des milliers d'entraîneurs qui ont déjà transformé leur approche avec Coach Heart. Essayez gratuitement pendant 14 jours, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="/signup"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300"
              >
                Commencer gratuitement
              </motion.a>
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-lg font-semibold rounded-full text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Voir une démo
              </motion.a>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                    <Image
                      src={`/images/coach/coach${i}.jpg`}
                      alt={`Coach ${i}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4 text-primary">
                <p className="font-semibold">Rejoint par +2000 entraîneurs</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-2 rounded-xl shadow-2xl">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/img/home/hero/tactical-board-preview.jpg"
                  alt="Coach Heart en action"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover-shadow"
                  >
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-accent p-3 sm:p-4 rounded-md sm:rounded-lg shadow-md sm:shadow-lg hover-scale-sm">
              <p className="text-primary font-bold text-sm sm:text-base">Nouveau : Tableau tactique interactif !</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
