import { getDiscount, getSubtotal } from ".";

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

export const getTax = (
  cartItems: CartItem[],
  appliedPromo: PromoCode | null
) => {
  const subtotal = getSubtotal(cartItems);
  const discount = getDiscount(appliedPromo, cartItems);
  return (subtotal - discount) * 0.08; // 8% tax
};
