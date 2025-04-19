"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SignupForm from '@/components/auth/SignupForm';
import AuthLayout from '@/components/auth/AuthLayout';

export default function SignupPage() {
  return (
    <AuthLayout
      title="Créez votre compte"
      subtitle="Rejoignez Coach-Heart et commencez à créer vos séances d'entraînement"
    >
      <SignupForm />
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Vous avez déjà un compte ?{' '}
          <Link href="/login" className="text-primary hover:text-secondary font-medium transition-colors">
            Connectez-vous
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
