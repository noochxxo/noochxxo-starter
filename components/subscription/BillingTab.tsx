import { Download, Receipt, RefreshCw, Search } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { getStatusColor, getTypeIcon } from "./utils";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";

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

type Props = {
  searchQuery: string;
  purchaseFilter: string;
  filteredPurchases: Purchase[];
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setPurchaseFilter: Dispatch<SetStateAction<string>>;
};

export const BillingTab = ({
  searchQuery,
  purchaseFilter,
  filteredPurchases,
  setSearchQuery,
  setPurchaseFilter
}: Props) => (
    <div className="space-y-6">
      <Card className="card p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Billing History</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search purchases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
            
            <select
              value={purchaseFilter}
              onChange={(e) => setPurchaseFilter(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-500"
            >
              <option value="all" className="bg-cosmic-900">All Types</option>
              <option value="subscription" className="bg-cosmic-900">Subscriptions</option>
              <option value="one-time" className="bg-cosmic-900">One-time</option>
              <option value="addon" className="bg-cosmic-900">Add-ons</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredPurchases.map((purchase) => {
            const TypeIcon = getTypeIcon(purchase.type);
            return (
              <div key={purchase.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-lg flex items-center justify-center">
                      <TypeIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <p className="text-white font-medium">{purchase.itemName}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(purchase.status)}`}>
                          {purchase.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{purchase.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                        <span>Payment: {purchase.paymentMethod}</span>
                        <span>•</span>
                        <span>{new Date(purchase.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-white font-medium">${purchase.amount.toFixed(2)}</p>
                      <p className="text-gray-400 text-xs capitalize">{purchase.type}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {purchase.invoiceUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className='ghost-btn'
                          title="Download Invoice"
                        > <Download /> </Button>
                      )}
                      {purchase.refundable && purchase.status === 'completed' && (
                        <Button
                          size="sm"
                          variant="ghost"
                          title="Request Refund"
                          className="ghot-btn text-yellow-400 hover:text-yellow-300"
                        > <RefreshCw /> </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPurchases.length === 0 && (
          <div className="text-center py-8">
            <Receipt className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-400">No purchases found matching your criteria</p>
          </div>
        )}
      </Card>
    </div>
  );