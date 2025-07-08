import { AlertCircle } from "lucide-react";
import { Card } from "../ui/card";

export const OutOfStockWarning = () => {
  return (
    <Card className="card p-4 bg-red-500/10 border-red-500/20">
      <div className="flex items-center space-x-3">
        <AlertCircle className="h-5 w-5 text-red-400" />
        <div>
          <p className="text-red-400 font-medium">
            Some items are out of stock
          </p>
          <p className="text-red-300 text-sm">
            Out of stock items will be removed before checkout
          </p>
        </div>
      </div>
    </Card>
  );
};
