"use client";
import React, { ReactNode } from 'react';
import { AuthProvider as ContextAuthProvider } from '@/contexts/AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Composant AuthProvider qui encapsule le contexte d'authentification
 * Ce composant permet d'isoler la logique d'authentification et de la rendre réutilisable
 */
const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <ContextAuthProvider>
      {children}
    </ContextAuthProvider>
  );
};

export default AuthProvider;