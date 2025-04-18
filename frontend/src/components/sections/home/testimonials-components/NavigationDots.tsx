"use client";

interface NavigationDotsProps {
  total: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

const NavigationDots = ({ total, currentIndex, onSelect }: NavigationDotsProps) => {
  return (
    <div className="flex justify-center mt-6 sm:mt-8 space-x-1 sm:space-x-2">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full button-transition ${
            index === currentIndex
              ? 'bg-secondary scale-110'
              : 'bg-secondary/20 hover:bg-secondary/40'
          }`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
