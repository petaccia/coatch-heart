"use client";
import { Feature } from '@/data/features';
import FeatureCard from './FeatureCard';

interface FeaturesGridProps {
  features: Feature[];
}

const FeaturesGrid = ({ features }: FeaturesGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
          index={index}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
