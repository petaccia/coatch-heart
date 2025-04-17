"use client";
import { LogoSection, FooterLinks, BottomBar } from './footer-components';

const Footer = () => {
  // Définition des liens pour chaque section
  const quickLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/programmes', label: 'Programmes' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  const resourceLinks = [
    { href: '/aide', label: 'Centre d\'aide' },
    { href: '/tutoriels', label: 'Tutoriels' },
    { href: '/faq', label: 'FAQ' },
    { href: '/communaute', label: 'Communauté' }
  ];

  const legalLinks = [
    { href: '/conditions', label: 'Conditions d\'utilisation' },
    { href: '/confidentialite', label: 'Politique de confidentialité' },
    { href: '/cookies', label: 'Politique de cookies' },
    { href: '/mentions-legales', label: 'Mentions légales' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <LogoSection />

          {/* Quick Links */}
          <FooterLinks title="Liens rapides" links={quickLinks} />

          {/* Resources */}
          <FooterLinks title="Ressources" links={resourceLinks} />

          {/* Legal */}
          <FooterLinks title="Légal" links={legalLinks} />
        </div>

        {/* Bottom Bar */}
        <BottomBar />
      </div>
    </footer>
  );
};

export default Footer;
