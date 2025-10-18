export interface Facility {
  id: string;
  name: string;
  code: string;
  state: string;
  lga: string;
  ward?: string;
  type: 'primary' | 'secondary' | 'tertiary';
  ownership: 'public' | 'private' | 'faith_based';
  sourceSystem: 'dhis2' | 'openlmis';
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  lastReportDate?: string;
  reportingStatus: 'current' | 'late' | 'missing';
  createdAt: string;
  updatedAt: string;
}

export interface FacilityFilters {
  state?: string;
  lga?: string;
  type?: Facility['type'];
  ownership?: Facility['ownership'];
  sourceSystem?: Facility['sourceSystem'];
  reportingStatus?: Facility['reportingStatus'];
  search?: string;
}

export interface FacilityStats {
  total: number;
  byState: Record<string, number>;
  byType: Record<string, number>;
  byReportingStatus: Record<string, number>;
  bySourceSystem: Record<string, number>;
}