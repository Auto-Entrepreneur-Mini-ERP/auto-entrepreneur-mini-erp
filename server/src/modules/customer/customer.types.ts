import type { ActivityType } from "@prisma/client";

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string; 
}
 export interface customer {
  userId          :string     
  ice             :string     
  city            :string 
  country         :string    
  AutoEntrepreneurId: string
   user: User;
  
  
   
}