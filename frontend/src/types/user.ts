export interface User {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  profilePicture?: string | null;
  phoneNumber?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
