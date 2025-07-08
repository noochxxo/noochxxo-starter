import { Dispatch, SetStateAction } from "react";
import { validateProductSelection } from ".";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  colors: { name: string; value: string }[];
  sizes: string[];
  inStock: boolean;
  featured: boolean;
  badge?: string;
  requiresSize: boolean;
  requiresColor: boolean;
};

interface ProductSelection {
  [productId: string]: {
    selectedSize?: string;
    selectedColor?: string;
  };
};

interface CartItem {
  productId: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
};

export const addToCart = (
  product: Product,
  productSelections: ProductSelection,
  setSelectionErrors: Dispatch<SetStateAction<{
    [productId: string]: string;
  }>>,
  setCart: Dispatch<SetStateAction<CartItem[]>>
) => {
    const validationError = validateProductSelection(product, productSelections);
    
    if (validationError) {
      setSelectionErrors(prev => ({
        ...prev,
        [product.id]: validationError
      }));
      return;
    }

    const selection = productSelections[product.id];
    const selectedSize = product.requiresSize ? selection?.selectedSize || product.sizes[0] : product.sizes[0];
    const selectedColor = product.requiresColor && product.colors.length > 1 
      ? selection?.selectedColor || product.colors[0].name 
      : product.colors[0].name;

    setCart(prev => {
      const existingItemIndex = prev.findIndex(item => 
        item.productId === product.id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );

      if (existingItemIndex >= 0) {
        const newCart = [...prev];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      } else {
        return [...prev, {
          productId: product.id,
          quantity: 1,
          selectedSize,
          selectedColor
        }];
      }
    });
  };