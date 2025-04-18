"use client";
import { motion } from 'framer-motion';
import { ContentHeader, FeaturesList } from './content-components';
import { newsletterContentData } from '@/data/newsletterContentData';

const NewsletterContent = () => {
  return (
    <motion.div
      className="p-8 md:p-12 lg:p-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ContentHeader
        title={newsletterContentData.title}
        description={newsletterContentData.description}
      />
      <FeaturesList features={newsletterContentData.features} />
    </motion.div>
  );
};

export default NewsletterContent;
