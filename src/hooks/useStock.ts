import { useState, useEffect } from 'react';
import { apiClient } from '../lib/apiClient';
import type { StockData, StockFilters, PaginationParams, ApiResponse } from '../types';

interface UseStockOptions extends StockFilters, PaginationParams {
  enabled?: boolean;
  refetchInterval?: number;
}

interface UseStockResult {
  stock: StockData[];
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

export function useStock(options: UseStockOptions = {}): UseStockResult {
  const [stock, setStock] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<UseStockResult['meta']>();

  const { enabled = true, refetchInterval, ...filters } = options;

  const fetchStock = async () => {
    if (!enabled) return;

    try {
      setLoading(true);
      setError(null);
      
      const response: ApiResponse<StockData[]> = await apiClient.getStock(filters);
      
      setStock(response.data);
      if (response.meta) {
        setMeta({
          total: response.meta.total ?? 0,
          page: response.meta.page ?? 1,
          limit: response.meta.limit ?? 10,
          totalPages: response.meta.totalPages ?? 1
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch stock data');
      setStock([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStock();
  }, [
    enabled,
    filters.facilityId,
    filters.state,
    filters.lga,
    filters.commodityCategory,
    filters.commodityId,
    filters.alertType,
    filters.severity,
    filters.dateFrom,
    filters.dateTo,
    filters.stockStatus,
    filters.page,
    filters.limit,
    filters.sortBy,
    filters.sortOrder,
  ]);

  useEffect(() => {
    if (!refetchInterval || !enabled) return;

    const interval = setInterval(fetchStock, refetchInterval);
    return () => clearInterval(interval);
  }, [refetchInterval, enabled]);

  return {
    stock,
    loading,
    error,
    refetch: fetchStock,
    meta,
  };
}