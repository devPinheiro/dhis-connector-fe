import type { 
  Facility, 
  StockData, 
  Alert, 
  DashboardMetrics, 
  ReportingCompleteness,
  User 
} from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    firstName: 'John',
    lastName: 'Admin',
    role: 'admin',
    permissions: ['read', 'write', 'delete', 'admin'],
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
  },
  {
    id: '2',
    email: 'analyst@example.com',
    firstName: 'Jane',
    lastName: 'Analyst',
    role: 'analyst',
    permissions: ['read', 'write'],
    state: 'Lagos',
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
  },
  {
    id: '3',
    email: 'facility@example.com',
    firstName: 'Michael',
    lastName: 'Manager',
    role: 'facility_manager',
    permissions: ['read'],
    state: 'Lagos',
    lga: 'Ikeja',
    facilityIds: ['2'],
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
  },
];

// Mock Facilities
export const mockFacilities: Facility[] = [
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

// Mock Stock Data
export const mockStockData: StockData[] = [
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

// Mock Alerts
export const mockAlerts: Alert[] = [
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
];

// Mock Dashboard Metrics
export const mockDashboardMetrics: DashboardMetrics = {
  totalFacilities: 1247,
  commoditiesTracked: 156,
  stockouts: 23,
  reportingCompleteness: 94.2,
  lastUpdated: '2024-01-15T08:30:00Z',
};

// Mock Reporting Completeness
export const mockReportingCompleteness: ReportingCompleteness[] = [
  {
    period: '2024-01',
    state: 'Lagos',
    expectedReports: 150,
    receivedReports: 142,
    completeness: 94.7,
    facilityBreakdown: [
      {
        facilityId: '1',
        facilityName: 'General Hospital Lagos',
        hasReported: true,
        reportDate: '2024-01-15T08:30:00Z',
      },
      {
        facilityId: '2',
        facilityName: 'PHC Ikeja',
        hasReported: true,
        reportDate: '2024-01-10T14:20:00Z',
      },
    ],
  },
  {
    period: '2024-01',
    state: 'Kano',
    expectedReports: 95,
    receivedReports: 87,
    completeness: 91.6,
    facilityBreakdown: [
      {
        facilityId: '3',
        facilityName: 'Specialist Hospital Kano',
        hasReported: false,
      },
    ],
  },
];

// Geographic data
export const mockStates = [
  { code: 'LA', name: 'Lagos' },
  { code: 'KA', name: 'Kano' },
  { code: 'RI', name: 'Rivers' },
  { code: 'KD', name: 'Kaduna' },
  { code: 'AB', name: 'Abia' },
];

export const mockLGAs = [
  { code: 'LAI', name: 'Lagos Island', state: 'Lagos' },
  { code: 'IKE', name: 'Ikeja', state: 'Lagos' },
  { code: 'KAM', name: 'Kano Municipal', state: 'Kano' },
  { code: 'PHC', name: 'Port Harcourt', state: 'Rivers' },
];

export const mockCommodities = [
  { id: 'PAR500', name: 'Paracetamol 500mg', code: 'PAR500', category: 'Essential Medicines' },
  { id: 'AMX250', name: 'Amoxicillin 250mg', code: 'AMX250', category: 'Antibiotics' },
  { id: 'ORS001', name: 'ORS Sachets', code: 'ORS001', category: 'Medical Supplies' },
  { id: 'VITA001', name: 'Vitamin A Capsules', code: 'VITA001', category: 'Nutritional Supplements' },
];