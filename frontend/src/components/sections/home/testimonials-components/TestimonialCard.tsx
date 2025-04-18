"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Testimonial } from '@/data/testimonialsData';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-5 sm:p-8 mx-4 sm:mx-8 md:mx-12 max-w-2xl border-2 border-primary/10 hover-shadow"
    >
      <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 mb-3 sm:mb-0 mx-auto sm:mx-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="rounded-full object-cover ring-2 sm:ring-4 ring-secondary/20"
          />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-primary">
            {testimonial.name}
          </h3>
          <p className="text-sm sm:text-base text-secondary">{testimonial.role}</p>
        </div>
        <div className="ml-auto flex mt-3 sm:mt-0 justify-center sm:justify-start">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 text-accent"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-600 italic text-base sm:text-lg leading-relaxed mobile-text text-center sm:text-left">
        "{testimonial.content}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
