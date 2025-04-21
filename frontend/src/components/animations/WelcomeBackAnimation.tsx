"use client";
import { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';

interface WelcomeBackAnimationProps {
  userName: string;
  onComplete?: () => void;
}

const WelcomeBackAnimation = ({ userName, onComplete }: WelcomeBackAnimationProps) => {
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    const runAnimation = async () => {
      // Animation de l'overlay
      await animate(scope.current, { opacity: 1 }, { duration: 0.5 });
      
      // Animation du conteneur
      await animate('div.container', { scale: 1, opacity: 1 }, { duration: 0.5 });
      
      // Animation des éléments avec un effet de cascade
      await animate([
        ['h1', { y: 0, opacity: 1 }, { duration: 0.5 }],
        ['p', { y: 0, opacity: 1 }, { duration: 0.5, delay: 0.2 }],
        ['svg', { rotate: [0, 360], scale: 1, opacity: 1 }, { duration: 0.8, ease: "easeOut" }]
      ]);
      
      // Pause avant de disparaître
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Animation de sortie
      await animate(scope.current, { opacity: 0 }, { duration: 0.5 });
      
      // Appeler le callback onComplete si fourni
      if (onComplete) {
        onComplete();
      }
    };
    
    runAnimation();
  }, [animate, scope, onComplete]);
  
  return (
    <motion.div
      ref={scope}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
    >
      <motion.div 
        className="container bg-gradient-to-br from-primary to-secondary rounded-xl shadow-2xl p-8 max-w-md text-center"
        initial={{ scale: 0.8, opacity: 0 }}
      >
        <motion.svg 
          className="w-20 h-20 mx-auto mb-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </motion.svg>
        
        <motion.h1 
          className="text-2xl font-bold text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
        >
          Ravi de vous revoir, {userName} !
        </motion.h1>
        
        <motion.p 
          className="text-white/90"
          initial={{ y: 20, opacity: 0 }}
        >
          Votre tableau de bord est prêt. Continuons là où vous vous étiez arrêté.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeBackAnimation;
