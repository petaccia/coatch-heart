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
    <footer className="bg-gradient-to-br from-primary to-secondary text-white pb-16 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 lg:py-12 md:px-6 lg:px-8 mobile-container">
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {/* Logo and Description */}
          <LogoSection />

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            {/* Quick Links */}
            <FooterLinks title="Liens rapides" links={quickLinks} />

            {/* Resources */}
            <FooterLinks title="Ressources" links={resourceLinks} />

            {/* Legal */}
            <FooterLinks title="Légal" links={legalLinks} />
          </div>
        </div>

        {/* Bottom Bar */}
        <BottomBar />
      </div>
    </footer>
  );
};

export default Footer;
