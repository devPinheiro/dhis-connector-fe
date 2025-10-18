import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { apiClient } from '../lib/apiClient';
import type { User, AuthState, LoginRequest } from '../types';

interface AuthContextValue extends AuthState {
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'REFRESH_SUCCESS'; payload: { user: User } }
  | { type: 'SET_LOADING'; payload: boolean };

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true };
    
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    
    case 'LOGIN_FAILURE':
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    
    case 'LOGOUT':
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    
    case 'REFRESH_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
      };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    default:
      return state;
  }
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('auth_token'),
  isAuthenticated: false,
  isLoading: true,
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (credentials: LoginRequest) => {
    try {
      dispatch({ type: 'LOGIN_START' });
      
      const response = await apiClient.login(credentials);
      const { user, token } = response.data;
      
      apiClient.setToken(token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
    } catch (error) {
      apiClient.setToken(null);
      dispatch({ type: 'LOGIN_FAILURE' });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiClient.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      apiClient.setToken(null);
      dispatch({ type: 'LOGOUT' });
    }
  };

  const refreshAuth = async () => {
    try {
      if (!state.token) {
        dispatch({ type: 'SET_LOADING', payload: false });
        return;
      }

      const response = await apiClient.getCurrentUser();
      dispatch({ type: 'REFRESH_SUCCESS', payload: { user: response.data } });
    } catch (error) {
      console.error('Auth refresh error:', error);
      apiClient.setToken(null);
      dispatch({ type: 'LOGOUT' });
    }
  };

  useEffect(() => {
    refreshAuth();
  }, []);

  const contextValue: AuthContextValue = {
    ...state,
    login,
    logout,
    refreshAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}