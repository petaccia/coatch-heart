"use client";

interface ContentHeaderProps {
  title: string;
  description: string;
}

const ContentHeader = ({ title, description }: ContentHeaderProps) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="!text-white/90 !text-lg mb-6">
        {description}
      </p>
    </>
  );
};

export default ContentHeader;
