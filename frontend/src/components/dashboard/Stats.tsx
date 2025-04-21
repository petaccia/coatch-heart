"use client";
import { FiUsers, FiCalendar, FiClock, FiAward } from 'react-icons/fi';
import StatCard from './StatCard';

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard 
        icon={FiUsers}
        title="Membres"
        value={12}
        color="blue"
      />
      
      <StatCard 
        icon={FiCalendar}
        title="Séances"
        value={8}
        color="green"
      />
      
      <StatCard 
        icon={FiClock}
        title="Heures"
        value={24}
        color="purple"
      />
      
      <StatCard 
        icon={FiAward}
        title="Objectifs"
        value="3/5"
        color="amber"
      />
    </div>
  );
};

export default Stats;
