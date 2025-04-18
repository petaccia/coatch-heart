"use client";
import { ContentHeader, FeaturesList } from './content-components';
import { newsletterContentData } from '@/data/newsletterContentData';

const NewsletterContent = () => {
  return (
    <div className="p-8 md:p-12 lg:p-16">
      <ContentHeader
        title={newsletterContentData.title}
        description={newsletterContentData.description}
      />
      <FeaturesList features={newsletterContentData.features} />
    </div>
  );
};

export default NewsletterContent;
