import { CreditCard, Edit3, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { paymentMethods } from "@/mock_data";

interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'bank';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
  email?: string; // for PayPal
}

export const PaymentTab = () => (
    <div className="space-y-6">
      <Card className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Payment Methods</h3>
          <Button className='primary-btn' size="sm">
            <Plus />
            Add Payment Method
          </Button>
        </div>

        <div className="space-y-4">
          {(paymentMethods as PaymentMethod[]).map((method) => (
            <div key={method.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                      <p className="text-white font-medium">
                        {method.type === 'card' 
                          ? `${method.brand} •••• ${method.last4}`
                          : `PayPal - ${method.email}`
                        }
                      </p>
                      {method.isDefault && (
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                          Default
                        </span>
                      )}
                    </div>
                    {method.type === 'card' && (
                      <p className="text-gray-400 text-sm">
                        Expires {method.expiryMonth?.toString().padStart(2, '0')}/{method.expiryYear}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost" className='ghost-btn' > <Edit3 /> </Button>
                  <Button size="sm" variant="ghost" className="ghost-btn text-red-400 hover:text-red-300" ><Trash2 /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Billing Address */}
      <Card className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Billing Address</h3>
          <Button size="sm" variant="outline" className='outline-btn'>
            <Edit3 />
            Edit Address
          </Button>
        </div>

        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <div className="space-y-2 text-gray-300">
            <p className="text-white font-medium">John Doe</p>
            <p>123 Cosmic Street</p>
            <p>San Francisco, CA 94102</p>
            <p>United States</p>
          </div>
        </div>
      </Card>
    </div>
  );