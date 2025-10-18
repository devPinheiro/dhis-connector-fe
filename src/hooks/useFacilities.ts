import { useState, useEffect } from 'react';
import { apiClient } from '../lib/apiClient';
import type { Facility, FacilityFilters, PaginationParams, ApiResponse } from '../types';

interface UseFacilitiesOptions extends FacilityFilters, PaginationParams {
  enabled?: boolean;
  refetchInterval?: number;
}

interface UseFacilitiesResult {
  facilities: Facility[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  meta?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export function useFacilities(options: UseFacilitiesOptions = {}): UseFacilitiesResult {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<UseFacilitiesResult['meta']>();

  const { enabled = true, refetchInterval, ...filters } = options;

  const fetchFacilities = async () => {
    if (!enabled) return;

    try {
      setLoading(true);
      setError(null);
      
      const response: ApiResponse<Facility[]> = await apiClient.getFacilities(filters);
      
      setFacilities(response.data);
      if (response.meta) {
        setMeta({
          total: response.meta.total ?? 0,
          page: response.meta.page ?? 1,
          limit: response.meta.limit ?? 10,
          totalPages: response.meta.totalPages ?? 1
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch facilities');
      setFacilities([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, [
    enabled,
    filters.state,
    filters.lga,
    filters.type,
    filters.ownership,
    filters.sourceSystem,
    filters.reportingStatus,
    filters.search,
    filters.page,
    filters.limit,
    filters.sortBy,
    filters.sortOrder,
  ]);

  useEffect(() => {
    if (!refetchInterval || !enabled) return;

    const interval = setInterval(fetchFacilities, refetchInterval);
    return () => clearInterval(interval);
  }, [refetchInterval, enabled]);

  return {
    facilities,
    loading,
    error,
    refetch: fetchFacilities,
    meta,
  };
}