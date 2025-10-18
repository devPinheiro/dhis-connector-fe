export interface StockData {
  id: string;
  facilityId: string;
  facilityName: string;
  commodityId: string;
  commodityName: string;
  commodityCode: string;
  commodityCategory: string;
  stockOnHand: number;
  reorderLevel: number;
  maxStock: number;
  unit: string;
  batchNumber?: string;
  expiryDate?: string;
  lastUpdated: string;
  sourceSystem: 'dhis2' | 'openlmis';
  reportingPeriod: string;
}

export interface StockAlert {
  id: string;
  facilityId: string;
  facilityName: string;
  commodityId: string;
  commodityName: string;
  alertType: 'stockout' | 'low_stock' | 'overstock' | 'expired' | 'near_expiry';
  severity: 'low' | 'medium' | 'high' | 'critical';
  currentStock: number;
  reorderLevel: number;
  message: string;
  createdAt: string;
  resolvedAt?: string;
  evidence?: {
    sourceSystem: string;
    reportDate: string;
    reportId: string;
  };
}

export interface StockFilters {
  facilityId?: string;
  state?: string;
  lga?: string;
  commodityCategory?: string;
  commodityId?: string;
  alertType?: StockAlert['alertType'];
  severity?: StockAlert['severity'];
  dateFrom?: string;
  dateTo?: string;
  stockStatus?: 'in_stock' | 'low_stock' | 'stockout' | 'overstock';
  sourceSystem?: string;
}

export interface StockTrend {
  date: string;
  stockOnHand: number;
  reorderLevel: number;
  facilityId: string;
  commodityId: string;
}

export interface CommodityStats {
  id: string;
  name: string;
  category: string;
  totalFacilities: number;
  stockedFacilities: number;
  stockoutFacilities: number;
  lowStockFacilities: number;
  averageStock: number;
  lastUpdated: string;
}