"use client";
import FeatureItem from './FeatureItem';

interface FeaturesListProps {
  features: string[];
}

const FeaturesList = ({ features }: FeaturesListProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8" aria-label="Avantages de la newsletter">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </div>
  );
};

export default FeaturesList;
