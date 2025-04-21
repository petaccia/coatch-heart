"use client";
import { FiActivity, FiCalendar, FiUsers } from 'react-icons/fi';
import ActivityCard from './ActivityCard';

const RecentActivity = () => {
  return (
    <div className="lg:col-span-2 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
          <span className="bg-indigo-100 text-indigo-600 p-1 rounded-md mr-2">
            <FiActivity className="h-5 w-5" />
          </span>
          Activité récente
        </h2>
        <button className="text-sm bg-indigo-50 text-primary hover:bg-indigo-100 px-3 py-1 rounded transition-colors flex items-center">
          <span>Voir tout</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-4">
        <ActivityCard 
          icon={FiCalendar}
          title="Séance d'entraînement créée"
          description="Vous avez créé une nouvelle séance pour l'équipe Junior."
          time="Il y a 2 heures"
          actionText="Voir détails"
          color="blue"
        />
        
        <ActivityCard 
          icon={FiUsers}
          title="Nouveau membre"
          description="Thomas Dubois a rejoint l'équipe Senior."
          time="Il y a 1 jour"
          actionText="Voir profil"
          color="green"
        />
        
        <ActivityCard 
          icon={FiActivity}
          title="Exercice terminé"
          description="L'équipe Junior a terminé l'exercice de passes."
          time="Il y a 2 jours"
          actionText="Voir résultats"
          color="purple"
        />
      </div>
    </div>
  );
};

export default RecentActivity;
