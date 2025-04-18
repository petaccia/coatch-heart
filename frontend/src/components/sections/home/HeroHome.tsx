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
    <section className="relative gradient-hero pt-16 pb-24 md:pb-32">
      {/* Background Pattern */}

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-10 sm:py-12 md:py-16 sm:px-6 lg:px-8 mobile-container">
        <div className="grid items-center gap-8 sm:gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
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
      <div className="relative h-20">
        <FloatingElement />
      </div>
    </section>
  );
};

export default HeroHome;
