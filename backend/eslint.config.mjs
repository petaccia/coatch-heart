import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

// Initialiser FlatCompat
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
});

export default [
  // Configuration de base
  js.configs.recommended,

  // Configuration pour TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Règles spécifiques à TypeScript
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  // Appliquer les configurations étendues
  ...compat.config({
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
  }),

  // Règles personnalisées
  {
    rules: {
      // Interdire console.log en production, mais autoriser console.error et console.warn
      'no-console': ['error', { allow: ['warn', 'error'] }],

      // Utiliser des guillemets simples
      'quotes': ['error', 'double'],

      // Toujours utiliser des points-virgules
      'semi': ['error', 'always'],

      // Pas de variables non utilisées
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],

      // Avertissement pour any explicite
      '@typescript-eslint/no-explicit-any': 'warn',

      // Forcer l'utilisation de const pour les variables qui ne sont pas réassignées
      'prefer-const': 'error',

      // Règles de formatage Prettier
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: false,
          trailingComma: 'all',
          bracketSpacing: true,
          arrowParens: 'always',
        },
      ],
    },
  },

  // Ignorer certains fichiers ou dossiers
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      // Ajoutez d'autres fichiers ou dossiers à ignorer ici
    ],
  },
];