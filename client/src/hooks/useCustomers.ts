import { useEffect, useState , useCallback} from "react";
import { customerApis } from "../api/customers.api";
import type { Customer, UpdateCustomerInput , CreateCustomerInput} from "../types/customers.types";

export const emptyCustomer: Customer = {
  id: "",
  userId: "",
  ice: "",
  city: "",
  country: "",
  isActive: false,
  AutoEntrepreneurId: "",
  creationDate: "",
  updateDate: "",
  user: {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    creationDate: "",
    updateDate: "",
  },
};

export function useGetAllCustomers() {
  const [allCustomers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = useCallback(() => {
    customerApis
      .getAllCutomers()
      .then(setCustomers)
      .finally(() => setLoading(false));
  }, []);

  const refetch = useCallback(() => {
    setLoading(true);
    fetchCustomers();
  }, [fetchCustomers]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  return { allCustomers, loading, refetch };
}


export function useUpdateCustomer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateCustomer = async (id: string, data: UpdateCustomerInput) => {
    setLoading(true);
    setError(null);

    try {
      const updatedCustomer = await customerApis.updateCustomer(id, data);
      return updatedCustomer;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateCustomer, loading, error };
}


export function useCreateCustomer() {
  const [error, setError] = useState<Error | null>(null);

  const createtCustomer = async ( data: CreateCustomerInput) => {
    setError(null);

    try {
      const customer = await customerApis.addCustomer( data);
      return customer;
    } catch (err) {
      setError(err as Error);
      throw err;
    }  
  };

  return { createtCustomer, error };
}
 
export function useDeleteCustomer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteCustomer = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const deletedCustomer = await customerApis.deleteCustomer(id);
      return deletedCustomer;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteCustomer, loading, error }
}