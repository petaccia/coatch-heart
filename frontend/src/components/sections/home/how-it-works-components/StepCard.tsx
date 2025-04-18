"use client";
import { motion } from 'framer-motion';
import { Step } from '@/data/howItWorksData';

interface StepCardProps {
  step: Step;
  index: number;
}

const StepCard = ({ step, index }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* Numéro de l'étape */}
      <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold z-10 text-sm sm:text-base">
        {step.id}
      </div>

      <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 border border-gray-100 hover:border-primary/20 hover-shadow h-full">
        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-r ${step.color} p-2 sm:p-3 mb-4 sm:mb-6 flex items-center justify-center hover-scale-sm`}>
          <step.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
          {step.title}
        </h3>
        <p className="mobile-text text-gray-600">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default StepCard;
