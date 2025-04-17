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
  );
};

export default FeatureCard;
