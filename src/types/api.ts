export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface GeographicFilter {
  state?: string;
  lga?: string;
  ward?: string;
}

export interface AggregationParams extends GeographicFilter, DateRange {
  groupBy?: 'state' | 'lga' | 'facility' | 'commodity' | 'date';
  metrics?: string[];
}

export interface DashboardMetrics {
  totalFacilities: number;
  commoditiesTracked: number;
  stockouts: number;
  reportingCompleteness: number;
  lastUpdated: string;
}

export interface ReportingCompleteness {
  period: string;
  state: string;
  lga?: string;
  expectedReports: number;
  receivedReports: number;
  completeness: number;
  facilityBreakdown: {
    facilityId: string;
    facilityName: string;
    hasReported: boolean;
    reportDate?: string;
  }[];
}