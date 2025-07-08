import { Package, Shield, Star, Truck } from "lucide-react";
import { Card } from "../ui/card";

export const SecurityFeatures = () => {
  return (
    <Card className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        Why Shop With Us?
      </h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Shield className="h-5 w-5 text-green-400" />
          <span className="text-gray-300 text-sm">
            Secure payment processing
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Truck className="h-5 w-5 text-blue-400" />
          <span className="text-gray-300 text-sm">Free shipping over $50</span>
        </div>
        <div className="flex items-center space-x-3">
          <Star className="h-5 w-5 text-yellow-400" />
          <span className="text-gray-300 text-sm">30-day return policy</span>
        </div>
        <div className="flex items-center space-x-3">
          <Package className="h-5 w-5 text-purple-400" />
          <span className="text-gray-300 text-sm">Quality guarantee</span>
        </div>
      </div>
    </Card>
  );
};
