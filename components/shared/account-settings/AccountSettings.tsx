import { useState } from 'react';
import { User, Lock, CreditCard, Activity, Shield, Eye, EyeOff, Check, X, Crown, Star, Calendar, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { User as CurrentUser } from '@/lib/db/schemas';
import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function AccountSettings() {
  const { data: user } = useSWR<CurrentUser>('/api/user', fetcher);

  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form states
  const [fullName, setFullName] = useState(user?.name || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'security', name: 'Security', icon: Lock },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'activity', name: 'Activity', icon: Activity },
  ];

  const subscriptionPlans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      features: ['5 Projects', '10GB Storage', 'Basic Support', 'Standard Analytics'],
      current: false,
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics', 'Team Collaboration'],
      current: true,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      features: ['Everything in Pro', '1TB Storage', 'Dedicated Support', 'Custom Integrations', 'Advanced Security'],
      current: false,
      popular: false,
    },
  ];

  const singlePurchases = [
    {
      name: 'Extra Storage Pack',
      description: '50GB additional storage space',
      price: '$19',
      icon: Download,
    },
    {
      name: 'Premium Templates',
      description: 'Access to 100+ premium templates',
      price: '$49',
      icon: Star,
    },
    {
      name: 'Advanced Analytics',
      description: 'Detailed insights and reporting tools',
      price: '$39',
      icon: Activity,
    },
  ];

  const activityLog = [
    { action: 'Password changed', timestamp: '2024-01-15 14:30', ip: '192.168.1.1', status: 'success' },
    { action: 'Profile updated', timestamp: '2024-01-14 09:15', ip: '192.168.1.1', status: 'success' },
    { action: 'Login attempt', timestamp: '2024-01-13 18:45', ip: '203.0.113.1', status: 'failed' },
    { action: 'Subscription upgraded', timestamp: '2024-01-12 11:20', ip: '192.168.1.1', status: 'success' },
    { action: 'Two-factor enabled', timestamp: '2024-01-10 16:00', ip: '192.168.1.1', status: 'success' },
    { action: 'Login successful', timestamp: '2024-01-10 08:30', ip: '192.168.1.1', status: 'success' },
  ];

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');

    try {
      // await updateProfile({ full_name: fullName });
      setSuccessMessage('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setPasswordError('');
    setSuccessMessage('');

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }

    try {
      // Here you would implement the actual password change logic
      // For now, we'll simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccessMessage('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setPasswordError('Failed to change password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Profile Information</h3>
        <Card className="card p-6">
          {successMessage && (
            <div className="mb-4 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <p className="text-green-400 text-sm">{successMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium">{user?.email}</h4>
                <p className="text-gray-400 text-sm">
                  Member since {new Date(user?.createdAt || '').toLocaleDateString()}
                </p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                  user?.role === 'admin' 
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {(user?.role ?? 'user').charAt(0).toUpperCase() + (user?.role ?? 'user').slice(1)}
                </span>
              </div>
            </div>

            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
              className='input'
            />

            <Input
              type="email"
              value={user?.email || ''}
              disabled
              className="input opacity-60"
            />

            <Button
              type="submit"
              className="w-full sm:w-auto"
            >
              <User />
              Update Profile
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Security Settings</h3>
        
        {/* Change Password */}
        <Card className="card p-6 mb-6">
          <h4 className="text-lg font-medium text-white mb-4">Change Password</h4>
          
          {passwordError && (
            <div className="mb-4 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-center">
                <X className="h-5 w-5 text-red-400 mr-2" />
                <p className="text-red-400 text-sm">{passwordError}</p>
              </div>
            </div>
          )}

          {successMessage && (
            <div className="mb-4 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <p className="text-green-400 text-sm">{successMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleChangePassword} className="space-y-4">
            <div className="relative">
              <Input
                type={showCurrentPassword ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                required
                className='input'
              />
              <Button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-white"
              >
                {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </Button>
            </div>

            <div className="relative">
              <Input
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
                className='input'
              />
              <Button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-white"
              >
                {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </Button>
            </div>

            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
                className='input'
              />
              <Button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full sm:w-auto"
            >
              <Lock />
              Change Password
            </Button>
          </form>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-medium text-white mb-2">Two-Factor Authentication</h4>
              <p className="text-gray-300 text-sm">Add an extra layer of security to your account</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400 text-sm">Enabled</span>
              <div className="w-12 h-6 bg-green-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" size="sm" className='outline-btn'>
              <Shield />
              Manage 2FA
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderBillingTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Billing & Subscriptions</h3>
        
        {/* Current Plan */}
        <Card className="card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium text-white">Current Plan</h4>
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
              Active
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-lg flex items-center justify-center">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <div>
              <h5 className="text-white font-medium">Pro Plan</h5>
              <p className="text-gray-300 text-sm">$29/month • Next billing: Jan 15, 2024</p>
            </div>
          </div>
        </Card>

        {/* Subscription Plans */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-white mb-4">Upgrade Your Plan</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan) => (
              <Card key={plan.name} className={cn("card p-6 relative", plan.popular ? 'ring-2 ring-cosmic-500' : '')}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h5 className="text-white font-semibold text-lg">{plan.name}</h5>
                  <div className="flex items-baseline justify-center mt-2">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  disabled={plan.current}
                  className={cn("justify-center w-full", plan.current ? 'outline-btn' : 'primary-btn')}
                >
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Single Purchases */}
        <div>
          <h4 className="text-lg font-medium text-white mb-4">Add-ons & Single Purchases</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {singlePurchases.map((item) => (
              <Card key={item.name} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-stardust-600 to-cosmic-600 rounded-lg flex items-center justify-center mr-3">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">{item.name}</h5>
                    <p className="text-2xl font-bold text-cosmic-400">{item.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <Button variant="outline" className="outline-btn justify-center w-full">
                  Purchase
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderActivityTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Account Activity</h3>
        
        <Card className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-medium text-white">Recent Activity</h4>
            <Button variant="outline" size="sm" className='outline-btn'>
              <Download />
              Export Log
            </Button>
          </div>

          <div className="space-y-4">
            {activityLog.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <div>
                    <p className="text-white font-medium">{activity.action}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {activity.timestamp}
                      </span>
                      <span>IP: {activity.ip}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  activity.status === 'success' 
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline" size="sm" className='outline-btn'>
              Load More Activity
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Account Settings
          </h1>
          <p className="text-gray-300">Manage your account preferences and security settings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="card p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-cosmic-600/20 text-cosmic-400 border border-cosmic-600/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="font-medium">{tab.name}</span>
                  </Button>
                ))}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'security' && renderSecurityTab()}
            {activeTab === 'billing' && renderBillingTab()}
            {activeTab === 'activity' && renderActivityTab()}
          </div>
        </div>
      </div>
    </div>
  );
}