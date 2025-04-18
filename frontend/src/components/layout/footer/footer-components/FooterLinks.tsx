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
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-green500 hover:text-accent transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
