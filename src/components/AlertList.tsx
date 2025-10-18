import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye,
  MoreHorizontal,
  User,
  MessageSquare
} from 'lucide-react';
import { formatDate, getStatusColor } from '../lib/utils';
import type { Alert } from '../types';

interface AlertListProps {
  alerts: Alert[];
  loading?: boolean;
  onViewAlert?: (alert: Alert) => void;
  onUpdateAlert?: (alertId: string, updates: Partial<Alert>) => void;
}

const severityIcons = {
  info: <AlertTriangle className="h-5 w-5 text-blue-500" />,
  warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
  error: <AlertTriangle className="h-5 w-5 text-orange-500" />,
  critical: <AlertTriangle className="h-5 w-5 text-red-500" />,
};

const statusIcons = {
  new: <Clock className="h-4 w-4" />,
  acknowledged: <Eye className="h-4 w-4" />,
  in_progress: <Clock className="h-4 w-4" />,
  resolved: <CheckCircle className="h-4 w-4" />,
  dismissed: <XCircle className="h-4 w-4" />,
};

export function AlertList({ alerts, loading = false, onViewAlert, onUpdateAlert }: AlertListProps) {
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedAlerts(alerts.map(a => a.id));
    } else {
      setSelectedAlerts([]);
    }
  };

  const handleSelectAlert = (alertId: string, checked: boolean) => {
    if (checked) {
      setSelectedAlerts(prev => [...prev, alertId]);
    } else {
      setSelectedAlerts(prev => prev.filter(id => id !== alertId));
    }
  };

  const handleAcknowledge = (alert: Alert) => {
    onUpdateAlert?.(alert.id, {
      status: 'acknowledged',
      acknowledgedAt: new Date().toISOString(),
      acknowledgedBy: 'Current User', // Replace with actual user
    });
  };

  const handleResolve = (alert: Alert) => {
    onUpdateAlert?.(alert.id, {
      status: 'resolved',
      resolvedAt: new Date().toISOString(),
      resolvedBy: 'Current User', // Replace with actual user
    });
  };

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Alerts & Notifications
          </h3>
          {selectedAlerts.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                {selectedAlerts.length} selected
              </span>
              <button className="text-sm text-primary-600 hover:text-primary-500">
                Bulk Actions
              </button>
            </div>
          )}
        </div>

        {/* Bulk Actions */}
        {selectedAlerts.length > 0 && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-700">
                {selectedAlerts.length} alerts selected
              </span>
              <div className="flex space-x-2">
                <button className="text-sm text-blue-600 hover:text-blue-500">
                  Acknowledge All
                </button>
                <button className="text-sm text-blue-600 hover:text-blue-500">
                  Assign
                </button>
                <button className="text-sm text-blue-600 hover:text-blue-500">
                  Export
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Alert List */}
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`border rounded-lg p-4 hover:bg-gray-50 transition-colors ${
                alert.status === 'new' ? 'border-l-4 border-l-primary-500' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    checked={selectedAlerts.includes(alert.id)}
                    onChange={(e) => handleSelectAlert(alert.id, e.target.checked)}
                  />
                  
                  <div className="flex-shrink-0 mt-0.5">
                    {severityIcons[alert.severity]}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {alert.title}
                      </h4>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                        {statusIcons[alert.status]}
                        <span className="ml-1">{alert.status.replace('_', ' ')}</span>
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">
                      {alert.message}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      {alert.facilityName && (
                        <span className="flex items-center">
                          <span className="font-medium">Facility:</span>
                          <span className="ml-1">{alert.facilityName}</span>
                        </span>
                      )}
                      
                      {alert.commodityName && (
                        <span className="flex items-center">
                          <span className="font-medium">Commodity:</span>
                          <span className="ml-1">{alert.commodityName}</span>
                        </span>
                      )}
                      
                      <span className="flex items-center">
                        <span className="font-medium">Source:</span>
                        <span className="ml-1 uppercase">{alert.sourceSystem}</span>
                      </span>
                      
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatDate(alert.createdAt)}
                      </span>
                    </div>
                    
                    {alert.assignedTo && (
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <User className="h-3 w-3 mr-1" />
                        <span>Assigned to: {alert.assignedTo}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => onViewAlert?.(alert)}
                    className="text-gray-400 hover:text-gray-600"
                    title="View details"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  
                  {alert.status === 'new' && (
                    <button
                      onClick={() => handleAcknowledge(alert)}
                      className="text-blue-400 hover:text-blue-600"
                      title="Acknowledge"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  )}
                  
                  {(alert.status === 'acknowledged' || alert.status === 'in_progress') && (
                    <button
                      onClick={() => handleResolve(alert)}
                      className="text-green-400 hover:text-green-600"
                      title="Resolve"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  )}
                  
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    title="More actions"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Evidence/Source */}
              {alert.evidence && (
                <div className="mt-3 pl-10 border-t border-gray-100 pt-3">
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Evidence:</span>
                    {alert.evidence.reportId && (
                      <span className="ml-2">Report ID: {alert.evidence.reportId}</span>
                    )}
                    <span className="ml-2">
                      Timestamp: {formatDate(alert.evidence.timestamp)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {alerts.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No alerts found</h3>
            <p className="mt-1 text-sm text-gray-500">
              No alerts match your current filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}