"use client";

interface NavigationDotsProps {
  total: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

const NavigationDots = ({ total, currentIndex, onSelect }: NavigationDotsProps) => {
  return (
    <div className="flex justify-center mt-8 space-x-2">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-3 h-3 rounded-full transition-all duration-200 ${
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
