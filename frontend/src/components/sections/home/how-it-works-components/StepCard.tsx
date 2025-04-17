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
  );
};

export default StepCard;
