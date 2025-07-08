
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

export const getSubtotal = (cartItems: CartItem[]) => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };