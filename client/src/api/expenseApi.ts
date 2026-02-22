// client/src/api/expenseApi.ts

import { api } from './axios';
import type {
  CreateExpensePayload,
  UpdateExpensePayload,
  ExpenseFilters,
} from '../types/expense.types';

const getAll = async (filters?: ExpenseFilters) => {
  const params = new URLSearchParams();
  if (filters?.category) params.set('category', filters.category);
  if (filters?.startDate) params.set('startDate', filters.startDate);
  if (filters?.endDate) params.set('endDate', filters.endDate);
  if (filters?.isDeductible !== undefined && filters.isDeductible !== '')
    params.set('isDeductible', String(filters.isDeductible));
  if (filters?.page) params.set('page', String(filters.page));
  if (filters?.limit) params.set('limit', String(filters.limit));

  const res = await api.get(`/expenses?${params.toString()}`);
  return res.data;
};

const getStats = async (startDate?: string, endDate?: string) => {
  const params = new URLSearchParams();
  if (startDate) params.set('startDate', startDate);
  if (endDate) params.set('endDate', endDate);

  const res = await api.get(`/expenses/stats?${params.toString()}`);
  return res.data;
};

const getById = async (id: string) => {
  const res = await api.get(`/expenses/${id}`);
  return res.data;
};

const create = async (payload: CreateExpensePayload) => {
  const formData = new FormData();
  formData.append('category', payload.category);
  formData.append('amount', String(payload.amount));
  formData.append('date', payload.date);
  formData.append('paymentMethod', payload.paymentMethod);
  if (payload.description) formData.append('description', payload.description);
  if (payload.supplier) formData.append('supplier', payload.supplier);
  if (payload.isDeductible !== undefined)
    formData.append('isDeductible', String(payload.isDeductible));
  if (payload.receipt) formData.append('receipt', payload.receipt);

  const res = await api.post('/expenses', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

const update = async (id: string, payload: UpdateExpensePayload) => {
  const formData = new FormData();
  if (payload.category) formData.append('category', payload.category);
  if (payload.amount !== undefined) formData.append('amount', String(payload.amount));
  if (payload.date) formData.append('date', payload.date);
  if (payload.paymentMethod) formData.append('paymentMethod', payload.paymentMethod);
  if (payload.description !== undefined) formData.append('description', payload.description);
  if (payload.supplier !== undefined) formData.append('supplier', payload.supplier);
  if (payload.isDeductible !== undefined)
    formData.append('isDeductible', String(payload.isDeductible));
  if (payload.receipt) formData.append('receipt', payload.receipt);

  const res = await api.patch(`/expenses/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

const remove = async (id: string) => {
  const res = await api.delete(`/expenses/${id}`);
  return res.data;
};

const exportExcel = async (filters?: ExpenseFilters) => {
  const params = new URLSearchParams();
  if (filters?.category) params.set('category', filters.category);
  if (filters?.startDate) params.set('startDate', filters.startDate);
  if (filters?.endDate) params.set('endDate', filters.endDate);

  const res = await api.get(`/expenses/export-excel?${params.toString()}`, {
    responseType: 'blob',
  });
  return res.data;
};

export const expenseApi = {
  getAll,
  getStats,
  getById,
  create,
  update,
  remove,
  exportExcel,
};