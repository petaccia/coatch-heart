"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { testimonialsData as testimonials } from '@/data/testimonialsData';

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
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ce qu'en disent nos utilisateurs
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez les retours d'expérience de nos coachs
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 border-2 border-secondary/20 hover:border-secondary/40 transition-colors"
            >
              <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 mx-12 max-w-2xl border-2 border-primary/10"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="rounded-full object-cover ring-4 ring-secondary/20"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-secondary">{testimonials[currentIndex].role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
            </motion.div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 border-2 border-secondary/20 hover:border-secondary/40 transition-colors"
            >
              <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-secondary scale-110' 
                    : 'bg-secondary/20 hover:bg-secondary/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
