import React, { useState } from 'react';
import { Download, Plus, Search } from 'lucide-react';
import { Layout } from '../components/Layout';
import { FilterPanel } from '../components/FilterPanel';
import { FacilityTable } from '../components/FacilityTable';
import { FacilityModal } from '../components/FacilityModal';
import type { Facility, FacilityFilters } from '../types';

// Mock data
const mockFacilities: Facility[] = [
  {
    id: '1',
    name: 'General Hospital Lagos',
    code: 'GHL001',
    state: 'Lagos',
    lga: 'Lagos Island',
    ward: 'Lagos Island I',
    type: 'secondary',
    ownership: 'public',
    sourceSystem: 'dhis2',
    coordinates: { latitude: 6.4531, longitude: 3.3958 },
    contact: {
      phone: '+234-801-234-5678',
      email: 'admin@ghl.gov.ng',
      address: '123 Marina Street, Lagos Island'
    },
    lastReportDate: '2024-01-15T08:30:00Z',
    reportingStatus: 'current',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2024-01-15T08:30:00Z',
  },
  {
    id: '2',
    name: 'PHC Ikeja',
    code: 'PHC002',
    state: 'Lagos',
    lga: 'Ikeja',
    ward: 'Ikeja GRA',
    type: 'primary',
    ownership: 'public',
    sourceSystem: 'openlmis',
    contact: {
      phone: '+234-802-345-6789',
      email: 'phc.ikeja@health.lg.gov.ng'
    },
    lastReportDate: '2024-01-10T14:20:00Z',
    reportingStatus: 'late',
    createdAt: '2023-02-15T00:00:00Z',
    updatedAt: '2024-01-10T14:20:00Z',
  },
  {
    id: '3',
    name: 'Specialist Hospital Kano',
    code: 'SHK003',
    state: 'Kano',
    lga: 'Kano Municipal',
    type: 'tertiary',
    ownership: 'public',
    sourceSystem: 'dhis2',
    contact: {
      phone: '+234-803-456-7890',
    },
    lastReportDate: undefined,
    reportingStatus: 'missing',
    createdAt: '2022-12-01T00:00:00Z',
    updatedAt: '2023-06-15T12:00:00Z',
  },
  {
    id: '4',
    name: 'Faith Medical Centre',
    code: 'FMC004',
    state: 'Rivers',
    lga: 'Port Harcourt',
    type: 'secondary',
    ownership: 'faith_based',
    sourceSystem: 'openlmis',
    contact: {
      email: 'info@faithmedical.org'
    },
    lastReportDate: '2024-01-14T16:45:00Z',
    reportingStatus: 'current',
    createdAt: '2023-03-20T00:00:00Z',
    updatedAt: '2024-01-14T16:45:00Z',
  },
];

const filterConfigs = [
  {
    key: 'search',
    label: 'Search',
    type: 'search' as const,
    placeholder: 'Search facilities...',
  },
  {
    key: 'state',
    label: 'State',
    type: 'select' as const,
    options: [
      { label: 'Lagos', value: 'Lagos' },
      { label: 'Kano', value: 'Kano' },
      { label: 'Rivers', value: 'Rivers' },
      { label: 'Kaduna', value: 'Kaduna' },
    ],
  },
  {
    key: 'lga',
    label: 'LGA',
    type: 'select' as const,
    options: [
      { label: 'Lagos Island', value: 'Lagos Island' },
      { label: 'Ikeja', value: 'Ikeja' },
      { label: 'Kano Municipal', value: 'Kano Municipal' },
      { label: 'Port Harcourt', value: 'Port Harcourt' },
    ],
  },
  {
    key: 'type',
    label: 'Type',
    type: 'select' as const,
    options: [
      { label: 'Primary', value: 'primary' },
      { label: 'Secondary', value: 'secondary' },
      { label: 'Tertiary', value: 'tertiary' },
    ],
  },
  {
    key: 'ownership',
    label: 'Ownership',
    type: 'select' as const,
    options: [
      { label: 'Public', value: 'public' },
      { label: 'Private', value: 'private' },
      { label: 'Faith Based', value: 'faith_based' },
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
    key: 'reportingStatus',
    label: 'Reporting Status',
    type: 'select' as const,
    options: [
      { label: 'Current', value: 'current' },
      { label: 'Late', value: 'late' },
      { label: 'Missing', value: 'missing' },
    ],
  },
];

export function FacilitiesPage() {
  const [filters, setFilters] = useState<FacilityFilters>({});
  const [sortField, setSortField] = useState<keyof Facility>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
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

  const handleSort = (field: keyof Facility) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleViewFacility = (facility: Facility) => {
    setSelectedFacility(facility);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFacility(null);
  };

  // Filter facilities based on current filters
  const filteredFacilities = mockFacilities.filter(facility => {
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      if (!facility.name.toLowerCase().includes(searchLower) &&
          !facility.code.toLowerCase().includes(searchLower)) {
        return false;
      }
    }
    
    if (filters.state && facility.state !== filters.state) return false;
    if (filters.lga && facility.lga !== filters.lga) return false;
    if (filters.type && facility.type !== filters.type) return false;
    if (filters.ownership && facility.ownership !== filters.ownership) return false;
    if (filters.sourceSystem && facility.sourceSystem !== filters.sourceSystem) return false;
    if (filters.reportingStatus && facility.reportingStatus !== filters.reportingStatus) return false;
    
    return true;
  });

  // Sort facilities
  const sortedFacilities = [...filteredFacilities].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (aValue === bValue) return 0;
    
    const result = aValue! < bValue! ? -1 : 1;
    return sortDirection === 'asc' ? result : -result;
  });

  return (
    <Layout currentPath="/facilities">
      <div className="space-y-6">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Healthcare Facilities
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage and monitor healthcare facilities across the system
            </p>
          </div>
          <div className="mt-4 flex space-x-3 md:mt-0 md:ml-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <Plus className="h-4 w-4 mr-2" />
              Add Facility
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {filteredFacilities.length}
                    </span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Facilities
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {filteredFacilities.length} of {mockFacilities.length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">
                      {filteredFacilities.filter(f => f.reportingStatus === 'current').length}
                    </span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Current Reporting
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {Math.round((filteredFacilities.filter(f => f.reportingStatus === 'current').length / filteredFacilities.length) * 100)}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-semibold text-sm">
                      {filteredFacilities.filter(f => f.reportingStatus === 'late').length}
                    </span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Late Reporting
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {filteredFacilities.filter(f => f.reportingStatus === 'late').length} facilities
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold text-sm">
                      {filteredFacilities.filter(f => f.reportingStatus === 'missing').length}
                    </span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Missing Reports
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {filteredFacilities.filter(f => f.reportingStatus === 'missing').length} facilities
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
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

        {/* Table */}
        <FacilityTable
          facilities={sortedFacilities}
          loading={loading}
          onViewFacility={handleViewFacility}
          onSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />

        {/* Pagination */}
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
                <span className="font-medium">{sortedFacilities.length}</span> of{' '}
                <span className="font-medium">{sortedFacilities.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Modal */}
        <FacilityModal
          facility={selectedFacility}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </Layout>
  );
}