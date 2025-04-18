"use client";
import { motion } from 'framer-motion';
import { ContentHeader, FeaturesList } from './content-components';
import { newsletterContentData } from '@/data/newsletterContentData';

interface NewsletterContentProps {
  isMobile?: boolean;
}

const NewsletterContent = ({ isMobile = false }: NewsletterContentProps) => {
  return (
    <motion.div
      className={`p-6 sm:p-8 md:p-10 lg:p-16 ${isMobile ? 'text-center' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ContentHeader
        title={newsletterContentData.title}
        description={newsletterContentData.description}
        isMobile={isMobile}
      />
      <FeaturesList
        features={newsletterContentData.features}
        isMobile={isMobile}
      />
    </motion.div>
  );
};

export default NewsletterContent;
