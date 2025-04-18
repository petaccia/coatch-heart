"use client";
import { useState, useEffect } from 'react';
import { NewsletterContent, NewsletterForm } from './components';

const NewsletterSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détecter si l'appareil est mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px est le point de rupture lg de Tailwind
    };

    // Vérifier la taille initiale
    handleResize();

    // Ajouter un écouteur d'événement pour les changements de taille
    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Contenu textuel - affiché en premier sur mobile, en second sur desktop */}
            <div className={`${isMobile ? 'order-1' : 'order-1 lg:order-1'}`}>
              <NewsletterContent isMobile={isMobile} />
            </div>

            {/* Formulaire - affiché en second sur mobile, en premier sur desktop */}
            <div className={`${isMobile ? 'order-2' : 'order-2 lg:order-2'}`}>
              <NewsletterForm isMobile={isMobile} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
