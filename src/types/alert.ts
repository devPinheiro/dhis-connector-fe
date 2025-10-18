export interface Alert {
  id: string;
  type: 'stockout' | 'low_stock' | 'late_reporting' | 'data_quality' | 'system_error';
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
  facilityId?: string;
  facilityName?: string;
  commodityId?: string;
  commodityName?: string;
  state?: string;
  lga?: string;
  sourceSystem: 'dhis2' | 'openlmis' | 'system';
  metadata?: Record<string, any>;
  evidence?: {
    reportId?: string;
    dataValues?: any[];
    sourceUrl?: string;
    timestamp: string;
  };
  status: 'new' | 'acknowledged' | 'in_progress' | 'resolved' | 'dismissed';
  assignedTo?: string;
  acknowledgedAt?: string;
  acknowledgedBy?: string;
  resolvedAt?: string;
  resolvedBy?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AlertFilters {
  type?: Alert['type'];
  severity?: Alert['severity'];
  status?: Alert['status'];
  facilityId?: string;
  state?: string;
  lga?: string;
  sourceSystem?: Alert['sourceSystem'];
  dateFrom?: string;
  dateTo?: string;
  assignedTo?: string;
}

export interface AlertStats {
  total: number;
  byType: Record<string, number>;
  bySeverity: Record<string, number>;
  byStatus: Record<string, number>;
  bySourceSystem: Record<string, number>;
  recentCount: number;
  unresolvedCount: number;
}

export interface AlertAction {
  id: string;
  alertId: string;
  action: 'acknowledge' | 'assign' | 'resolve' | 'dismiss' | 'comment';
  userId: string;
  userName: string;
  comment?: string;
  metadata?: Record<string, any>;
  timestamp: string;
}