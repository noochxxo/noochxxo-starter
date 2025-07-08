import { getDiscount, getShipping, getSubtotal, getTax } from ".";

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
};

export const getTotal = (
  cartItems: CartItem[],
  appliedPromo: PromoCode | null
) => {
  return (
    getSubtotal(cartItems) -
    getDiscount(appliedPromo, cartItems) +
    getShipping(appliedPromo, cartItems) +
    getTax(cartItems, appliedPromo)
  );
};
