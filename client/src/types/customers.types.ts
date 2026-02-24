export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  creationDate: string;
  updateDate: string;
}

export interface Customer {
  id: string;
  userId: string;
  ice: string;
  city: string;
  country: string;
  isActive: boolean;
  AutoEntrepreneurId: string;
  creationDate: string;
  updateDate: string;
  user: User;
}
export interface UpdateUserInput {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
}

export interface UpdateCustomerInput {
  ice?: string;
  city?: string;
  country?: string;
  isActive?: boolean;
  user?: UpdateUserInput;
}
export interface CreateUserInput {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
}

export interface CreateCustomerInput {
  ice: string;
  city: string;
  country: string;
  isActive: boolean;
  AutoEntrepreneurId: string;
  user: CreateUserInput;
}

// export interface CustomerFilters {
//   isActive?: boolean;
//   city?: string;
//   country?: string;
//   searchTerm?: string;
// }