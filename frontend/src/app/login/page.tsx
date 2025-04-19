"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LoginForm from '@/components/auth/LoginForm';
import AuthLayout from '@/components/auth/AuthLayout';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Connexion"
      subtitle="Connectez-vous à votre compte Coach-Heart"
    >
      <LoginForm />
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Vous n'avez pas de compte ?{' '}
          <Link href="/signup" className="text-primary hover:text-secondary font-medium transition-colors">
            Inscrivez-vous
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
