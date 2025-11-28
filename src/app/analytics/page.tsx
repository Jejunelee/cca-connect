import AnalyticsDashboard from '../../components/AnalyticsDashboard';

export const metadata = {
  title: 'Analytics Dashboard',
  description: 'View your site analytics and metrics',
};

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Real-time analytics for your application
          </p>
        </div>
        <AnalyticsDashboard />
      </div>
    </div>
  );
}