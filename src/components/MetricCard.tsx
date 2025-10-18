import { useMemo } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { formatNumber, formatPercentage, calculatePercentageChange } from '../lib/utils';

interface MetricCardProps {
  title: string;
  value: number | string;
  previousValue?: number;
  icon?: React.ComponentType<{ className?: string }>;
  format?: 'number' | 'percentage' | 'currency' | 'text';
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: number;
  description?: string;
  loading?: boolean;
}

export function MetricCard({
  title,
  value,
  previousValue,
  icon: Icon,
  format = 'number',
  trend,
  trendValue,
  description,
  loading = false,
}: MetricCardProps) {
  const formatValue = (val: number | string) => {
    if (typeof val === 'string') return val;
    
    switch (format) {
      case 'percentage':
        return formatPercentage(val / 100);
      case 'currency':
        return formatNumber(val, { style: 'currency', currency: 'NGN' });
      case 'number':
      default:
        return formatNumber(val);
    }
  };

  const calculatedTrend = useMemo(() => {
    if (trend) return trend;
    if (typeof value === 'number' && previousValue !== undefined) {
      const change = calculatePercentageChange(value, previousValue);
      return change > 0 ? 'up' : change < 0 ? 'down' : 'neutral';
    }
    return 'neutral';
  }, [trend, value, previousValue]);

  const calculatedTrendValue = useMemo(() => {
    if (trendValue !== undefined) return trendValue;
    if (typeof value === 'number' && previousValue !== undefined) {
      return Math.abs(calculatePercentageChange(value, previousValue));
    }
    return 0;
  }, [trendValue, value, previousValue]);

  const getTrendColor = (trendType: string) => {
    switch (trendType) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-500';
    }
  };

  const getTrendIcon = (trendType: string) => {
    switch (trendType) {
      case 'up':
        return TrendingUp;
      case 'down':
        return TrendingDown;
      default:
        return Minus;
    }
  };

  if (loading) {
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-8 bg-gray-200 rounded animate-pulse w-24" />
            </div>
          </div>
          <div className="mt-3">
            <div className="h-3 bg-gray-200 rounded animate-pulse w-32" />
          </div>
        </div>
      </div>
    );
  }

  const TrendIcon = getTrendIcon(calculatedTrend);

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-center">
          {Icon && (
            <div className="flex-shrink-0">
              <Icon className="h-8 w-8 text-gray-400" />
            </div>
          )}
          <div className={`w-0 flex-1 ${Icon ? 'ml-5' : ''}`}>
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  {formatValue(value)}
                </div>
                {calculatedTrendValue > 0 && (
                  <div className={`ml-2 flex items-baseline text-sm font-semibold ${getTrendColor(calculatedTrend)}`}>
                    <TrendIcon className="self-center flex-shrink-0 h-4 w-4" />
                    <span className="ml-1">
                      {formatPercentage(calculatedTrendValue / 100, 0)}
                    </span>
                  </div>
                )}
              </dd>
            </dl>
          </div>
        </div>
        {description && (
          <div className="mt-3">
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}