
import { Card } from "../ui/card";
import { Clock, CreditCard, Truck, Lock } from "lucide-react";
import { Button } from "../ui/button";

interface PromoCode {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  description: string;
}

interface CartItem {
  id: string;
  productId: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
  inStock: boolean;
  maxQuantity: number;
}

type Props = {
  cartItems: CartItem[];
  appliedPromo: PromoCode | null;
  hasOutOfStockItems: (cartItems: CartItem[]) => boolean;
  getTotalItems: (cartItems: CartItem[]) => number;
  getSubtotal: (cartItems: CartItem[]) => number
  getDiscount: (appliedPromo: PromoCode | null, cartItems: CartItem[]) => number;
  getShipping: (appliedPromo: PromoCode | null, cartItems: CartItem[]) => 0 | 9.99
  getTax: (cartItems: CartItem[], appliedPromo: PromoCode | null) => number;
  getTotal: (cartItems: CartItem[], appliedPromo: PromoCode | null) => number;
};

export const OrderSummary = ({
  cartItems,
  appliedPromo,
  hasOutOfStockItems,
  getTotalItems,
  getSubtotal,
  getDiscount,
  getShipping,
  getTax,
  getTotal
}: Props) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>

      <div className="space-y-3">
        <div className="flex justify-between text-gray-300">
          <span>Subtotal ({getTotalItems(cartItems)} items)</span>
          <span>${getSubtotal(cartItems).toFixed(2)}</span>
        </div>

        {appliedPromo && getDiscount(appliedPromo, cartItems) > 0 && (
          <div className="flex justify-between text-green-400">
            <span>Discount ({appliedPromo.code})</span>
            <span>-${getDiscount(appliedPromo, cartItems).toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-gray-300">
          <span className="flex items-center space-x-1">
            <Truck className="h-4 w-4" />
            <span>Shipping</span>
          </span>
          <span>
            {getShipping(appliedPromo, cartItems) === 0 ? "Free" : `$${getShipping(appliedPromo, cartItems).toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between text-gray-300">
          <span>Tax</span>
          <span>${getTax(cartItems, appliedPromo).toFixed(2)}</span>
        </div>

        <div className="border-t border-white/10 pt-3">
          <div className="flex justify-between text-xl font-bold text-white">
            <span>Total</span>
            <span>${getTotal(cartItems, appliedPromo).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <Truck className="h-4 w-4" />
          <span>
            {getShipping(appliedPromo, cartItems) === 0
              ? "Free shipping on this order!"
              : `Free shipping on orders over $50`}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-300 mt-1">
          <Clock className="h-4 w-4" />
          <span>Estimated delivery: 3-5 business days</span>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 space-y-3">
        <Button
          size="lg"
          disabled={hasOutOfStockItems(cartItems) || cartItems.length === 0}
          className="justify-center primary-btn w-full"
        >
          <CreditCard />
          Proceed to Checkout
        </Button>

        <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
          <Lock className="h-4 w-4" />
          <span>Secure checkout with SSL encryption</span>
        </div>
      </div>
    </Card>
  );
};
