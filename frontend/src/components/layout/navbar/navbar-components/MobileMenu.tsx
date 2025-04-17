"use client";
import NavLinks from './NavLinks';
import ActionButtons from './ActionButtons';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-16 left-0 w-full bg-primary-gradient text-white p-4">
      <div className="space-y-4">
        <NavLinks isMobile={true} />
        <ActionButtons isMobile={true} />
      </div>
    </div>
  );
};

export default MobileMenu;
