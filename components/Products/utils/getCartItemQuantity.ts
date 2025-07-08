interface CartItem {
  productId: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
};

export const getCartItemQuantity = (
  cart: CartItem[],
  productId: string,
  selectedSize?: string,
  selectedColor?: string,
) => {
  const item = cart.find(
    (item) =>
      item.productId === productId &&
      item.selectedSize === selectedSize &&
      item.selectedColor === selectedColor
  );
  return item ? item.quantity : 0;
};
