"use client";
import { motion } from 'framer-motion';
import { PricingPlan } from '@/data/pricingData';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard = ({ plan, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col ${
        plan.isPopular ? 'ring-4 ring-primary' : ''
      }`}
    >
      {plan.isPopular && (
        <div
          className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold"
          aria-label="Plan populaire"
        >
          Populaire
        </div>
      )}

      <div className={`bg-gradient-to-r ${plan.color} p-6 ${plan.color.includes('accent') ? 'text-primary' : 'text-white'}`}>
        <h3 className="text-xl font-bold">{plan.name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold">{plan.price}</span>
          <span className="ml-1 text-xl font-medium">/mois</span>
        </div>
        <p className={`mt-2 !text-base ${plan.color.includes('accent') ? '!text-primary/90' : '!text-white/90'}`}>{plan.description}</p>
      </div>

      <div className="p-6 flex-grow">
        <ul className="space-y-4" aria-label={`Fonctionnalités incluses dans le plan ${plan.name}`}>
          {plan.features.map((feature) => (
            <li key={feature.id} className="flex items-start">
              {feature.included ? (
                <FaCheck className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" aria-hidden="true" />
              ) : (
                <FaTimes className="h-5 w-5 text-gray-400 flex-shrink-0 mr-3" aria-hidden="true" />
              )}
              <span className="sr-only">{feature.included ? 'Inclus:' : 'Non inclus:'}</span>
              <span className={feature.included ? '!text-gray-900 !text-base' : '!text-gray-500 !text-base'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pt-0">
        <motion.a
          href={`/signup?plan=${plan.name.toLowerCase()}`}
          role="button"
          aria-label={`${plan.buttonText} pour le plan ${plan.name}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-4 rounded-lg font-medium bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all duration-300 ${plan.color.includes('accent') ? 'text-primary' : 'text-white'} flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
        >
          {plan.buttonText}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PricingCard;
