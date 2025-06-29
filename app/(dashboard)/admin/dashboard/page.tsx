import {
  StatsGrid,
  RecentUsers,
  QuickActions,
  SystemAlerts
} from '@/components/admin';
import { recentUsers, stats, systemAlerts } from '@/mock_data';

const AdminDashboard = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-300">Monitor and manage your application's performance and users.</p>
        </div>

        {/* Stats Grid */}
        <StatsGrid stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Users */}
          <RecentUsers recentUsers={recentUsers} />

          {/* System Alerts & Quick Actions */}
          <div className="space-y-6">
            <QuickActions />

            <SystemAlerts systemAlerts={systemAlerts} />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;