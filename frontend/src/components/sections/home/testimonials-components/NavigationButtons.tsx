"use client";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

const NavigationButtons = ({ onPrev, onNext }: NavigationButtonsProps) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-0 z-10 p-1 sm:p-2 rounded-full bg-white shadow-md sm:shadow-lg hover:bg-gray-50 border-2 border-secondary/20 hover:border-secondary/40 button-transition focus-ring"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNext}
        className="absolute right-0 z-10 p-1 sm:p-2 rounded-full bg-white shadow-md sm:shadow-lg hover:bg-gray-50 border-2 border-secondary/20 hover:border-secondary/40 button-transition focus-ring"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
};

export default NavigationButtons;
