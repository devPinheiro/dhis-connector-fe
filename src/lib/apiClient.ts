import type {
  ApiResponse,
  Facility,
  FacilityFilters,
  FacilityStats,
  StockData,
  StockFilters,
  StockTrend,
  CommodityStats,
  Alert,
  AlertFilters,
  AlertStats,
  DashboardMetrics,
  ReportingCompleteness,
  PaginationParams,
  AggregationParams,
  LoginRequest,
  LoginResponse,
  User,
} from '../types';

class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
    this.token = localStorage.getItem('auth_token');
  }

  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP ${response.status}: ${response.statusText}`
      );
    }

    return response.json();
  }

  private buildQuery(params: Record<string, any>): string {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        if (typeof value === 'object') {
          searchParams.append(key, JSON.stringify(value));
        } else {
          searchParams.append(key, value.toString());
        }
      }
    });

    return searchParams.toString();
  }

  // Authentication
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async logout(): Promise<ApiResponse<void>> {
    return this.request('/auth/logout', { method: 'POST' });
  }

  async getCurrentUser(): Promise<ApiResponse<User>> {
    return this.request('/auth/me');
  }

  async refreshToken(): Promise<ApiResponse<{ token: string }>> {
    return this.request('/auth/refresh', { method: 'POST' });
  }

  // Facilities
  async getFacilities(
    filters?: FacilityFilters & PaginationParams
  ): Promise<ApiResponse<Facility[]>> {
    const query = filters ? `?${this.buildQuery(filters)}` : '';
    return this.request(`/facilities${query}`);
  }

  async getFacility(id: string): Promise<ApiResponse<Facility>> {
    return this.request(`/facilities/${id}`);
  }

  async getFacilityStats(filters?: FacilityFilters): Promise<ApiResponse<FacilityStats>> {
    const query = filters ? `?${this.buildQuery(filters)}` : '';
    return this.request(`/facilities/stats${query}`);
  }

  // Stock
  async getStock(
    filters?: StockFilters & PaginationParams
  ): Promise<ApiResponse<StockData[]>> {
    const query = filters ? `?${this.buildQuery(filters)}` : '';
    return this.request(`/stock${query}`);
  }

  async getStockTrends(filters?: StockFilters): Promise<ApiResponse<StockTrend[]>> {
    const query = filters ? `?${this.buildQuery(filters)}` : '';
    return this.request(`/stock/trends${query}`);
  }

  async getCommodityStats(filters?: StockFilters): Promise<ApiResponse<CommodityStats[]>> {
    const query = filters ? `?${this.buildQuery(filters)}` : '';
    return this.request(`/stock/commodity-stats${query}`);
  }

  // Alerts
  async getAlerts(
    filters?: AlertFilters & PaginationParams
  ): Promise<ApiResponse<Alert[]>> {
    const query = filters ? `?${this.buildQuery(filters)}` : '';
    return this.request(`/alerts${query}`);
  }

  async getAlert(id: string): Promise<ApiResponse<Alert>> {
    return this.request(`/alerts/${id}`);
  }

  async getAlertStats(filters?: AlertFilters): Promise<ApiResponse<AlertStats>> {
    const query = filters ? `?${this.buildQuery(filters)}` : '';
    return this.request(`/alerts/stats${query}`);
  }

  async updateAlert(id: string, updates: Partial<Alert>): Promise<ApiResponse<Alert>> {
    return this.request(`/alerts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  // Dashboard
  async getDashboardMetrics(
    filters?: AggregationParams
  ): Promise<ApiResponse<DashboardMetrics>> {
    const query = filters ? `?${this.buildQuery(filters)}` : '';
    return this.request(`/dashboard/metrics${query}`);
  }

  async getReportingCompleteness(
    filters?: AggregationParams
  ): Promise<ApiResponse<ReportingCompleteness[]>> {
    const query = filters ? `?${this.buildQuery(filters)}` : '';
    return this.request(`/dashboard/reporting-completeness${query}`);
  }

  // Geography
  async getStates(): Promise<ApiResponse<{ code: string; name: string }[]>> {
    return this.request('/geography/states');
  }

  async getLGAs(state?: string): Promise<ApiResponse<{ code: string; name: string; state: string }[]>> {
    const query = state ? `?state=${encodeURIComponent(state)}` : '';
    return this.request(`/geography/lgas${query}`);
  }

  // Commodities
  async getCommodities(): Promise<ApiResponse<{ id: string; name: string; code: string; category: string }[]>> {
    return this.request('/commodities');
  }

  async getCommodityCategories(): Promise<ApiResponse<{ name: string; count: number }[]>> {
    return this.request('/commodities/categories');
  }
}

export const apiClient = new ApiClient();