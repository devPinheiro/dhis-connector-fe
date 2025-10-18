import React, { useState } from 'react';
import { Download, AlertTriangle, Package, TrendingDown, TrendingUp } from 'lucide-react';
import { Layout } from '../components/Layout';
import { FilterPanel } from '../components/FilterPanel';
import { StockChart } from '../components/StockChart';
import { MetricCard } from '../components/MetricCard';
import { formatNumber, getStatusColor } from '../lib/utils';
import type { StockData, StockFilters } from '../types';

// Mock data
const mockStockData: StockData[] = [
  {
    id: '1',
    facilityId: '1',
    facilityName: 'General Hospital Lagos',
    commodityId: 'PAR500',
    commodityName: 'Paracetamol 500mg',
    commodityCode: 'PAR500',
    commodityCategory: 'Essential Medicines',
    stockOnHand: 150,
    reorderLevel: 100,
    maxStock: 500,
    unit: 'tablets',
    batchNumber: 'B2024001',
    expiryDate: '2025-12-31',
    lastUpdated: '2024-01-15T08:30:00Z',
    sourceSystem: 'dhis2',
    reportingPeriod: '2024-01',
  },
  {
    id: '2',
    facilityId: '2',
    facilityName: 'PHC Ikeja',
    commodityId: 'AMX250',
    commodityName: 'Amoxicillin 250mg',
    commodityCode: 'AMX250',
    commodityCategory: 'Antibiotics',
    stockOnHand: 25,
    reorderLevel: 50,
    maxStock: 200,
    unit: 'capsules',
    lastUpdated: '2024-01-14T16:20:00Z',
    sourceSystem: 'openlmis',
    reportingPeriod: '2024-01',
  },
  {
    id: '3',
    facilityId: '1',
    facilityName: 'General Hospital Lagos',
    commodityId: 'ORS001',
    commodityName: 'ORS Sachets',
    commodityCode: 'ORS001',
    commodityCategory: 'Medical Supplies',
    stockOnHand: 0,
    reorderLevel: 200,
    maxStock: 1000,
    unit: 'sachets',
    lastUpdated: '2024-01-15T08:30:00Z',
    sourceSystem: 'dhis2',
    reportingPeriod: '2024-01',
  },
  {
    id: '4',
    facilityId: '4',
    facilityName: 'Faith Medical Centre',
    commodityId: 'VITA001',
    commodityName: 'Vitamin A Capsules',
    commodityCode: 'VITA001',
    commodityCategory: 'Nutritional Supplements',
    stockOnHand: 75,
    reorderLevel: 30,
    maxStock: 150,
    unit: 'capsules',
    lastUpdated: '2024-01-14T16:45:00Z',
    sourceSystem: 'openlmis',
    reportingPeriod: '2024-01',
  },
];

const mockTrendData = [
  { date: '2024-01-01', stockOnHand: 180, reorderLevel: 100 },
  { date: '2024-01-02', stockOnHand: 175, reorderLevel: 100 },
  { date: '2024-01-03', stockOnHand: 165, reorderLevel: 100 },
  { date: '2024-01-04', stockOnHand: 160, reorderLevel: 100 },
  { date: '2024-01-05', stockOnHand: 155, reorderLevel: 100 },
  { date: '2024-01-06', stockOnHand: 150, reorderLevel: 100 },
  { date: '2024-01-07', stockOnHand: 150, reorderLevel: 100 },
];

const filterConfigs = [
  {
    key: 'facilityId',
    label: 'Facility',
    type: 'select' as const,
    options: [
      { label: 'General Hospital Lagos', value: '1' },
      { label: 'PHC Ikeja', value: '2' },
      { label: 'Faith Medical Centre', value: '4' },
    ],
  },
  {
    key: 'commodityCategory',
    label: 'Category',
    type: 'select' as const,
    options: [
      { label: 'Essential Medicines', value: 'Essential Medicines' },
      { label: 'Antibiotics', value: 'Antibiotics' },
      { label: 'Medical Supplies', value: 'Medical Supplies' },
      { label: 'Nutritional Supplements', value: 'Nutritional Supplements' },
    ],
  },
  {
    key: 'stockStatus',
    label: 'Stock Status',
    type: 'select' as const,
    options: [
      { label: 'In Stock', value: 'in_stock' },
      { label: 'Low Stock', value: 'low_stock' },
      { label: 'Stockout', value: 'stockout' },
      { label: 'Overstock', value: 'overstock' },
    ],
  },
  {
    key: 'sourceSystem',
    label: 'Source System',
    type: 'select' as const,
    options: [
      { label: 'DHIS2', value: 'dhis2' },
      { label: 'OpenLMIS', value: 'openlmis' },
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

export function StockPage() {
  const [filters, setFilters] = useState<StockFilters>({});
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

  const getStockStatus = (item: StockData) => {
    if (item.stockOnHand === 0) return 'stockout';
    if (item.stockOnHand < item.reorderLevel) return 'low_stock';
    if (item.stockOnHand > item.maxStock * 0.9) return 'overstock';
    return 'in_stock';
  };

  // Filter stock data
  const filteredStock = mockStockData.filter(item => {
    if (filters.facilityId && item.facilityId !== filters.facilityId) return false;
    if (filters.commodityCategory && item.commodityCategory !== filters.commodityCategory) return false;
    if (filters.sourceSystem && item.sourceSystem !== filters.sourceSystem) return false;
    
    if (filters.stockStatus) {
      const status = getStockStatus(item);
      if (status !== filters.stockStatus) return false;
    }
    
    return true;
  });

  // Calculate metrics
  const totalItems = filteredStock.length;
  const stockouts = filteredStock.filter(item => getStockStatus(item) === 'stockout').length;
  const lowStock = filteredStock.filter(item => getStockStatus(item) === 'low_stock').length;
  const inStock = filteredStock.filter(item => getStockStatus(item) === 'in_stock').length;

  return (
    <Layout currentPath="/stock">
      <div className="space-y-6">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Stock Monitoring
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Monitor commodity stock levels and identify supply chain issues
            </p>
          </div>
          <div className="mt-4 flex space-x-3 md:mt-0 md:ml-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <Download className="h-4 w-4 mr-2" />
              Export Stock Report
            </button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Commodities"
            value={totalItems}
            icon={Package}
            format="number"
            description="Tracked across all facilities"
          />
          <MetricCard
            title="In Stock"
            value={inStock}
            icon={TrendingUp}
            format="number"
            trend="up"
            description="Above reorder level"
          />
          <MetricCard
            title="Low Stock Alerts"
            value={lowStock}
            icon={AlertTriangle}
            format="number"
            trend="neutral"
            description="Below reorder level"
          />
          <MetricCard
            title="Stockouts"
            value={stockouts}
            icon={TrendingDown}
            format="number"
            trend="down"
            description="Zero stock reported"
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

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StockChart
            data={mockTrendData}
            type="line"
            title="Stock Trend - Paracetamol 500mg"
            height={400}
          />
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Stock Status Distribution
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">In Stock</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{inStock} ({Math.round((inStock / totalItems) * 100)}%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Low Stock</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{lowStock} ({Math.round((lowStock / totalItems) * 100)}%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Stockouts</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{stockouts} ({Math.round((stockouts / totalItems) * 100)}%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Current Stock Levels
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Commodity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Facility
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Reorder Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Updated
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredStock.map((item) => {
                    const status = getStockStatus(item);
                    return (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {item.commodityName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.commodityCode} • {item.commodityCategory}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.facilityName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {formatNumber(item.stockOnHand)} {item.unit}
                          </div>
                          <div className="text-xs text-gray-500">
                            Max: {formatNumber(item.maxStock)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatNumber(item.reorderLevel)} {item.unit}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                            {status.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(item.lastUpdated).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredStock.length === 0 && (
                <div className="text-center py-12">
                  <Package className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No stock data found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}