import { currentSubscription, purchases } from "@/mock_data";
import { Card } from "../ui/card";
import { getStatusColor, getTypeIcon } from "./utils";
import { Calendar, Check, ChevronRight, DollarSign, Package, Settings, X } from "lucide-react";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";

interface Subscription {
  id: string;
  planName: string;
  planType: 'monthly' | 'yearly';
  price: number;
  status: 'active' | 'cancelled' | 'past_due' | 'trialing';
  nextBillingDate: string;
  startDate: string;
  cancelDate?: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
};

type Props = {
  setShowUpgradeModal: Dispatch<SetStateAction<boolean>>;
  setActiveTab: Dispatch<SetStateAction<string>>;
  setShowCancelModal: Dispatch<SetStateAction<boolean>>;
};

export const OverviewTab = ({
  setShowUpgradeModal,
  setActiveTab,
  setShowCancelModal
}: Props) => (
    <div className="space-y-6">
      {/* Current Subscription */}
      <Card className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Current Subscription</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor((currentSubscription as Subscription).status)}`}>
            {currentSubscription.status.charAt(0).toUpperCase() + currentSubscription.status.slice(1)}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${currentSubscription.gradient} rounded-lg flex items-center justify-center`}>
                <currentSubscription.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{currentSubscription.planName}</h4>
                <p className="text-gray-300">
                  ${currentSubscription.price}/{currentSubscription.planType === 'monthly' ? 'month' : 'year'}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Next billing date:</span>
                <span className="text-white">{new Date(currentSubscription.nextBillingDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Started:</span>
                <span className="text-white">{new Date(currentSubscription.startDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Billing cycle:</span>
                <span className="text-white capitalize">{currentSubscription.planType}</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-white font-medium mb-3">Plan Features</h5>
            <ul className="space-y-2">
              {currentSubscription.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-white/10">
          <Button
            variant="outline"
            className='outline-btn'
            onClick={() => setShowUpgradeModal(true)}
          >
            <Settings />
            Change Plan
          </Button>
          <Button
            variant="outline"
            className='outline-btn'
            onClick={() => setActiveTab('billing')}
          >
            <Calendar />
            View Billing History
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowCancelModal(true)}
            className="outline-btn text-red-400 border-red-400 hover:bg-red-500/10"
          >
            <X />
            Cancel Subscription
          </Button>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Spent</p>
              <p className="text-2xl font-bold text-white">
                ${purchases.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Since</p>
              <p className="text-2xl font-bold text-white">
                {Math.floor((new Date().getTime() - new Date(currentSubscription.startDate).getTime()) / (1000 * 60 * 60 * 24))} days
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Calendar className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Purchases</p>
              <p className="text-2xl font-bold text-white">{purchases.length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Purchases */}
      <Card className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Recent Purchases</h3>
          <Button
            variant="outline"
            className='outline-btn h-4 w-4 ml-2'
            size="sm"
            onClick={() => setActiveTab('billing')}
          >
            <ChevronRight />
            View All
          </Button>
        </div>

        <div className="space-y-4">
          {purchases.slice(0, 3).map((purchase) => {
            const TypeIcon = getTypeIcon(purchase.type);
            return (
              <div key={purchase.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-lg flex items-center justify-center">
                    <TypeIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{purchase.itemName}</p>
                    <p className="text-gray-400 text-sm">{purchase.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">${purchase.amount.toFixed(2)}</p>
                  <p className="text-gray-400 text-sm">{new Date(purchase.date).toLocaleDateString()}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );