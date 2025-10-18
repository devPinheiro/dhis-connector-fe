import React, { useState } from 'react';
import { 
  Building2, 
  Package, 
  AlertTriangle, 
  TrendingUp,
  BarChart3,
  Calendar
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { MetricCard } from '../components/MetricCard';
import { FilterPanel } from '../components/FilterPanel';
import { StockChart } from '../components/StockChart';

// Mock data - replace with actual API calls
const mockMetrics = {
  totalFacilities: 1247,
  commoditiesTracked: 156,
  stockouts: 23,
  reportingCompleteness: 94.2,
};

const mockChartData = [
  { date: '2024-01-01', stockOnHand: 150, reorderLevel: 50 },
  { date: '2024-01-02', stockOnHand: 145, reorderLevel: 50 },
  { date: '2024-01-03', stockOnHand: 140, reorderLevel: 50 },
  { date: '2024-01-04', stockOnHand: 135, reorderLevel: 50 },
  { date: '2024-01-05', stockOnHand: 130, reorderLevel: 50 },
  { date: '2024-01-06', stockOnHand: 125, reorderLevel: 50 },
  { date: '2024-01-07', stockOnHand: 120, reorderLevel: 50 },
];

const mockReportingData = [
  { date: '2024-01-01', reported: 85, expected: 100 },
  { date: '2024-01-02', reported: 92, expected: 100 },
  { date: '2024-01-03', reported: 88, expected: 100 },
  { date: '2024-01-04', reported: 95, expected: 100 },
  { date: '2024-01-05', reported: 90, expected: 100 },
  { date: '2024-01-06', reported: 94, expected: 100 },
  { date: '2024-01-07', reported: 96, expected: 100 },
];

const filterConfigs = [
  {
    key: 'state',
    label: 'State',
    type: 'select' as const,
    options: [
      { label: 'Lagos', value: 'lagos' },
      { label: 'Kano', value: 'kano' },
      { label: 'Rivers', value: 'rivers' },
      { label: 'Kaduna', value: 'kaduna' },
    ],
    placeholder: 'All States',
  },
  {
    key: 'lga',
    label: 'LGA',
    type: 'select' as const,
    options: [
      { label: 'Ikeja', value: 'ikeja' },
      { label: 'Victoria Island', value: 'vi' },
      { label: 'Surulere', value: 'surulere' },
    ],
    placeholder: 'All LGAs',
  },
  {
    key: 'period',
    label: 'Period',
    type: 'select' as const,
    options: [
      { label: 'Last 7 days', value: '7d' },
      { label: 'Last 30 days', value: '30d' },
      { label: 'Last 90 days', value: '90d' },
      { label: 'Last year', value: '1y' },
    ],
    placeholder: 'Last 30 days',
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

export function DashboardPage() {
  const [filters, setFilters] = useState<Record<string, any>>({});
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

  return (
    <Layout currentPath="/">
      <div className="space-y-6">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Health Data Dashboard
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Overview of facility reporting and commodity stock levels
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <Calendar className="h-4 w-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Filters */}
        <FilterPanel
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          filterConfigs={filterConfigs}
          loading={loading}
        />

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Facilities"
            value={mockMetrics.totalFacilities}
            previousValue={1210}
            icon={Building2}
            format="number"
            description="Healthcare facilities reporting"
          />
          <MetricCard
            title="Commodities Tracked"
            value={mockMetrics.commoditiesTracked}
            previousValue={148}
            icon={Package}
            format="number"
            description="Essential medicines & supplies"
          />
          <MetricCard
            title="Active Stockouts"
            value={mockMetrics.stockouts}
            previousValue={31}
            icon={AlertTriangle}
            format="number"
            trend="down"
            description="Facilities with zero stock"
          />
          <MetricCard
            title="Reporting Completeness"
            value={mockMetrics.reportingCompleteness}
            previousValue={91.8}
            icon={TrendingUp}
            format="percentage"
            description="This reporting period"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StockChart
            data={mockChartData}
            type="line"
            title="Stock Levels Trend"
            height={400}
          />
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Reporting Completeness by Day
            </h3>
            <StockChart
              data={mockReportingData.map(item => ({
                date: item.date,
                stockOnHand: item.reported,
                reorderLevel: item.expected,
              }))}
              type="bar"
              height={350}
              showReorderLine={false}
            />
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Alerts
              </h3>
              <a
                href="/alerts"
                className="text-sm font-medium text-primary-600 hover:text-primary-500"
              >
                View all
              </a>
            </div>
            
            <div className="space-y-3">
              {[
                {
                  id: 1,
                  type: 'stockout',
                  facility: 'General Hospital Lagos',
                  commodity: 'Paracetamol 500mg',
                  time: '2 hours ago',
                  severity: 'high',
                },
                {
                  id: 2,
                  type: 'low_stock',
                  facility: 'PHC Ikeja',
                  commodity: 'Amoxicillin 250mg',
                  time: '4 hours ago',
                  severity: 'medium',
                },
                {
                  id: 3,
                  type: 'late_reporting',
                  facility: 'Specialist Hospital Kano',
                  commodity: null,
                  time: '1 day ago',
                  severity: 'low',
                },
              ].map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 w-2 h-2 rounded-full mr-3 ${
                      alert.severity === 'high' 
                        ? 'bg-red-500' 
                        : alert.severity === 'medium' 
                        ? 'bg-yellow-500' 
                        : 'bg-blue-500'
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {alert.facility}
                      </p>
                      <p className="text-xs text-gray-500">
                        {alert.commodity ? (
                          `${alert.type.replace('_', ' ')} - ${alert.commodity}`
                        ) : (
                          alert.type.replace('_', ' ')
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{alert.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}