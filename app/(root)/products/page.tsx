'use client'

import { useState } from 'react';
import { 
  ShoppingCart, Star, Filter, Search, Grid, List, 
  Heart, Share2, Zap, Shirt, Coffee, Laptop, 
  Package, Truck, Shield, ArrowRight, Plus, Minus,
  Eye, ChevronDown, SortAsc, Tag, Award, Sparkles,
  Check, AlertCircle
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [productSelections, setProductSelections] = useState<ProductSelection>({});
  const [selectionErrors, setSelectionErrors] = useState<{ [productId: string]: string }>({});

  const products: Product[] = [
    {
      id: '1',
      name: 'Cosmic Explorer T-Shirt',
      description: 'Premium cotton tee with holographic cosmic design that shifts colors in different lighting.',
      price: 29.99,
      originalPrice: 39.99,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
      category: 'apparel',
      rating: 4.8,
      reviews: 124,
      colors: [
        { name: 'Black', value: '#000000' },
        { name: 'Navy', value: '#1e3a8a' },
        { name: 'Purple', value: '#7c3aed' },
        { name: 'White', value: '#ffffff' }
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      featured: true,
      badge: 'Best Seller',
      requiresSize: true,
      requiresColor: true
    },
    {
      id: '2',
      name: 'Nebula Hoodie',
      description: 'Ultra-soft fleece hoodie with embroidered nebula constellation pattern.',
      price: 59.99,
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
      category: 'apparel',
      rating: 4.9,
      reviews: 89,
      colors: [
        { name: 'Black', value: '#000000' },
        { name: 'Charcoal', value: '#374151' },
        { name: 'Purple', value: '#7c3aed' }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      featured: true,
      badge: 'New',
      requiresSize: true,
      requiresColor: true
    },
    {
      id: '3',
      name: 'Stardust Coffee Mug',
      description: 'Heat-reactive ceramic mug that reveals hidden constellation patterns when hot.',
      price: 19.99,
      image: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg',
      category: 'accessories',
      rating: 4.7,
      reviews: 203,
      colors: [
        { name: 'Black', value: '#000000' },
        { name: 'White', value: '#ffffff' },
        { name: 'Blue', value: '#3b82f6' }
      ],
      sizes: ['11oz', '15oz'],
      inStock: true,
      featured: false,
      requiresSize: true,
      requiresColor: true
    },
    {
      id: '4',
      name: 'Cosmic Laptop Sleeve',
      description: 'Padded laptop sleeve with water-resistant cosmic print design.',
      price: 34.99,
      originalPrice: 44.99,
      image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      category: 'tech',
      rating: 4.6,
      reviews: 67,
      colors: [
        { name: 'Galaxy', value: '#4c1d95' },
        { name: 'Nebula', value: '#7c3aed' },
        { name: 'Stardust', value: '#3b82f6' }
      ],
      sizes: ['13"', '15"', '17"'],
      inStock: true,
      featured: false,
      badge: 'Sale',
      requiresSize: true,
      requiresColor: true
    },
    {
      id: '5',
      name: 'Galaxy Snapback Hat',
      description: 'Adjustable snapback with 3D embroidered galaxy logo and premium materials.',
      price: 24.99,
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg',
      category: 'accessories',
      rating: 4.5,
      reviews: 156,
      colors: [
        { name: 'Black', value: '#000000' },
        { name: 'Navy', value: '#1e3a8a' },
        { name: 'White', value: '#ffffff' }
      ],
      sizes: ['One Size'],
      inStock: true,
      featured: false,
      requiresSize: false, // One size fits all
      requiresColor: true
    },
    {
      id: '6',
      name: 'Cosmic Sticker Pack',
      description: 'Set of 12 holographic stickers featuring cosmic designs and logos.',
      price: 9.99,
      image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg',
      category: 'accessories',
      rating: 4.9,
      reviews: 312,
      colors: [{ name: 'Holographic', value: 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0)' }],
      sizes: ['Standard'],
      inStock: true,
      featured: true,
      badge: 'Popular',
      requiresSize: false, // Standard size
      requiresColor: false // Only one color option
    },
    {
      id: '7',
      name: 'Nebula Backpack',
      description: 'Durable backpack with cosmic print, laptop compartment, and USB charging port.',
      price: 79.99,
      image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
      category: 'accessories',
      rating: 4.8,
      reviews: 94,
      colors: [
        { name: 'Black', value: '#000000' },
        { name: 'Purple', value: '#7c3aed' },
        { name: 'Blue', value: '#3b82f6' }
      ],
      sizes: ['One Size'],
      inStock: false,
      featured: false,
      requiresSize: false, // One size
      requiresColor: true
    },
    {
      id: '8',
      name: 'Cosmic Phone Case',
      description: 'Protective phone case with cosmic design and wireless charging compatibility.',
      price: 16.99,
      originalPrice: 24.99,
      image: 'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg',
      category: 'tech',
      rating: 4.4,
      reviews: 178,
      colors: [
        { name: 'Galaxy', value: '#4c1d95' },
        { name: 'Nebula', value: '#7c3aed' },
        { name: 'Clear', value: 'transparent' }
      ],
      sizes: ['iPhone 14/15', 'iPhone 14/15 Pro', 'Samsung Galaxy S24', 'Google Pixel 8'],
      inStock: true,
      featured: false,
      badge: 'Sale',
      requiresSize: true,
      requiresColor: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Package },
    { id: 'apparel', name: 'Apparel', icon: Shirt },
    { id: 'accessories', name: 'Accessories', icon: Coffee },
    { id: 'tech', name: 'Tech', icon: Laptop },
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' },
  ];

  const filteredProducts = products
    .filter(product => 
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

  const updateProductSelection = (productId: string, type: 'size' | 'color', value: string) => {
    setProductSelections(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [type === 'size' ? 'selectedSize' : 'selectedColor']: value
      }
    }));
    
    // Clear any existing error for this product
    setSelectionErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[productId];
      return newErrors;
    });
  };

  const validateProductSelection = (product: Product): string | null => {
    const selection = productSelections[product.id];
    
    if (product.requiresSize && (!selection?.selectedSize)) {
      return 'Please select a size';
    }
    
    if (product.requiresColor && product.colors.length > 1 && (!selection?.selectedColor)) {
      return 'Please select a color';
    }
    
    return null;
  };

  const addToCart = (product: Product) => {
    const validationError = validateProductSelection(product);
    
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

  const removeFromCart = (productId: string, selectedSize?: string, selectedColor?: string) => {
    setCart(prev => {
      const itemIndex = prev.findIndex(item => 
        item.productId === productId && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );

      if (itemIndex >= 0) {
        const newCart = [...prev];
        if (newCart[itemIndex].quantity > 1) {
          newCart[itemIndex].quantity -= 1;
        } else {
          newCart.splice(itemIndex, 1);
        }
        return newCart;
      }
      return prev;
    });
  };

  const getCartItemQuantity = (productId: string, selectedSize?: string, selectedColor?: string) => {
    const item = cart.find(item => 
      item.productId === productId && 
      item.selectedSize === selectedSize && 
      item.selectedColor === selectedColor
    );
    return item ? item.quantity : 0;
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalCartItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalCartValue = () => {
    return cart.reduce((sum, item) => {
      const product = products.find(p => p.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  const ProductCard = ({ product }: { product: Product }) => {
    const selection = productSelections[product.id];
    const error = selectionErrors[product.id];
    const selectedSize = selection?.selectedSize || (product.requiresSize ? '' : product.sizes[0]);
    const selectedColor = selection?.selectedColor || (product.requiresColor && product.colors.length > 1 ? '' : product.colors[0].name);
    const cartQuantity = getCartItemQuantity(product.id, selectedSize, selectedColor);

    return (
      <Card className={cn('card group hover:scale-105 transition-all duration-300' ,!product.inStock ? 'opacity-75' : '')}>
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <div className="aspect-square bg-gradient-to-br from-cosmic-900 to-nebula-900 relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Badges */}
            {product.badge && (
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  product.badge === 'Sale' 
                    ? 'bg-red-500 text-white'
                    : product.badge === 'New'
                    ? 'bg-green-500 text-white'
                    : product.badge === 'Best Seller'
                    ? 'bg-cosmic-600 text-white'
                    : 'bg-yellow-500 text-black'
                }`}>
                  {product.badge}
                </span>
              </div>
            )}

            {/* Stock Status */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Out of Stock
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                onClick={() => toggleWishlist(product.id)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  wishlist.includes(product.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'
                }`}
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-cosmic-500 hover:text-white transition-colors">
                <Eye className="h-4 w-4" />
              </Button>
              <Button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-cosmic-500 hover:text-white transition-colors">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-cosmic-400 font-medium uppercase tracking-wide">
                {product.category}
              </span>
              <div className="flex items-center space-x-1">
                {renderStars(product.rating)}
                <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
              </div>
            </div>

            <h3 className="text-white font-semibold mb-2 group-hover:text-cosmic-400 transition-colors">
              {product.name}
            </h3>
            
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>

            {/* Color Selection */}
            {product.requiresColor && product.colors.length > 1 && (
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">Color:</span>
                  {selectedColor && (
                    <span className="text-xs text-white">{selectedColor}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color.name}
                      onClick={() => updateProductSelection(product.id, 'color', color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-cosmic-400 ring-2 ring-cosmic-400/30'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                      style={{
                        background: color.value.includes('gradient') ? color.value : color.value,
                        border: color.name === 'White' ? '2px solid #e5e7eb' : undefined
                      }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <Check className="h-4 w-4 text-white mx-auto" style={{
                          color: color.name === 'White' ? '#000' : '#fff'
                        }} />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.requiresSize && product.sizes.length > 1 && (
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">Size:</span>
                  {selectedSize && (
                    <span className="text-xs text-white">{selectedSize}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      onClick={() => updateProductSelection(product.id, 'size', size)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-cosmic-600 text-white border border-cosmic-500'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Selection Error */}
            {error && (
              <div className="mb-3 flex items-center space-x-2 text-red-400 text-xs">
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>
              {product.originalPrice && (
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            {/* Add to Cart */}
            <div className="flex items-center space-x-2">
              {cartQuantity > 0 ? (
                <div className="flex items-center space-x-2 flex-1">
                  <Button
                    onClick={() => removeFromCart(product.id, selectedSize, selectedColor)}
                    className="w-8 h-8 bg-cosmic-600 rounded-lg flex items-center justify-center text-white hover:bg-cosmic-500 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-white font-medium px-3 py-1 bg-white/10 rounded-lg">
                    {cartQuantity}
                  </span>
                  <Button
                    onClick={() => addToCart(product)}
                    className="w-8 h-8 bg-cosmic-600 rounded-lg flex items-center justify-center text-white hover:bg-cosmic-500 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className={cn("justify-center w-full", error ? 'outline-btn' : 'primary-btn')}
                  variant={error ? 'outline' : 'default'}
                >
                  <ShoppingCart />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cosmic-400 via-nebula-400 to-stardust-400 bg-clip-text text-transparent mb-6">
              Cosmic Merch
              <span className="block">Collection</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our exclusive collection of cosmic-themed merchandise designed for space enthusiasts and digital explorers.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-400">{products.length}</div>
              <div className="text-gray-400 text-sm">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-nebula-400">4.7★</div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-stardust-400">Free</div>
              <div className="text-gray-400 text-sm">Shipping</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-400">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="card p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 input"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-500"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id} className="bg-cosmic-900">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="flex items-center space-x-2">
                  <SortAsc className="h-5 w-5 text-gray-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-500"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value} className="bg-cosmic-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex items-center space-x-1 bg-white/5 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cosmic-600 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-cosmic-600 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-gray-400 text-sm">
                Showing {filteredProducts.length} of {products.length} products
              </span>
              {filterCategory !== 'all' && (
                <span className="bg-cosmic-600/20 text-cosmic-400 px-2 py-1 rounded-full text-xs">
                  {categories.find(c => c.id === filterCategory)?.name}
                </span>
              )}
              {searchQuery && (
                <span className="bg-nebula-600/20 text-nebula-400 px-2 py-1 rounded-full text-xs">
                  "{searchQuery}"
                </span>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Free Shipping</h3>
              <p className="text-gray-300">Free shipping on all orders over $50 worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-nebula-600 to-stardust-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quality Guarantee</h3>
              <p className="text-gray-300">30-day money-back guarantee on all products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-stardust-600 to-cosmic-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Express delivery available in 2-3 business days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Cart */}
      {getTotalCartItems() > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card className="p-4 bg-cosmic-600 border-cosmic-500">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-white" />
                <span className="absolute -top-2 -right-2 bg-nebula-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalCartItems()}
                </span>
              </div>
              <div className="text-white">
                <div className="font-medium">${getTotalCartValue().toFixed(2)}</div>
                <div className="text-xs opacity-80">{getTotalCartItems()} items</div>
              </div>
              <Button size="sm" variant="secondary" >
                <ArrowRight />
                Checkout
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}