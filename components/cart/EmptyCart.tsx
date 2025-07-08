import { Package, ShoppingCart } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export const EmptyCart = () => {
  return (
    <div className="text-center py-16">
      <Card className="card p-12 max-w-md mx-auto">
        <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-400 mb-6">
          Looks like you haven't added any cosmic items to your cart yet.
        </p>
        <Button asChild className="primary-btn">
          <Link href="/products">
            <Package />
            Start Shopping
          </Link>
        </Button>
      </Card>
    </div>
  );
};

