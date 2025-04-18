"use client";
import Link from 'next/link';

const BottomBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-white/20 mt-8 sm:mt-10 md:mt-12 pt-6 pb-4 sm:pb-0 sm:pt-8 flex flex-col md:flex-row justify-between items-center mobile-text-center md:text-left">
      <p className="!text-accent-dark text-xs sm:text-sm">
        &copy; {currentYear} Coach-Heart. Tous droits réservés.
      </p>
      <div className="mt-3 sm:mt-4 md:mt-0">
        <Link href="/contact" className="text-green500 hover:text-accent transition-colors text-xs sm:text-sm hover-scale-sm inline-block focus-ring rounded-md px-2 py-1">
          Contactez-nous
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
