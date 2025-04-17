"use client";
import Link from 'next/link';

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks = ({ isMobile = false }: NavLinksProps) => {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/programmes", label: "Programmes" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <div className={isMobile ? "space-y-4" : "hidden md:flex space-x-6"}>
      {links.map((link) => (
        <Link 
          key={link.href} 
          href={link.href} 
          className={`${isMobile ? "block" : ""} hover:text-accent`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
