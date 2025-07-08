'use client'

import { useState } from 'react';
import { 
  ShoppingCart, Filter, Search, Grid, List,
  Package, ArrowRight, SortAsc
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories, products, sortOptions } from '@/mock_data';
import { filteredProducts, getTotalCartItems, getTotalCartValue } from '@/components/Products/utils';
import { ActiveFilters, FeaturesSection, HeroSection, ProductCard } from '@/components/Products';

interface CartItem {
  productId: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
};

interface ProductSelection {
  [productId: string]: {
    selectedSize?: string;
    selectedColor?: string;
  };
};

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [productSelections, setProductSelections] = useState<ProductSelection>({});
  const [selectionErrors, setSelectionErrors] = useState<{ [productId: string]: string }>({});

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950">
      {/* Hero Section */}
      <HeroSection products={products} />

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
            <ActiveFilters
              products={products}
              categories={categories}
              filterCategory={filterCategory}
              searchQuery={searchQuery}
              sortBy={sortBy}
            />
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
            {filteredProducts(
              products,
              filterCategory,
              searchQuery,
              sortBy
            ).map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                wishlist={wishlist}
                productSelections={productSelections}
                selectionErrors={selectionErrors}
                cart={cart}
                setProductSelections={setProductSelections}
                setSelectionErrors={setSelectionErrors}
                setWishlist={setWishlist}
                setCart={setCart}
              />
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
      <FeaturesSection />

      {/* Floating Cart */}
      {getTotalCartItems(cart) > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card className="p-4 bg-cosmic-600 border-cosmic-500">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-white" />
                <span className="absolute -top-2 -right-2 bg-nebula-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalCartItems(cart)}
                </span>
              </div>
              <div className="text-white">
                <div className="font-medium">${getTotalCartValue(
                    cart,
                    products,
                  ).toFixed(2)}</div>
                <div className="text-xs opacity-80">{getTotalCartItems(cart)} items</div>
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