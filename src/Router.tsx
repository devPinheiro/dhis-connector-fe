import React from 'react';
import { useAuth } from './context/AuthContext';
import { LandingPage } from './routes/landing';
import { ScalePage } from './routes/scale';
import { LoginPage } from './routes/login';
import { DashboardPage } from './routes/dashboard';
import { FacilitiesPage } from './routes/facilities';
import { StockPage } from './routes/stock';
import { AlertsPage } from './routes/alerts';

interface RouterProps {
  currentPath: string;
}

export function Router({ currentPath }: RouterProps) {
  const { isAuthenticated, isLoading } = useAuth();

  // Show landing page for root path when not authenticated
  if (currentPath === '/' && !isAuthenticated && !isLoading) {
    return <LandingPage />;
  }

  // Show Scale.ai clone for /scale path
  if (currentPath === '/scale') {
    return <ScalePage />;
  }

  // Show login page for /login path
  if (currentPath === '/login') {
    return <LoginPage />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // Authenticated routes
  switch (currentPath) {
    case '/':
    case '/dashboard':
      return <DashboardPage />;
    case '/facilities':
      return <FacilitiesPage />;
    case '/stock':
      return <StockPage />;
    case '/alerts':
      return <AlertsPage />;
    default:
      return <DashboardPage />;
  }
}