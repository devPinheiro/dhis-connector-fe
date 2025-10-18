import React, { useState } from 'react';
import { 
  Eye, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  MoreHorizontal 
} from 'lucide-react';
import { formatDate, getStatusColor } from '../lib/utils';
import type { Facility } from '../types';

interface FacilityTableProps {
  facilities: Facility[];
  loading?: boolean;
  onViewFacility?: (facility: Facility) => void;
  onSort?: (field: keyof Facility) => void;
  sortField?: keyof Facility;
  sortDirection?: 'asc' | 'desc';
}

export function FacilityTable({
  facilities,
  loading = false,
  onViewFacility,
  onSort,
  sortField,
  sortDirection,
}: FacilityTableProps) {
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedFacilities(facilities.map(f => f.id));
    } else {
      setSelectedFacilities([]);
    }
  };

  const handleSelectFacility = (facilityId: string, checked: boolean) => {
    if (checked) {
      setSelectedFacilities(prev => [...prev, facilityId]);
    } else {
      setSelectedFacilities(prev => prev.filter(id => id !== facilityId));
    }
  };

  const SortableHeader = ({ field, children }: { field: keyof Facility; children: React.ReactNode }) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
      onClick={() => onSort?.(field)}
    >
      <div className="flex items-center space-x-1">
        <span>{children}</span>
        {sortField === field && (
          sortDirection === 'asc' ? 
            <ChevronUp className="h-4 w-4" /> : 
            <ChevronDown className="h-4 w-4" />
        )}
      </div>
    </th>
  );

  if (loading) {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="min-w-full divide-y divide-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  checked={selectedFacilities.length === facilities.length && facilities.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <SortableHeader field="name">Facility</SortableHeader>
              <SortableHeader field="state">Location</SortableHeader>
              <SortableHeader field="type">Type</SortableHeader>
              <SortableHeader field="sourceSystem">Source</SortableHeader>
              <SortableHeader field="reportingStatus">Status</SortableHeader>
              <SortableHeader field="lastReportDate">Last Report</SortableHeader>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {facilities.map((facility) => (
              <tr
                key={facility.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onViewFacility?.(facility)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    checked={selectedFacilities.includes(facility.id)}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleSelectFacility(facility.id, e.target.checked);
                    }}
                  />
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {facility.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {facility.code}
                      </div>
                    </div>
                  </div>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <div className="text-sm text-gray-900">{facility.state}</div>
                      <div className="text-sm text-gray-500">{facility.lga}</div>
                    </div>
                  </div>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                    {facility.type.replace('_', ' ')}
                  </span>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase ${
                    facility.sourceSystem === 'dhis2' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {facility.sourceSystem}
                  </span>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(facility.reportingStatus)}`}>
                    {facility.reportingStatus.replace('_', ' ')}
                  </span>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {facility.lastReportDate ? (
                    formatDate(facility.lastReportDate, { dateStyle: 'medium', timeStyle: undefined })
                  ) : (
                    <span className="text-gray-400">Never</span>
                  )}
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewFacility?.(facility);
                      }}
                      className="text-primary-600 hover:text-primary-900"
                      title="View details"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    
                    {facility.contact?.phone && (
                      <a
                        href={`tel:${facility.contact.phone}`}
                        className="text-gray-400 hover:text-gray-600"
                        title="Call facility"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone className="h-4 w-4" />
                      </a>
                    )}
                    
                    {facility.contact?.email && (
                      <a
                        href={`mailto:${facility.contact.email}`}
                        className="text-gray-400 hover:text-gray-600"
                        title="Email facility"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                    
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-gray-600"
                      title="More actions"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {facilities.length === 0 && !loading && (
          <div className="text-center py-12">
            <Building2 className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No facilities found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
      
      {selectedFacilities.length > 0 && (
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">
              {selectedFacilities.length} facilities selected
            </span>
            <div className="flex space-x-2">
              <button className="text-sm text-primary-600 hover:text-primary-500">
                Export Selected
              </button>
              <button className="text-sm text-primary-600 hover:text-primary-500">
                Bulk Actions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}