'use client'

import { Users, BarChart3, Shield, Settings, TrendingUp, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const AdminDashboard = () => {
  const stats = [
    { name: 'Total Users', value: '12,847', change: '+12%', icon: Users, color: 'from-cosmic-600 to-nebula-600' },
    { name: 'Active Sessions', value: '3,421', change: '+8%', icon: TrendingUp, color: 'from-nebula-600 to-stardust-600' },
    { name: 'System Health', value: '99.9%', change: '+0.1%', icon: CheckCircle, color: 'from-stardust-600 to-cosmic-600' },
    { name: 'Revenue', value: '$47,329', change: '+23%', icon: BarChart3, color: 'from-cosmic-600 to-stardust-600' },
  ];

  const recentUsers = [
    { name: 'Alice Johnson', email: 'alice@example.com', role: 'User', status: 'Active', joined: '2 hours ago' },
    { name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active', joined: '5 hours ago' },
    { name: 'Carol Davis', email: 'carol@example.com', role: 'Admin', status: 'Active', joined: '1 day ago' },
    { name: 'David Wilson', email: 'david@example.com', role: 'User', status: 'Inactive', joined: '2 days ago' },
  ];

  const systemAlerts = [
    { type: 'warning', message: 'High CPU usage detected on server-2', time: '5 minutes ago' },
    { type: 'info', message: 'Database backup completed successfully', time: '1 hour ago' },
    { type: 'error', message: 'Failed login attempts from suspicious IP', time: '2 hours ago' },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.name} className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-300">{stat.name}</p>
                  <p className="text-green-400 text-sm font-medium">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Users */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Recent Users</h2>
                <Button variant="outline" size="sm">
                  Manage Users
                </Button>
              </div>
              <div className="space-y-4">
                {recentUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">{user.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">{user.name}</p>
                        <p className="text-sm text-gray-300">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === 'Admin' 
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {user.role}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'Active' 
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {user.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{user.joined}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* System Alerts & Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button variant="outline" className="justify-start w-full">
                  <Users />
                  User Management
                </Button>
                <Button variant="outline" className="justify-start w-full">
                  <BarChart3 />
                  System Analytics
                </Button>
                <Button variant="outline" className="justify-start w-full">
                  <Shield />
                  Security Settings
                </Button>
                <Button variant="outline" className="justify-start w-full">
                  <Settings />
                  System Configuration
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">System Alerts</h2>
              <div className="space-y-3">
                {systemAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className={`p-1 rounded-full ${
                      alert.type === 'error' 
                        ? 'bg-red-500/20'
                        : alert.type === 'warning'
                        ? 'bg-yellow-500/20'
                        : 'bg-blue-500/20'
                    }`}>
                      {alert.type === 'error' ? (
                        <AlertTriangle className="h-4 w-4 text-red-400" />
                      ) : alert.type === 'warning' ? (
                        <AlertTriangle className="h-4 w-4 text-yellow-400" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white">{alert.message}</p>
                      <p className="text-xs text-gray-400 flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {alert.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;