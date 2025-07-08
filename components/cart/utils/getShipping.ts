import { getSubtotal } from ".";

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

export const getShipping = (
  appliedPromo: PromoCode | null,
  cartItems: CartItem[]
) => {
    if (appliedPromo?.code === 'FREESHIP') return 0;
    const subtotal = getSubtotal(cartItems);
    return subtotal >= 50 ? 0 : 9.99;
  };