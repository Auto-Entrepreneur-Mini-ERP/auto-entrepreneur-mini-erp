import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import type { Contribution, CurrentContribution } from "../types/contribution.types";
import { contributionApi } from "../api/contribution.api";
import type { GetContributionsParams } from "../api/contribution.api";


interface UseContributionsReturn {
  contributions: Contribution[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useContributions({
  year,
  status,
}: GetContributionsParams = {}): UseContributionsReturn {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await contributionApi.getAllContributions({
        year,
        status,
      });

      setContributions(data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "Erreur lors du chargement des cotisations.",
        );
      } else {
        setError("Une erreur inattendue est survenue.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [year, status]);

  useEffect(() => {
    load();
  }, [load]);

  return { contributions, isLoading, error, refetch: load };
}

interface UseContributionReturn {
  contribution: Contribution | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useContribution(contributionId: string | null): UseContributionReturn {
  const [contribution, setContribution] = useState<Contribution | null>(null);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!contributionId) {
      setIsLoading(false); 
      setContribution(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await contributionApi.getContributionById(contributionId);
      setContribution(data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "Erreur lors du chargement de la cotisation.",
        );
      } else {
        setError("Une erreur inattendue est survenue.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [contributionId]);

  useEffect(() => {
    load();
  }, [load]);

  return { contribution, isLoading, error, refetch: load };
}

// ─────────────────────────────────────────────────────────────
// useCurrentContribution
// ─────────────────────────────────────────────────────────────

interface UseCurrentContributionReturn {
  current: CurrentContribution | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useCurrentContribution(): UseCurrentContributionReturn {
  const [current, setCurrent] = useState<CurrentContribution | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await contributionApi.getCurrentContribution();
      setCurrent(data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "Erreur lors du chargement de la cotisation en cours.",
        );
      } else {
        setError("Une erreur inattendue est survenue.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { current, isLoading, error, refetch: load };
}