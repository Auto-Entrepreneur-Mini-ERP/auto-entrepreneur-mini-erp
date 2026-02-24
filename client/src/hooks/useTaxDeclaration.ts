// import { useEffect, useState } from "react";
// import { taxDeclarationApi } from "../api/taxDec.api";
// import {
//   DeclarationStatus,
//   DeclarationPeriod,
// } from "../types/taxDeclaration.types";
// import type {
//   TaxDeclaration,
//   createTaxDeclarationInput,
//   currentTaxDeclaaration,

// } from "../types/taxDeclaration.types";
// export const emptyTaxDeclaration: TaxDeclaration = {
//   id: "",
//   period: DeclarationPeriod.QUARTERLY,
//   year: 0,
//   month: null,
//   totalRevenue: 0,
//   taxRate: 0,
//   taxAmount: 0,
//   status: DeclarationStatus.DRAFT,
//   dueDate: new Date(),
//   paymentDate: null,
//   pdfUrl: null,
//   AutoEntrepreneurId: "",
//   creationDate: new Date(),
// };
// export function useGetAllTaxDeclaration() {
//   const [allTaxDeclaration, setAllTaxDeclaration] = useState<TaxDeclaration[]>(
//     [],
//   );
//   const [loading, setLoading] = useState(true);

//   const fetchDeclarations = async () => {
//     setLoading(true);
//     const data = await taxDeclarationApi.getAllTaxDeclaration();
//     setAllTaxDeclaration(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//        fetchDeclarations();
//   }, []);

//   return {
//     allTaxDeclaration,
//     loading,
//     refetch: fetchDeclarations,
//   };
// }
// export function useGetCurrentDeclarationData() {
//   const [currentTaxDeclaration, setCurrentTaxDeclaration] =
//     useState<currentTaxDeclaaration>();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCurrentDeclaration = async () => {
//       try {
//         const data = await taxDeclarationApi.getCurrentDeclarationData();
//         setCurrentTaxDeclaration(data);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCurrentDeclaration();
//   }, []);
//   return { currentTaxDeclaration, loading };
// }

// export function useDeleteDeclarationData() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);

//   const deleteTaxDeclaration = async (taxId: string) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const deletedCustomer =
//         await taxDeclarationApi.deleteTaxDeclaration(taxId);
//       return deletedCustomer;
//     } catch (err) {
//       setError(err as Error);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { deleteTaxDeclaration, loading, error };
// }

// export function useCreateDeclarationData() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);

//   const createTaxDeclaration = async (taxDec: currentTaxDeclaaration) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const now = new Date();

//       const data: createTaxDeclarationInput = {
//         period: taxDec.periode,
//         year: now.getFullYear(),
//         month: now.getMonth() + 1,
//       };

//       const createdTaxDeclaration =
//         await taxDeclarationApi.createTaxDeclaration(data);

//       return createdTaxDeclaration;
//     } catch (err) {
//       setError(err as Error);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { createTaxDeclaration, loading, error };
// }

// export function useUpdateDeclarationData() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);

//   const updateTaxDeclaration = async (
//     idToUpdate: string,
//     status: DeclarationStatus,
//   ) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const updatedTaxDeclaration =
//         await taxDeclarationApi.updateteTaxDeclaration(idToUpdate, status);

//       return updatedTaxDeclaration;
//     } catch (err) {
//       setError(err as Error);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { updateTaxDeclaration, loading, error };
// }

import { useEffect, useState, useCallback } from "react";
import { taxDeclarationApi } from "../api/taxDec.api";
import {
  DeclarationStatus,
  DeclarationPeriod,
} from "../types/taxDeclaration.types";
import type {
  TaxDeclaration,
  createTaxDeclarationInput,
  currentTaxDeclaaration,
} from "../types/taxDeclaration.types";

export const emptyTaxDeclaration: TaxDeclaration = {
  id: "",
  period: DeclarationPeriod.QUARTERLY,
  year: 0,
  month: null,
  totalRevenue: 0,
  taxRate: 0,
  taxAmount: 0,
  status: DeclarationStatus.DRAFT,
  dueDate: new Date(),
  paymentDate: null,
  pdfUrl: null,
  AutoEntrepreneurId: "",
  creationDate: new Date(),
};

// ------------------ GET ALL DECLARATIONS ------------------
export function useGetAllTaxDeclaration() {
  const [allTaxDeclaration, setAllTaxDeclaration] = useState<TaxDeclaration[]>(
    [],
  );
  const [loading, setLoading] = useState(true);

  const fetchDeclarations = useCallback(async () => {
    setLoading(true);
    try {
      const data = await taxDeclarationApi.getAllTaxDeclaration();
      setAllTaxDeclaration(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDeclarations();
  }, [fetchDeclarations]);

  return {
    allTaxDeclaration,
    loading,
    refetch: fetchDeclarations,
    setAllTaxDeclaration,
  };
}

 export function useGetCurrentDeclarationData() {
  const [currentTaxDeclaration, setCurrentTaxDeclaration] =
    useState<currentTaxDeclaaration | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCurrentDeclaration = useCallback(async () => {
    setLoading(true);
    try {
      const data = await taxDeclarationApi.getCurrentDeclarationData();
      setCurrentTaxDeclaration(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCurrentDeclaration();
  }, [fetchCurrentDeclaration]);

  return {
    currentTaxDeclaration,
    loading,
    fetchCurrentDeclaration: fetchCurrentDeclaration,
    setCurrentTaxDeclaration,
  };
}

 export function useDeleteDeclarationData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteTaxDeclaration = async (taxId: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await taxDeclarationApi.deleteTaxDeclaration(taxId);
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteTaxDeclaration, loading, error };
}

 export function useCreateDeclarationData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createTaxDeclaration = async (taxDec: currentTaxDeclaaration) => {
    setLoading(true);
    setError(null);
    try {
      const now = new Date();
      const data: createTaxDeclarationInput = {
        period: taxDec.periode,
        year: now.getFullYear(),
        month: now.getMonth() + 1,
      };
      return await taxDeclarationApi.createTaxDeclaration(data);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createTaxDeclaration, loading, error };
}

 export function useUpdateDeclarationData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateTaxDeclaration = async (
    idToUpdate: string,
    status: DeclarationStatus,
  ) => {
    setLoading(true);
    setError(null);
    try {
      return await taxDeclarationApi.updateteTaxDeclaration(idToUpdate, status);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateTaxDeclaration, loading, error };
}