import { ChevronDown, X, Filter } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterConfig {
  key: string;
  label: string;
  type: 'select' | 'multiselect' | 'date' | 'search';
  options?: FilterOption[];
  placeholder?: string;
}

interface FilterPanelProps {
  filters: Record<string, any>;
  onFilterChange: (key: string, value: any) => void;
  onClearFilters: () => void;
  filterConfigs: FilterConfig[];
  loading?: boolean;
}

export function FilterPanel({
  filters,
  onFilterChange,
  onClearFilters,
  filterConfigs,
  loading = false,
}: FilterPanelProps) {
  const hasActiveFilters = Object.values(filters).some(value => 
    value !== undefined && value !== null && value !== ''
  );

  const renderFilter = (config: FilterConfig) => {
    const value = filters[config.key];

    switch (config.type) {
      case 'search':
        return (
          <div key={config.key} className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {config.label}
            </label>
            <input
              type="text"
              value={value || ''}
              onChange={(e) => onFilterChange(config.key, e.target.value)}
              placeholder={config.placeholder}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        );

      case 'select':
        return (
          <div key={config.key} className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {config.label}
            </label>
            <div className="relative">
              <select
                value={value || ''}
                onChange={(e) => onFilterChange(config.key, e.target.value || undefined)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm appearance-none"
              >
                <option value="">{config.placeholder || `All ${config.label}`}</option>
                {config.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        );

      case 'date':
        return (
          <div key={config.key} className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {config.label}
            </label>
            <input
              type="date"
              value={value || ''}
              onChange={(e) => onFilterChange(config.key, e.target.value || undefined)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6 ${loading ? 'opacity-50 pointer-events-none' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-400 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        </div>
        
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filterConfigs.map(renderFilter)}
      </div>

      {/* Active filters display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {Object.entries(filters).map(([key, value]) => {
              if (!value) return null;
              
              const config = filterConfigs.find(c => c.key === key);
              if (!config) return null;

              const displayValue = config.options?.find(opt => opt.value === value)?.label || value;

              return (
                <span
                  key={key}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                >
                  {config.label}: {displayValue}
                  <button
                    onClick={() => onFilterChange(key, undefined)}
                    className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-primary-400 hover:bg-primary-200 hover:text-primary-500 focus:outline-none focus:bg-primary-500 focus:text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}