"use client";
import Link from 'next/link';

const BottomBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-white/20 mt-8 md:mt-10 lg:mt-12 pt-6 pb-4 lg:pb-0 md:pt-8 flex flex-col items-center text-center">
      <p className="!text-accent-dark text-xs md:text-sm">
        &copy; {currentYear} Coach-Heart. Tous droits réservés.
      </p>
      <div className="mt-3 md:mt-4 lg:mt-0">
        <Link href="/contact" className="text-green500 hover:text-accent transition-colors text-xs md:text-sm hover-scale-sm inline-block focus-ring rounded-md px-2 py-1">
          Contactez-nous
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
