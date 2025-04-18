"use client";

const SuccessMessage = () => {
  return (
    <div className="text-center w-full" role="status" aria-live="polite">
      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Merci pour votre inscription !</h3>
      <p className="!text-white/90">
        Vous recevrez bientôt nos prochaines newsletters avec des conseils et astuces exclusifs.
      </p>
    </div>
  );
};

export default SuccessMessage;
