"use client";
import { motion } from 'framer-motion';
import {
  HeroTitle,
  FeaturesList,
  CTAButtons,
  InteractivePreview,
  FloatingElement
} from './hero-components';

const HeroHome = () => {
  return (
    <section className="relative min-h-screen gradient-hero">
      {/* Background Pattern */}

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <HeroTitle />
            <FeaturesList />
            <CTAButtons />
          </motion.div>

          {/* Interactive Preview */}
          <InteractivePreview />
        </div>
      </div>

      {/* Floating Elements */}
      <FloatingElement />
    </section>
  );
};

export default HeroHome;
