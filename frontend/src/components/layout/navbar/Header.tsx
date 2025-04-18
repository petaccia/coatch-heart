"use client";
import { DesktopNavbar } from './desktop-navbar';
import { MobileNavbar } from './mobile-navbar';

const Header = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      {/* Ajout d'un espace pour compenser la navbar fixe */}
      <div className=""></div>
    </>
  );
};

export default Header;
