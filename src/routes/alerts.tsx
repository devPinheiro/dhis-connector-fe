import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { Layout } from '../components/Layout';
import { FilterPanel } from '../components/FilterPanel';
import { AlertList } from '../components/AlertList';
import { MetricCard } from '../components/MetricCard';
import type { Alert, AlertFilters } from '../types';

// Mock data
const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'stockout',
    title: 'Complete Stockout - ORS Sachets',
    message: 'ORS Sachets have reached zero stock level at General Hospital Lagos. Immediate restocking required.',
    severity: 'critical',
    facilityId: '1',
    facilityName: 'General Hospital Lagos',
    commodityId: 'ORS001',
    commodityName: 'ORS Sachets',
    state: 'Lagos',
    lga: 'Lagos Island',
    sourceSystem: 'dhis2',
    status: 'new',
    evidence: {
      reportId: 'RPT-2024-001',
      timestamp: '2024-01-15T08:30:00Z',
      sourceUrl: 'https://dhis2.example.com/reports/RPT-2024-001',
    },
    createdAt: '2024-01-15T08:30:00Z',
    updatedAt: '2024-01-15T08:30:00Z',
  },
  {
    id: '2',
    type: 'low_stock',
    title: 'Low Stock Alert - Amoxicillin 250mg',
    message: 'Amoxicillin 250mg stock has fallen below reorder level at PHC Ikeja.',
    severity: 'warning',
    facilityId: '2',
    facilityName: 'PHC Ikeja',
    commodityId: 'AMX250',
    commodityName: 'Amoxicillin 250mg',
    state: 'Lagos',
    lga: 'Ikeja',
    sourceSystem: 'openlmis',
    status: 'acknowledged',
    acknowledgedAt: '2024-01-14T10:00:00Z',
    acknowledgedBy: 'Dr. Johnson',
    evidence: {
      reportId: 'OLMIS-2024-045',
      timestamp: '2024-01-14T16:20:00Z',
    },
    createdAt: '2024-01-14T16:20:00Z',
    updatedAt: '2024-01-14T16:20:00Z',
  },
  {
    id: '3',
    type: 'late_reporting',
    title: 'Late Reporting - Specialist Hospital Kano',
    message: 'Specialist Hospital Kano has not submitted monthly stock report. Report was due 3 days ago.',
    severity: 'warning',
    facilityId: '3',
    facilityName: 'Specialist Hospital Kano',
    state: 'Kano',
    lga: 'Kano Municipal',
    sourceSystem: 'dhis2',
    status: 'in_progress',
    assignedTo: 'Regional Coordinator',
    evidence: {
      timestamp: '2024-01-12T00:00:00Z',
    },
    createdAt: '2024-01-12T00:00:00Z',
    updatedAt: '2024-01-13T09:15:00Z',
  },
  {
    id: '4',
    type: 'data_quality',
    title: 'Data Quality Issue - Invalid Stock Values',
    message: 'Negative stock values reported for multiple commodities at Faith Medical Centre.',
    severity: 'error',
    facilityId: '4',
    facilityName: 'Faith Medical Centre',
    state: 'Rivers',
    lga: 'Port Harcourt',
    sourceSystem: 'openlmis',
    status: 'resolved',
    resolvedAt: '2024-01-10T14:30:00Z',
    resolvedBy: 'Data Manager',
    evidence: {
      reportId: 'DQ-2024-003',
      timestamp: '2024-01-09T11:45:00Z',
    },
    createdAt: '2024-01-09T11:45:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
  },
];

const filterConfigs = [
  {
    key: 'type',
    label: 'Alert Type',
    type: 'select' as const,
    options: [
      { label: 'Stockout', value: 'stockout' },
      { label: 'Low Stock', value: 'low_stock' },
      { label: 'Late Reporting', value: 'late_reporting' },
      { label: 'Data Quality', value: 'data_quality' },
      { label: 'System Error', value: 'system_error' },
    ],
  },
  {
    key: 'severity',
    label: 'Severity',
    type: 'select' as const,
    options: [
      { label: 'Critical', value: 'critical' },
      { label: 'Error', value: 'error' },
      { label: 'Warning', value: 'warning' },
      { label: 'Info', value: 'info' },
    ],
  },
  {
    key: 'status',
    label: 'Status',
    type: 'select' as const,
    options: [
      { label: 'New', value: 'new' },
      { label: 'Acknowledged', value: 'acknowledged' },
      { label: 'In Progress', value: 'in_progress' },
      { label: 'Resolved', value: 'resolved' },
      { label: 'Dismissed', value: 'dismissed' },
    ],
  },
  {
    key: 'state',
    label: 'State',
    type: 'select' as const,
    options: [
      { label: 'Lagos', value: 'Lagos' },
      { label: 'Kano', value: 'Kano' },
      { label: 'Rivers', value: 'Rivers' },
    ],
  },
  {
    key: 'sourceSystem',
    label: 'Source System',
    type: 'select' as const,
    options: [
      { label: 'DHIS2', value: 'dhis2' },
      { label: 'OpenLMIS', value: 'openlmis' },
      { label: 'System', value: 'system' },
    ],
  },
  {
    key: 'dateFrom',
    label: 'From Date',
    type: 'date' as const,
  },
  {
    key: 'dateTo',
    label: 'To Date',
    type: 'date' as const,
  },
];

export function AlertsPage() {
  const [filters, setFilters] = useState<AlertFilters>({});
  const [alerts, setAlerts] = useState(mockAlerts);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleUpdateAlert = (alertId: string, updates: Partial<Alert>) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId 
          ? { ...alert, ...updates, updatedAt: new Date().toISOString() }
          : alert
      )
    );
  };

  // Filter alerts
  const filteredAlerts = alerts.filter(alert => {
    if (filters.type && alert.type !== filters.type) return false;
    if (filters.severity && alert.severity !== filters.severity) return false;
    if (filters.status && alert.status !== filters.status) return false;
    if (filters.state && alert.state !== filters.state) return false;
    if (filters.sourceSystem && alert.sourceSystem !== filters.sourceSystem) return false;
    
    if (filters.dateFrom) {
      const alertDate = new Date(alert.createdAt);
      const fromDate = new Date(filters.dateFrom);
      if (alertDate < fromDate) return false;
    }
    
    if (filters.dateTo) {
      const alertDate = new Date(alert.createdAt);
      const toDate = new Date(filters.dateTo);
      if (alertDate > toDate) return false;
    }
    
    return true;
  });

  // Calculate metrics
  const totalAlerts = filteredAlerts.length;
  const newAlerts = filteredAlerts.filter(a => a.status === 'new').length;
  const unresolvedAlerts = filteredAlerts.filter(a => !['resolved', 'dismissed'].includes(a.status)).length;
  const criticalAlerts = filteredAlerts.filter(a => a.severity === 'critical').length;

  return (
    <Layout currentPath="/alerts">
      <div className="space-y-6">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Alerts & Notifications
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Monitor and manage system alerts and notifications
            </p>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Alerts"
            value={totalAlerts}
            icon={AlertTriangle}
            format="number"
            description="All alerts in current view"
          />
          <MetricCard
            title="New Alerts"
            value={newAlerts}
            icon={TrendingUp}
            format="number"
            trend={newAlerts > 0 ? 'up' : 'neutral'}
            description="Require attention"
          />
          <MetricCard
            title="Unresolved"
            value={unresolvedAlerts}
            icon={Clock}
            format="number"
            description="Active alerts"
          />
          <MetricCard
            title="Critical"
            value={criticalAlerts}
            icon={AlertTriangle}
            format="number"
            trend={criticalAlerts > 0 ? 'up' : 'neutral'}
            description="High priority alerts"
          />
        </div>

        {/* Filters */}
        <FilterPanel
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          filterConfigs={filterConfigs}
          loading={loading}
        />

        {/* Alert Tabs */}
        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button className="border-primary-500 text-primary-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                All Alerts ({totalAlerts})
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                New ({newAlerts})
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                In Progress ({filteredAlerts.filter(a => a.status === 'in_progress').length})
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                Resolved ({filteredAlerts.filter(a => a.status === 'resolved').length})
              </button>
            </nav>
          </div>
        </div>

        {/* Alert List */}
        <AlertList
          alerts={filteredAlerts}
          loading={loading}
          onUpdateAlert={handleUpdateAlert}
        />

        {/* Pagination */}
        {filteredAlerts.length > 0 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{' '}
                  <span className="font-medium">{filteredAlerts.length}</span> of{' '}
                  <span className="font-medium">{filteredAlerts.length}</span> results
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}