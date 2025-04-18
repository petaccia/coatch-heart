"use client";

interface FeatureItemProps {
  text: string;
}

const FeatureItem = ({ text }: FeatureItemProps) => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3" aria-hidden="true">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-white !text-base">{text}</span>
    </div>
  );
};

export default FeatureItem;
