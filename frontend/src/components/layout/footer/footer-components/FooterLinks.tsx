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
    <div className="text-center">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{title}</h3>
      <ul className="space-y-1 md:space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-green500 hover:text-accent transition-colors text-sm md:text-base hover-scale-sm inline-block">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
