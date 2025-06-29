import { BarChart3, CheckCircle, Rocket, Star, TrendingUp, Users, Zap } from "lucide-react";

// Admin Dashboard Stats

export const stats = [
    { name: 'Total Users', value: '12,847', change: '+12%', icon: Users, color: 'from-cosmic-600 to-nebula-600' },
    { name: 'Active Sessions', value: '3,421', change: '+8%', icon: TrendingUp, color: 'from-nebula-600 to-stardust-600' },
    { name: 'System Health', value: '99.9%', change: '+0.1%', icon: CheckCircle, color: 'from-stardust-600 to-cosmic-600' },
    { name: 'Revenue', value: '$47,329', change: '+23%', icon: BarChart3, color: 'from-cosmic-600 to-stardust-600' },
  ];

  export const recentUsers = [
    { name: 'Alice Johnson', email: 'alice@example.com', role: 'User', status: 'Active', joined: '2 hours ago' },
    { name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active', joined: '5 hours ago' },
    { name: 'Carol Davis', email: 'carol@example.com', role: 'Admin', status: 'Active', joined: '1 day ago' },
    { name: 'David Wilson', email: 'david@example.com', role: 'User', status: 'Inactive', joined: '2 days ago' },
  ];

  export const systemAlerts = [
    { type: 'warning', message: 'High CPU usage detected on server-2', time: '5 minutes ago' },
    { type: 'info', message: 'Database backup completed successfully', time: '1 hour ago' },
    { type: 'error', message: 'Failed login attempts from suspicious IP', time: '2 hours ago' },
  ];

  // User Dashboard Stats

  export const usersStats = [
    { name: 'Projects', value: '12', icon: Rocket, color: 'from-cosmic-600 to-nebula-600' },
    { name: 'Team Members', value: '8', icon: Users, color: 'from-nebula-600 to-stardust-600' },
    { name: 'Tasks Completed', value: '247', icon: Star, color: 'from-stardust-600 to-cosmic-600' },
    { name: 'Performance', value: '98%', icon: Zap, color: 'from-cosmic-600 to-stardust-600' },
  ];

  export const recentProjects = [
    { name: 'Cosmic Website', status: 'Active', progress: 85, team: 4 },
    { name: 'Mobile App', status: 'In Review', progress: 100, team: 3 },
    { name: 'API Integration', status: 'Planning', progress: 15, team: 2 },
  ];