"use client";
import { IconType } from 'react-icons';

interface ActivityCardProps {
  icon: IconType;
  title: string;
  description: string;
  time: string;
  actionText: string;
  color: 'blue' | 'green' | 'purple';
}

const ActivityCard = ({ 
  icon: Icon, 
  title, 
  description, 
  time, 
  actionText, 
  color 
}: ActivityCardProps) => {
  const colorClasses = {
    blue: {
      border: 'border-blue-400',
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      button: 'bg-blue-50 text-blue-500 hover:bg-blue-100'
    },
    green: {
      border: 'border-green-400',
      bg: 'bg-green-100',
      text: 'text-green-600',
      button: 'bg-green-50 text-green-500 hover:bg-green-100'
    },
    purple: {
      border: 'border-purple-400',
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      button: 'bg-purple-50 text-purple-500 hover:bg-purple-100'
    }
  };

  const { border, bg, text, button } = colorClasses[color];

  return (
    <div className={`bg-white border-l-4 ${border} rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start">
        <div className={`p-2 rounded-full ${bg} ${text} mr-4 shadow-sm`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-400">{time}</p>
            <button className={`text-xs ${button} px-2 py-1 rounded transition-colors w-24 text-center`}>
              {actionText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
