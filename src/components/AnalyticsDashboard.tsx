'use client';

import { useState, useEffect } from 'react';

// Types
interface AnalyticsData {
  pageviews: number;
  visits: number;
  visitors: number;
  bounceRate: number;
  avgSessionTime: number;
}

interface PageView {
  pathname: string;
  count: number;
  percentage: number;
}

interface Referrer {
  referrer: string;
  count: number;
  percentage: number;
}

interface AnalyticsResponse {
  data: AnalyticsData;
  pageViews: PageView[];
  referrers: Referrer[];
  countries: { country: string; count: number; percentage: number }[];
  warning?: string;
  details?: string;
}

interface ApiError {
  error: string;
  message: string;
  details?: string;
}

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState<ApiError | null>(null);
  const [dateRange, setDateRange] = useState('7d');

  const fetchAnalytics = async (range: string = dateRange) => {
    setLoading(true);
    setApiError(null);
    setData(null);
    
    try {
      let fromDate = '';
      const toDate = new Date().toISOString().split('T')[0];
      
      // Calculate from date based on range
      const today = new Date();
      switch (range) {
        case '7d':
          today.setDate(today.getDate() - 7);
          break;
        case '30d':
          today.setDate(today.getDate() - 30);
          break;
        case '90d':
          today.setDate(today.getDate() - 90);
          break;
        case '1y':
          today.setFullYear(today.getFullYear() - 1);
          break;
        default:
          today.setDate(today.getDate() - 7);
      }
      
      fromDate = today.toISOString().split('T')[0];

      const response = await fetch(`/api/analytics?from=${fromDate}&to=${toDate}`);
      const result = await response.json();
      
      if (!response.ok) {
        // This is an API error with structured error response
        setApiError(result);
      } else if (result.warning) {
        // This is a successful response but with a warning (no data)
        setData(result);
      } else {
        // This is a successful response with data
        setData(result);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setApiError({
        error: 'Connection Error',
        message: 'Failed to connect to analytics server',
        details: 'Please check your network connection and try again'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const handleDateRangeChange = (newRange: string) => {
    setDateRange(newRange);
    fetchAnalytics(newRange);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600">Loading analytics data...</span>
      </div>
    );
  }

  if (apiError) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Analytics Overview</h2>
          <div className="flex space-x-2">
            {['7d', '30d', '90d', '1y'].map((range) => (
              <button
                key={range}
                onClick={() => handleDateRangeChange(range)}
                className={`px-3 py-1 text-sm rounded-md ${
                  dateRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">{apiError.error}</h3>
              <p className="text-red-700 mt-2">{apiError.message}</p>
              {apiError.details && (
                <p className="text-red-600 text-sm mt-2">{apiError.details}</p>
              )}
              <button
                onClick={() => fetchAnalytics()}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data?.warning) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Analytics Overview</h2>
          <div className="flex space-x-2">
            {['7d', '30d', '90d', '1y'].map((range) => (
              <button
                key={range}
                onClick={() => handleDateRangeChange(range)}
                className={`px-3 py-1 text-sm rounded-md ${
                  dateRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">No Data Available</h3>
              <p className="text-yellow-700 mt-2">{data.warning}</p>
              {data.details && (
                <p className="text-yellow-600 text-sm mt-2">{data.details}</p>
              )}
              <div className="mt-4 text-sm text-yellow-600">
                <p><strong>Possible solutions:</strong></p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Ensure your site has been deployed and is receiving traffic</li>
                  <li>Verify Vercel Analytics is enabled in your project settings</li>
                  <li>Try selecting a different date range</li>
                  <li>Wait a few hours for new analytics data to process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Show empty state metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 opacity-50">
          <MetricCard title="Page Views" value="0" description="No data available" />
          <MetricCard title="Visits" value="0" description="No data available" />
          <MetricCard title="Visitors" value="0" description="No data available" />
          <MetricCard title="Bounce Rate" value="0%" description="No data available" />
          <MetricCard title="Avg. Session" value="0s" description="No data available" />
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <svg className="h-12 w-12 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mt-4">No Analytics Data</h3>
        <p className="text-gray-600 mt-2">Unable to load analytics data. Please try refreshing the page.</p>
        <button
          onClick={() => fetchAnalytics()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Refresh Data
        </button>
      </div>
    );
  }

  // Normal data display (same as before)
  return (
    <div className="space-y-6">
      {/* ... (keep the normal data display JSX from previous example) ... */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Analytics Overview</h2>
        <div className="flex space-x-2">
          {['7d', '30d', '90d', '1y'].map((range) => (
            <button
              key={range}
              onClick={() => handleDateRangeChange(range)}
              className={`px-3 py-1 text-sm rounded-md ${
                dateRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard
          title="Page Views"
          value={data.data.pageviews.toLocaleString()}
          description="Total page views"
        />
        <MetricCard
          title="Visits"
          value={data.data.visits.toLocaleString()}
          description="Total visits"
        />
        <MetricCard
          title="Visitors"
          value={data.data.visitors.toLocaleString()}
          description="Unique visitors"
        />
        <MetricCard
          title="Bounce Rate"
          value={`${data.data.bounceRate.toFixed(1)}%`}
          description="Visitors who left after one page"
        />
        <MetricCard
          title="Avg. Session"
          value={`${Math.round(data.data.avgSessionTime / 60)}m ${data.data.avgSessionTime % 60}s`}
          description="Average session duration"
        />
      </div>

      {/* Top Pages & Referrers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Top Pages">
          <div className="space-y-3">
            {data.pageViews.map((page, index) => (
              <div key={page.pathname} className="flex justify-between items-center">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
                  <span className="text-sm truncate" title={page.pathname}>
                    {page.pathname || '/'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500 w-12 text-right">
                    {page.percentage.toFixed(1)}%
                  </span>
                  <span className="text-sm font-medium text-gray-900 bg-blue-50 px-2 py-1 rounded">
                    {page.count.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Traffic Sources">
          <div className="space-y-3">
            {data.referrers.map((ref, index) => (
              <div key={ref.referrer} className="flex justify-between items-center">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
                  <span className="text-sm truncate" title={ref.referrer}>
                    {ref.referrer || 'Direct'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500 w-12 text-right">
                    {ref.percentage.toFixed(1)}%
                  </span>
                  <span className="text-sm font-medium text-gray-900 bg-green-50 px-2 py-1 rounded">
                    {ref.count.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Top Countries */}
      <Card title="Top Countries by Visitors">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.countries.map((country, index) => (
            <div key={country.country} className="text-center p-4 bg-gray-50 rounded-lg border">
              <div className="text-lg font-bold text-gray-900">
                {country.count.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mt-1 truncate" title={country.country}>
                {country.country || 'Unknown'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {country.percentage.toFixed(1)}%
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// Helper Components (keep the same MetricCard and Card components from previous example)
function MetricCard({ 
  title, 
  value, 
  description 
}: { 
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 mt-2">{description}</p>
    </div>
  );
}

function Card({ 
  title, 
  children 
}: { 
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
}