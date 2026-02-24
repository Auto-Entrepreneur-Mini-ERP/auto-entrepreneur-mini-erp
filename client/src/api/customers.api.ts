import { api } from "./axios"
import type {Customer, UpdateCustomerInput, CreateCustomerInput} from "../types/customers.types"

const getAllCutomers = async () : Promise<Customer[]> => {
  const customers  = await api.get("/customers");
  return customers.data;
}
const updateCustomer = async (
  id: string,
  data: UpdateCustomerInput,
): Promise<Customer> => {
  const response = await api.patch(`/customers/${id}`, data);
  return response.data;
};


const addCustomer = async (
  
  data: CreateCustomerInput,
): Promise<Customer> => {
  const response = await api.post(`/customers`, data);
  console.log(response.data)
  return response.data;
};

const deleteCustomer = async (
  id: string,
): Promise<Customer> => {
  const response = await api.delete(`/customers/${id}`);
    console.log(response);

  return response.data;
};

export const customerApis = {
  getAllCutomers,
  updateCustomer,
  deleteCustomer,
  addCustomer,
};