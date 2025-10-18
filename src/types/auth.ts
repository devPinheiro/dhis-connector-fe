export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'analyst' | 'facility_manager' | 'viewer';
  permissions: string[];
  state?: string;
  lga?: string;
  facilityIds?: string[];
  lastLogin?: string;
  isActive: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresAt: string;
}

export interface RefreshTokenResponse {
  token: string;
  expiresAt: string;
}