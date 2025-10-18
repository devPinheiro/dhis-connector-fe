import type { 
  FacilityFilters, 
  StockFilters, 
  AlertFilters, 
  PaginationParams,
  AggregationParams 
} from '../types';

export const queryKeys = {
  // Auth
  auth: ['auth'] as const,
  currentUser: () => [...queryKeys.auth, 'current-user'] as const,

  // Facilities
  facilities: ['facilities'] as const,
  facilitiesList: (filters?: FacilityFilters & PaginationParams) => 
    [...queryKeys.facilities, 'list', filters] as const,
  facility: (id: string) => [...queryKeys.facilities, 'detail', id] as const,
  facilityStats: (filters?: FacilityFilters) => 
    [...queryKeys.facilities, 'stats', filters] as const,

  // Stock
  stock: ['stock'] as const,
  stockList: (filters?: StockFilters & PaginationParams) => 
    [...queryKeys.stock, 'list', filters] as const,
  stockTrends: (filters?: StockFilters) => 
    [...queryKeys.stock, 'trends', filters] as const,
  commodityStats: (filters?: StockFilters) => 
    [...queryKeys.stock, 'commodity-stats', filters] as const,

  // Alerts
  alerts: ['alerts'] as const,
  alertsList: (filters?: AlertFilters & PaginationParams) => 
    [...queryKeys.alerts, 'list', filters] as const,
  alert: (id: string) => [...queryKeys.alerts, 'detail', id] as const,
  alertStats: (filters?: AlertFilters) => 
    [...queryKeys.alerts, 'stats', filters] as const,

  // Dashboard
  dashboard: ['dashboard'] as const,
  dashboardMetrics: (filters?: AggregationParams) => 
    [...queryKeys.dashboard, 'metrics', filters] as const,
  reportingCompleteness: (filters?: AggregationParams) => 
    [...queryKeys.dashboard, 'reporting-completeness', filters] as const,

  // Geography
  geography: ['geography'] as const,
  states: () => [...queryKeys.geography, 'states'] as const,
  lgas: (state?: string) => [...queryKeys.geography, 'lgas', state] as const,
  wards: (state?: string, lga?: string) => 
    [...queryKeys.geography, 'wards', state, lga] as const,

  // Commodities
  commodities: ['commodities'] as const,
  commoditiesList: () => [...queryKeys.commodities, 'list'] as const,
  commodityCategories: () => [...queryKeys.commodities, 'categories'] as const,
} as const;