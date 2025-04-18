"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Feature } from '@/data/features';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="h-full bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-5 sm:p-8 hover-shadow button-transition group-hover:-translate-y-2">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-md sm:rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 sm:mb-6 hover-scale-sm`}>
          <Image
            src={feature.icon}
            alt={feature.title}
            width={28}
            height={28}
            sizes="(max-width: 640px) 28px, 32px"
            className="text-white"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
          {feature.title}
        </h3>
        <p className="mobile-text text-gray-600">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
