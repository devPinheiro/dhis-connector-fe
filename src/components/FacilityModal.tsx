import React from 'react';
import { 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Building, 
  Users,
  Package,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';
import { formatDate, getStatusColor } from '../lib/utils';
import type { Facility } from '../types';

interface FacilityModalProps {
  facility: Facility | null;
  isOpen: boolean;
  onClose: () => void;
}

// Mock data for facility details
const mockStockData = [
  { commodity: 'Paracetamol 500mg', stock: 150, reorderLevel: 100, status: 'in_stock' },
  { commodity: 'Amoxicillin 250mg', stock: 25, reorderLevel: 50, status: 'low_stock' },
  { commodity: 'ORS Sachets', stock: 0, reorderLevel: 200, status: 'stockout' },
  { commodity: 'Vitamin A Capsules', stock: 75, reorderLevel: 30, status: 'in_stock' },
];

const mockAlerts = [
  {
    id: 1,
    type: 'stockout',
    commodity: 'ORS Sachets',
    severity: 'high',
    createdAt: '2024-01-15T10:00:00Z',
    message: 'Complete stockout reported',
  },
  {
    id: 2,
    type: 'low_stock',
    commodity: 'Amoxicillin 250mg',
    severity: 'medium',
    createdAt: '2024-01-14T15:30:00Z',
    message: 'Stock below reorder level',
  },
];

export function FacilityModal({ facility, isOpen, onClose }: FacilityModalProps) {
  if (!isOpen || !facility) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10">
                  <Building className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-gray-500">{facility.code}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-white rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="px-4 pb-4 sm:px-6 sm:pb-6">
            {/* Facility Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <h4 className="text-md font-medium text-gray-900">Basic Information</h4>
                
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <span>{facility.state}, {facility.lga}</span>
                  {facility.ward && <span className="text-gray-500 ml-1">• {facility.ward}</span>}
                </div>
                
                <div className="flex items-center text-sm">
                  <Building className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="capitalize">{facility.type.replace('_', ' ')} • {facility.ownership.replace('_', ' ')}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase ${
                    facility.sourceSystem === 'dhis2' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {facility.sourceSystem}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-medium text-gray-900">Contact & Status</h4>
                
                {facility.contact?.phone && (
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <a href={`tel:${facility.contact.phone}`} className="text-primary-600 hover:text-primary-500">
                      {facility.contact.phone}
                    </a>
                  </div>
                )}
                
                {facility.contact?.email && (
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <a href={`mailto:${facility.contact.email}`} className="text-primary-600 hover:text-primary-500">
                      {facility.contact.email}
                    </a>
                  </div>
                )}
                
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <span>Last report: </span>
                  {facility.lastReportDate ? (
                    <span className="ml-1">{formatDate(facility.lastReportDate)}</span>
                  ) : (
                    <span className="ml-1 text-gray-500">Never</span>
                  )}
                </div>
                
                <div className="flex items-center text-sm">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(facility.reportingStatus)}`}>
                    {facility.reportingStatus.replace('_', ' ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8">
                <button className="border-primary-500 text-primary-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                  Stock Status
                </button>
                <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                  Recent Alerts
                </button>
                <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                  Reports
                </button>
              </nav>
            </div>

            {/* Stock Status Tab */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-md font-medium text-gray-900">Current Stock Status</h4>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>In Stock</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span>Low Stock</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span>Stockout</span>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Commodity
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
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockStockData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.commodity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.stock.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.reorderLevel.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status.replace('_', ' ')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Recent Alerts */}
              <div className="mt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">Recent Alerts</h4>
                <div className="space-y-3">
                  {mockAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <AlertTriangle className={`h-5 w-5 mr-3 ${
                          alert.severity === 'high' ? 'text-red-500' : 'text-yellow-500'
                        }`} />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {alert.commodity} - {alert.type.replace('_', ' ')}
                          </p>
                          <p className="text-xs text-gray-500">{alert.message}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {formatDate(alert.createdAt)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
            <button
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              View Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}