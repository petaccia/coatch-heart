"use client";
import Link from 'next/link';

interface FooterLinksProps {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="mobile-text-center sm:text-left">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{title}</h3>
      <ul className="space-y-1 sm:space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-green500 hover:text-accent transition-colors text-sm sm:text-base hover-scale-sm inline-block">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
