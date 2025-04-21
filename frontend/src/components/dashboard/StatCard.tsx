"use client";
import { IconType } from 'react-icons';

interface StatCardProps {
  icon: IconType;
  title: string;
  value: string | number;
  color: 'blue' | 'green' | 'purple' | 'amber';
}

const StatCard = ({ icon: Icon, title, value, color }: StatCardProps) => {
  const colorClasses = {
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-100',
      text: 'text-blue-600'
    },
    green: {
      border: 'border-green-500',
      bg: 'bg-green-100',
      text: 'text-green-600'
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-100',
      text: 'text-purple-600'
    },
    amber: {
      border: 'border-amber-500',
      bg: 'bg-amber-100',
      text: 'text-amber-600'
    }
  };

  const { border, bg, text } = colorClasses[color];

  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 flex items-center border-l-4 ${border} hover:shadow-md transition-shadow`}>
      <div className={`p-3 rounded-full ${bg} ${text} mr-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
