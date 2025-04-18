"use client";

const LearnMoreButton = () => {
  return (
    <a
      href="/newsletter-info"
      role="button"
      className="flex-1 px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
      aria-label="En savoir plus sur notre newsletter"
    >
      En savoir plus
    </a>
  );
};

export default LearnMoreButton;
