'use client'

import { useState } from 'react';
import { purchases } from '@/mock_data';
import { BillingTab, CancelSubscriptionModal, OverviewTab, PaymentTab, PlansTab, SidebarNavigation } from '@/components/subscription';

interface Purchase {
  id: string;
  type: 'subscription' | 'one-time' | 'addon';
  itemName: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed' | 'refunded';
  invoiceUrl?: string;
  description: string;
  paymentMethod: string;
  refundable: boolean;
}

export function SubscriptionDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [purchaseFilter, setPurchaseFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPurchases = (purchases as Purchase[]).filter(purchase => {
    const matchesFilter = purchaseFilter === 'all' || purchase.type === purchaseFilter;
    const matchesSearch = searchQuery === '' || 
      purchase.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      purchase.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Subscription Management
          </h1>
          <p className="text-gray-300">Manage your subscription, billing, and payment methods.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <SidebarNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && 
              <OverviewTab
                setShowUpgradeModal={setShowUpgradeModal}
                setActiveTab={setActiveTab}
                setShowCancelModal={setShowCancelModal}
            />}
            {activeTab === 'billing' &&
              <BillingTab
                searchQuery={searchQuery}
                purchaseFilter={purchaseFilter}
                filteredPurchases={filteredPurchases}
                setSearchQuery={setSearchQuery}
                setPurchaseFilter={setPurchaseFilter}
            />}
            {activeTab === 'payment' && <PaymentTab />}
            {activeTab === 'plans' && <PlansTab />}
          </div>
        </div>

        {/* Cancel Subscription Modal */}
        {showCancelModal && (
          <CancelSubscriptionModal setShowCancelModal={setShowCancelModal} />
        )}
      </div>
    </div>
  );
}