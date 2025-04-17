"use client";
import { Step } from '@/data/howItWorksData';
import { StepCard } from './';

interface StepsGridProps {
  steps: Step[];
}

const StepsGrid = ({ steps }: StepsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 relative">
      {steps.map((step, index) => (
        <StepCard key={step.id} step={step} index={index} />
      ))}
    </div>
  );
};

export default StepsGrid;
