"use client";

const HeroTitle = () => {
  return (
    <div className="mobile-text-center">
      <h1 className="mb-4 sm:mb-6 font-bold text-3xl sm:text-4xl md:text-5xl text-h1">
        Simplifiez la préparation de vos{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green600 to-blue500">
          séances d'entraînement
        </span>
      </h1>
      <p className="mb-6 sm:mb-8 mobile-subtitle">
        Coach Heart vous aide à créer, organiser et partager vos séances d'entraînement de football en quelques clics.
      </p>
    </div>
  );
};

export default HeroTitle;
