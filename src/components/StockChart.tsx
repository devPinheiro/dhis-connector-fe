import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { formatNumber, formatDate } from '../lib/utils';

interface ChartDataPoint {
  date: string;
  stockOnHand: number;
  reorderLevel: number;
  facilityName?: string;
  commodityName?: string;
}

interface StockChartProps {
  data: ChartDataPoint[];
  type?: 'line' | 'bar';
  height?: number;
  showReorderLine?: boolean;
  loading?: boolean;
  title?: string;
}

export function StockChart({
  data,
  type = 'line',
  height = 300,
  showReorderLine = true,
  loading = false,
  title,
}: StockChartProps) {
  const formatTooltipValue = (value: any, name: string) => {
    if (typeof value === 'number') {
      return [formatNumber(value), name];
    }
    return [value, name];
  };

  const formatTooltipLabel = (label: string) => {
    try {
      return formatDate(label, { dateStyle: 'medium', timeStyle: undefined });
    } catch {
      return label;
    }
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        {title && (
          <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
        )}
        <div className={`w-full bg-gray-200 rounded animate-pulse`} style={{ height }} />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        {title && (
          <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
        )}
        <div
          className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg"
          style={{ height }}
        >
          <div className="text-center">
            <p className="text-gray-500">No data available</p>
          </div>
        </div>
      </div>
    );
  }

  const ChartComponent = type === 'line' ? LineChart : BarChart;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {title && (
        <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      )}
      
      <ResponsiveContainer width="100%" height={height}>
        <ChartComponent data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={formatTooltipLabel}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis tickFormatter={(value) => formatNumber(value)} />
          <Tooltip
            formatter={formatTooltipValue}
            labelFormatter={formatTooltipLabel}
          />
          <Legend />
          
          {type === 'line' ? (
            <>
              <Line
                type="monotone"
                dataKey="stockOnHand"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Stock on Hand"
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
              {showReorderLine && (
                <Line
                  type="monotone"
                  dataKey="reorderLevel"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Reorder Level"
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 3 }}
                />
              )}
            </>
          ) : (
            <>
              <Bar
                dataKey="stockOnHand"
                fill="#3b82f6"
                name="Stock on Hand"
                radius={[2, 2, 0, 0]}
              />
              {showReorderLine && (
                <Bar
                  dataKey="reorderLevel"
                  fill="#f59e0b"
                  name="Reorder Level"
                  radius={[2, 2, 0, 0]}
                />
              )}
            </>
          )}
          
          {/* Zero stock reference line */}
          <ReferenceLine y={0} stroke="#ef4444" strokeDasharray="2 2" />
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
}