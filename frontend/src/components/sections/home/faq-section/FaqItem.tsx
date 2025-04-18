"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Générer des IDs uniques pour l'accessibilité
  const headingId = `question-${question.replace(/\s+/g, '-').toLowerCase()}`;
  const contentId = `answer-${question.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="border-b border-gray-200 py-4">
      <h3>
        <button
          className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-2 px-1"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-controls={contentId}
          id={headingId}
        >
          <span className="text-lg font-semibold text-gray-900">{question}</span>
          <span className="ml-4 flex-shrink-0" aria-hidden="true">
            {isOpen ? (
              <FaChevronUp className="h-5 w-5 text-primary" />
            ) : (
              <FaChevronDown className="h-5 w-5 text-primary" />
            )}
          </span>
        </button>
      </h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            id={contentId}
            role="region"
            aria-labelledby={headingId}
          >
            <p className="mt-4 text-base !text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
