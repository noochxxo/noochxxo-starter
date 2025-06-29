'use client'

import { User as CurrentUser } from '@/lib/db/schemas';
import useSWR from 'swr';
import { recentProjects, usersStats } from '@/mock_data';
import { QuickActions, RecentProjects, StatsGrid } from '@/components/user';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const UserDashboard = () => {
  const { data: user } = useSWR<CurrentUser>('/api/user', fetcher);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back, {user?.email}!
          </h1>
          <p className="text-gray-300">Here's what's happening with your projects today.</p>
        </div>

        {/* Stats Grid */}
        <StatsGrid usersStats={usersStats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <RecentProjects recentProjects={recentProjects} />

          {/* Quick Actions */}
          <QuickActions user={user} />
        </div>
      </div>
    </div>
  );
}

export default  UserDashboard;