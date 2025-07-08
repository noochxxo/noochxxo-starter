import { getSubtotal } from ".";

interface PromoCode {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  description: string;
};

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

export const getDiscount = (
  appliedPromo: PromoCode | null,
  cartItems: CartItem[]
) => {
    if (!appliedPromo) return 0;
    
    const subtotal = getSubtotal(cartItems);
    if (appliedPromo.type === 'percentage') {
      return subtotal * (appliedPromo.discount / 100);
    } else {
      return appliedPromo.discount;
    }
  };