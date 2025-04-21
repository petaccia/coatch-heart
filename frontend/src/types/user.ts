export interface User {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  role: string;
  profilePicture: string | null;
  phoneNumber: string | null;
  createdAt: string;
  updatedAt: string;
}
