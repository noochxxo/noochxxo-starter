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

interface CartItem {
  productId: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

interface ProductSelection {
  [productId: string]: {
    selectedSize?: string;
    selectedColor?: string;
  };
}

export function filteredProducts(
  products: Product[],
  filterCategory: string,
  searchQuery: string,
  sortBy: string
) : Product[] {
  return products.filter(product => 
      (filterCategory === 'all' || product.category === filterCategory) &&
      (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.featured ? 1 : -1;
        default:
          return b.featured ? 1 : -1;
      }
    });
}
    