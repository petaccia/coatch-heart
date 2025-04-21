"use client";
import { 
  FiCalendar, FiUsers, FiActivity, 
  FiTrendingUp, FiPlus 
} from 'react-icons/fi';

const QuickActions = () => {
  return (
    <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100 hover:shadow-md transition-shadow">
      <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
        <span className="bg-indigo-100 text-indigo-600 p-1 rounded-md mr-2">
          <FiPlus className="h-5 w-5" />
        </span>
        Actions rapides
      </h2>
      
      <div className="space-y-4">
        <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg hover:shadow-md transition-all">
          <div className="flex items-center">
            <FiCalendar className="h-5 w-5 mr-3" />
            <span>Nouvelle séance</span>
          </div>
          <FiPlus className="h-5 w-5" />
        </button>
        
        <button className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-blue-300 hover:text-blue-600 hover:shadow-sm transition-all">
          <div className="flex items-center">
            <FiUsers className="h-5 w-5 mr-3" />
            <span>Ajouter un membre</span>
          </div>
          <FiPlus className="h-5 w-5" />
        </button>
        
        <button className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-green-300 hover:text-green-600 hover:shadow-sm transition-all">
          <div className="flex items-center">
            <FiActivity className="h-5 w-5 mr-3" />
            <span>Nouvel exercice</span>
          </div>
          <FiPlus className="h-5 w-5" />
        </button>
        
        <button className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-purple-300 hover:text-purple-600 hover:shadow-sm transition-all">
          <div className="flex items-center">
            <FiTrendingUp className="h-5 w-5 mr-3" />
            <span>Suivi de progression</span>
          </div>
          <FiPlus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
