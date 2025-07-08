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
  colors: { name: string; value: string; }[];
  sizes: string[];
  inStock: boolean;
  featured: boolean;
  badge?: string;
  requiresSize: boolean;
  requiresColor: boolean;
}

interface ProductSelection {
  [productId: string]: {
    selectedSize?: string;
    selectedColor?: string;
  };
}

export const validateProductSelection = (
  product: Product,
  productSelections: ProductSelection
): string | null => {
    const selection = productSelections[product.id];
    
    if (product.requiresSize && (!selection?.selectedSize)) {
      return 'Please select a size';
    }
    
    if (product.requiresColor && product.colors.length > 1 && (!selection?.selectedColor)) {
      return 'Please select a color';
    }
    
    return null;
  };