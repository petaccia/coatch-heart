// Types pour l'authentification
import { User } from './user';

export interface SignupData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role?: 'ADMIN' | 'COACH' | 'USER';
  phoneNumber?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}