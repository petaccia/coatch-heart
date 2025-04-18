"use client";
import { Step } from '@/data/howItWorksData';
import { StepCard } from './';

interface StepsGridProps {
  steps: Step[];
}

const StepsGrid = ({ steps }: StepsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 relative">
      {steps.map((step, index) => (
        <StepCard key={step.id} step={step} index={index} />
      ))}
    </div>
  );
};

export default StepsGrid;
