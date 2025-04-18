"use client";
import { useState } from 'react';
import { testimonialsData as testimonials } from '@/data/testimonialsData';
import {
  SectionTitle,
  TestimonialCard,
  NavigationButtons,
  NavigationDots
} from './testimonials-components';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Ce qu'en disent nos utilisateurs"
          subtitle="Découvrez les retours d'expérience de nos coachs"
        />

        <div className="relative">
          <div className="flex items-center justify-center">
            <NavigationButtons
              onPrev={prevTestimonial}
              onNext={nextTestimonial}
            />

            <TestimonialCard
              testimonial={testimonials[currentIndex]}
              index={currentIndex}
            />
          </div>

          <NavigationDots
            total={testimonials.length}
            currentIndex={currentIndex}
            onSelect={setCurrentIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
