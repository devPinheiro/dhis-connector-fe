import { useState, useEffect } from 'react';
import { apiClient } from '../lib/apiClient';
import type { DashboardMetrics, ReportingCompleteness, AggregationParams, ApiResponse } from '../types';

interface UseDashboardOptions extends AggregationParams {
  enabled?: boolean;
  refetchInterval?: number;
}

interface UseDashboardResult {
  metrics: DashboardMetrics | null;
  reportingCompleteness: ReportingCompleteness[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useDashboard(options: UseDashboardOptions = {}): UseDashboardResult {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [reportingCompleteness, setReportingCompleteness] = useState<ReportingCompleteness[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { enabled = true, refetchInterval, ...filters } = options;

  const fetchDashboardData = async () => {
    if (!enabled) return;

    try {
      setLoading(true);
      setError(null);
      
      const [metricsResponse, reportingResponse] = await Promise.all([
        apiClient.getDashboardMetrics(filters),
        apiClient.getReportingCompleteness(filters),
      ]);
      
      setMetrics(metricsResponse.data);
      setReportingCompleteness(reportingResponse.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch dashboard data');
      setMetrics(null);
      setReportingCompleteness([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [
    enabled,
    filters.state,
    filters.lga,
    filters.ward,
    filters.startDate,
    filters.endDate,
    filters.groupBy,
    filters.metrics,
  ]);

  useEffect(() => {
    if (!refetchInterval || !enabled) return;

    const interval = setInterval(fetchDashboardData, refetchInterval);
    return () => clearInterval(interval);
  }, [refetchInterval, enabled]);

  return {
    metrics,
    reportingCompleteness,
    loading,
    error,
    refetch: fetchDashboardData,
  };
}