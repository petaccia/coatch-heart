"use client";
import Link from 'next/link';

const BottomBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="!text-accent-dark text-sm">
        &copy; {currentYear} Coach-Heart. Tous droits réservés.
      </p>
      <div className="mt-4 md:mt-0">
        <Link href="/contact" className="text-green500 hover:text-accent transition-colors text-sm">
          Contactez-nous
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
