"use client";
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  value: string;
}

const CountUp = ({ value }: CountUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Si la valeur contient un symbole "+" ou "%", on l'extrait
    const numericPart = value.replace(/[^0-9,.]/g, '');
    const suffix = value.replace(numericPart, '');
    
    // Convertir en nombre pour l'animation
    let targetNumber = parseFloat(numericPart.replace(/,/g, ''));
    if (isNaN(targetNumber)) return;

    // Limiter à 2 décimales pour les pourcentages
    const decimals = numericPart.includes('.') ? 2 : 0;
    
    // Durée de l'animation en ms
    const duration = 2000;
    // Nombre d'étapes pour l'animation
    const steps = 50;
    // Incrément par étape
    const stepValue = targetNumber / steps;
    
    let currentStep = 0;
    let currentValue = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      currentValue += stepValue;
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(value); // Utiliser la valeur exacte à la fin
      } else {
        // Formater le nombre avec des virgules pour les milliers
        const formattedValue = decimals > 0 
          ? currentValue.toFixed(decimals)
          : Math.floor(currentValue).toLocaleString();
        
        setDisplayValue(formattedValue + suffix);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

export default CountUp;
