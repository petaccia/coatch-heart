"use client";
import { useEffect } from 'react';
import { motion, useAnimate, stagger } from 'framer-motion';

interface WelcomeAnimationProps {
  userName: string;
  onComplete?: () => void;
}

const WelcomeAnimation = ({ userName, onComplete }: WelcomeAnimationProps) => {
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    const runAnimation = async () => {
      // Animation de l'overlay
      await animate(scope.current, { opacity: 1 }, { duration: 0.5 });
      
      // Animation du conteneur
      await animate('div.container', { scale: 1, opacity: 1 }, { duration: 0.5 });
      
      // Animation du titre et du texte avec un effet de cascade
      await animate([
        ['h1', { y: 0, opacity: 1 }, { duration: 0.5 }],
        ['p', { y: 0, opacity: 1 }, { duration: 0.5, delay: 0.2 }],
        ['svg', { scale: 1, opacity: 1 }, { duration: 0.5, delay: 0.1 }]
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
        className="container bg-white rounded-xl shadow-2xl p-8 max-w-md text-center"
        initial={{ scale: 0.8, opacity: 0 }}
      >
        <motion.svg 
          className="w-20 h-20 mx-auto mb-4 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ scale: 0, opacity: 0 }}
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </motion.svg>
        
        <motion.h1 
          className="text-2xl font-bold text-gray-900 mb-2"
          initial={{ y: 20, opacity: 0 }}
        >
          Bienvenue sur Coach-Heart, {userName} !
        </motion.h1>
        
        <motion.p 
          className="text-gray-600"
          initial={{ y: 20, opacity: 0 }}
        >
          Votre compte a été créé avec succès. Prêt à commencer votre parcours d'entraînement ?
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeAnimation;
