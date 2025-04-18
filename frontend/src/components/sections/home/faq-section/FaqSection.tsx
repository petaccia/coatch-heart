"use client";
import { motion } from 'framer-motion';
import { faqData } from '@/data/faqData';
import FaqItem from './FaqItem';

const FaqSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 mobile-text-center"
        >
          <h2 id="faq-heading" className="mobile-title font-bold text-gray-900">
            Questions fréquemment posées
          </h2>
          <p className="mt-3 sm:mt-4 mobile-subtitle text-gray-600">
            Tout ce que vous devez savoir sur Coach Heart
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mobile-container"
        >
          <div
            className="divide-y divide-gray-200"
            role="group"
            aria-labelledby="faq-heading"
          >
            {faqData.map((item) => (
              <FaqItem
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12 mobile-text-center"
        >
          <p className="mobile-text text-gray-600 mb-4 sm:mb-6">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md button-transition focus-ring"
            aria-label="Contactez-nous pour plus d'informations"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
