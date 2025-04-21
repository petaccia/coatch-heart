"use client";
import { AuthSidebar, AuthContent } from './layout-components';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Partie gauche - Sidebar avec gradient et fonctionnalités */}
      <AuthSidebar />

      {/* Partie droite - Contenu du formulaire */}
      <AuthContent title={title} subtitle={subtitle}>
        {children}
      </AuthContent>
    </div>
  );
};

export default AuthLayout;
