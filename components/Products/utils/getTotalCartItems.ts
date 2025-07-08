interface CartItem {
  productId: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
};

export const getTotalCartItems = (cart: CartItem[]): number => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };