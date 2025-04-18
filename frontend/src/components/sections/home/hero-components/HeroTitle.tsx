"use client";

const HeroTitle = () => {
  return (
    <div className="text-center">
      <h1 className="mb-3 sm:mb-4 font-bold text-2xl sm:text-3xl md:text-4xl text-h1">
        Simplifiez la préparation de vos{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green600 to-blue500">
          séances d'entraînement
        </span>
      </h1>
      <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
        Coach Heart vous aide à créer, organiser et partager vos séances d'entraînement de football en quelques clics.
      </p>
    </div>
  );
};

export default HeroTitle;
