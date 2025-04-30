export interface User {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  role: "ADMIN" | "COACH" | "USER";
  profilePicture: string | null;
  phoneNumber: string | null;
  createdAt: string;
  updatedAt: string;
}
