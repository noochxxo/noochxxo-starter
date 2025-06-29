'use client'

import React from 'react';
import { User, Settings, BarChart3, Rocket, Star, Zap, Users } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User as CurrentUser } from '@/lib/db/schemas';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const UserDashboard = () => {
  const { data: user } = useSWR<CurrentUser>('/api/user', fetcher);

  const stats = [
    { name: 'Projects', value: '12', icon: Rocket, color: 'from-cosmic-600 to-nebula-600' },
    { name: 'Team Members', value: '8', icon: Users, color: 'from-nebula-600 to-stardust-600' },
    { name: 'Tasks Completed', value: '247', icon: Star, color: 'from-stardust-600 to-cosmic-600' },
    { name: 'Performance', value: '98%', icon: Zap, color: 'from-cosmic-600 to-stardust-600' },
  ];

  const recentProjects = [
    { name: 'Cosmic Website', status: 'Active', progress: 85, team: 4 },
    { name: 'Mobile App', status: 'In Review', progress: 100, team: 3 },
    { name: 'API Integration', status: 'Planning', progress: 15, team: 2 },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.name} className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-300">{stat.name}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-white">{project.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Active' 
                          ? 'bg-green-500/20 text-green-400'
                          : project.status === 'In Review'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-4">
                        <div className="flex items-center justify-between text-sm text-gray-300 mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cosmic-500 to-nebula-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">{project.team}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button variant="outline" className="justify-start w-full">
                  <Rocket />
                  Create New Project
                </Button>
                <Button variant="outline" className="justify-start w-full">
                  <Users />
                  Invite Team Member
                </Button>
                <Button variant="outline" className="justify-start w-full">
                  <BarChart3 />
                  View Analytics
                </Button>
                <Button variant="outline" className="justify-start w-full">
                  <Settings />
                  Account Settings
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Account Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{user?.email}</p>
                    <p className="text-sm text-gray-300">{user?.email}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Plan</span>
                    <span className="text-white font-medium">Pro</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Storage Used</span>
                    <span className="text-white font-medium">2.4 GB / 10 GB</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-cosmic-500 to-nebula-500 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  UserDashboard;