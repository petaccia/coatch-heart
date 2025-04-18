"use client";
import { NewsletterContent, NewsletterForm } from './components';

const NewsletterSection = () => {
  return (
    <section className="py-16 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Contenu textuel */}
            <NewsletterContent />

            {/* Formulaire */}
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
