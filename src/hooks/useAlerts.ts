import { useState, useEffect } from 'react';
import { apiClient } from '../lib/apiClient';
import type { Alert, AlertFilters, PaginationParams, ApiResponse } from '../types';

interface UseAlertsOptions extends AlertFilters, PaginationParams {
  enabled?: boolean;
  refetchInterval?: number;
}

interface UseAlertsResult {
  alerts: Alert[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  updateAlert: (alertId: string, updates: Partial<Alert>) => Promise<void>;
  meta?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export function useAlerts(options: UseAlertsOptions = {}): UseAlertsResult {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<UseAlertsResult['meta']>();

  const { enabled = true, refetchInterval, ...filters } = options;

  const fetchAlerts = async () => {
    if (!enabled) return;

    try {
      setLoading(true);
      setError(null);
      
      const response: ApiResponse<Alert[]> = await apiClient.getAlerts(filters);
      
      setAlerts(response.data);
      setMeta(response.meta);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch alerts');
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  const updateAlert = async (alertId: string, updates: Partial<Alert>) => {
    try {
      const response = await apiClient.updateAlert(alertId, updates);
      
      // Update local state
      setAlerts(prev => 
        prev.map(alert => 
          alert.id === alertId ? response.data : alert
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update alert');
      throw err;
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, [
    enabled,
    filters.type,
    filters.severity,
    filters.status,
    filters.facilityId,
    filters.state,
    filters.lga,
    filters.sourceSystem,
    filters.dateFrom,
    filters.dateTo,
    filters.assignedTo,
    filters.page,
    filters.limit,
    filters.sortBy,
    filters.sortOrder,
  ]);

  useEffect(() => {
    if (!refetchInterval || !enabled) return;

    const interval = setInterval(fetchAlerts, refetchInterval);
    return () => clearInterval(interval);
  }, [refetchInterval, enabled]);

  return {
    alerts,
    loading,
    error,
    refetch: fetchAlerts,
    updateAlert,
    meta,
  };
}