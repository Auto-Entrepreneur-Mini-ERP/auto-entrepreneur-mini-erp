import type { ActivityType } from "../../../generated/prisma/enums.js";

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string; 
}

export interface customer {
  userId: string;
  ice: string;
  city?: string;
  country?: string;
  AutoEntrepreneurId: string;
  isActive?: boolean;
  user: User;
} 