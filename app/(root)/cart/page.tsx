'use client'

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ArrowRight,
  Heart, Gift, Truck, Shield, CreditCard, Lock, Tag,
  Package, Clock, Star, AlertCircle, CheckCircle, X,
  Percent, Calculator, MapPin, Edit3
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

interface PromoCode {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  description: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      productId: '1',
      name: 'Cosmic Explorer T-Shirt',
      description: 'Premium cotton tee with holographic cosmic design',
      price: 29.99,
      originalPrice: 39.99,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
      category: 'apparel',
      selectedSize: 'L',
      selectedColor: 'Black',
      quantity: 2,
      inStock: true,
      maxQuantity: 10
    },
    {
      id: '2',
      productId: '2',
      name: 'Nebula Hoodie',
      description: 'Ultra-soft fleece hoodie with embroidered nebula pattern',
      price: 59.99,
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
      category: 'apparel',
      selectedSize: 'M',
      selectedColor: 'Purple',
      quantity: 1,
      inStock: true,
      maxQuantity: 5
    },
    {
      id: '3',
      productId: '3',
      name: 'Stardust Coffee Mug',
      description: 'Heat-reactive ceramic mug with constellation patterns',
      price: 19.99,
      image: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg',
      category: 'accessories',
      selectedSize: '11oz',
      selectedColor: 'Black',
      quantity: 3,
      inStock: true,
      maxQuantity: 20
    },
    {
      id: '4',
      productId: '8',
      name: 'Cosmic Phone Case',
      description: 'Protective phone case with cosmic design',
      price: 16.99,
      originalPrice: 24.99,
      image: 'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg',
      category: 'tech',
      selectedSize: 'iPhone 14/15',
      selectedColor: 'Galaxy',
      quantity: 1,
      inStock: false,
      maxQuantity: 0
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState('');
  const [isGift, setIsGift] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [savedForLater, setSavedForLater] = useState<CartItem[]>([]);

  const validPromoCodes: PromoCode[] = [
    { code: 'COSMIC20', discount: 20, type: 'percentage', description: '20% off your order' },
    { code: 'SPACE10', discount: 10, type: 'fixed', description: '$10 off your order' },
    { code: 'NEWUSER', discount: 15, type: 'percentage', description: '15% off for new customers' },
    { code: 'FREESHIP', discount: 0, type: 'fixed', description: 'Free shipping' }
  ];

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }

    setCartItems(prev => prev.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: Math.min(newQuantity, item.maxQuantity)
        };
      }
      return item;
    }));
  };

  const removeItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const saveForLater = (itemId: string) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      setSavedForLater(prev => [...prev, item]);
      removeItem(itemId);
    }
  };

  const moveToCart = (itemId: string) => {
    const item = savedForLater.find(item => item.id === itemId);
    if (item) {
      setCartItems(prev => [...prev, item]);
      setSavedForLater(prev => prev.filter(item => item.id !== itemId));
    }
  };

  const removeSavedItem = (itemId: string) => {
    setSavedForLater(prev => prev.filter(item => item.id !== itemId));
  };

  const applyPromoCode = () => {
    const code = validPromoCodes.find(c => c.code.toLowerCase() === promoCode.toLowerCase());
    
    if (code) {
      setAppliedPromo(code);
      setPromoError('');
      setShowPromoInput(false);
      setPromoCode('');
    } else {
      setPromoError('Invalid promo code');
      setAppliedPromo(null);
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode('');
    setPromoError('');
  };

  const getSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getDiscount = () => {
    if (!appliedPromo) return 0;
    
    const subtotal = getSubtotal();
    if (appliedPromo.type === 'percentage') {
      return subtotal * (appliedPromo.discount / 100);
    } else {
      return appliedPromo.discount;
    }
  };

  const getShipping = () => {
    if (appliedPromo?.code === 'FREESHIP') return 0;
    const subtotal = getSubtotal();
    return subtotal >= 50 ? 0 : 9.99;
  };

  const getTax = () => {
    const subtotal = getSubtotal();
    const discount = getDiscount();
    return (subtotal - discount) * 0.08; // 8% tax
  };

  const getTotal = () => {
    return getSubtotal() - getDiscount() + getShipping() + getTax();
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const hasOutOfStockItems = () => {
    return cartItems.some(item => !item.inStock);
  };

  const CartItemCard = ({ item }: { item: CartItem }) => (
    <Card className="card p-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Product Image */}
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-cosmic-900 to-nebula-900 rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          {!item.inStock && (
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <span className="text-red-400 text-xs font-medium">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
              <p className="text-gray-300 text-sm mb-2">{item.description}</p>
              
              {/* Variants */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                {item.selectedSize && (
                  <span>Size: <span className="text-white">{item.selectedSize}</span></span>
                )}
                {item.selectedColor && (
                  <span>Color: <span className="text-white">{item.selectedColor}</span></span>
                )}
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-white">${item.price}</span>
                {item.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">${item.originalPrice}</span>
                )}
                {item.originalPrice && (
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                    Save ${(item.originalPrice - item.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              {!item.inStock && (
                <div className="flex items-center space-x-2 text-red-400 text-sm mb-3">
                  <AlertCircle className="h-4 w-4" />
                  <span>This item is currently out of stock</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col items-end space-y-3">
              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  disabled={!item.inStock}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center text-white font-medium">
                  {item.quantity}
                </span>
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  disabled={!item.inStock || item.quantity >= item.maxQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Item Total */}
              <div className="text-right">
                <div className="text-lg font-bold text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                {item.originalPrice && (
                  <div className="text-sm text-gray-400 line-through">
                    ${(item.originalPrice * item.quantity).toFixed(2)}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => saveForLater(item.id)}
                  className="text-cosmic-400 hover:text-cosmic-300 text-sm transition-colors"
                  title="Save for later"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 hover:text-red-300 text-sm transition-colors"
                  title="Remove item"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  const SavedItemCard = ({ item }: { item: CartItem }) => (
    <Card className="card p-4">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-cosmic-900 to-nebula-900 rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-medium">{item.name}</h4>
          <p className="text-gray-400 text-sm">${item.price}</p>
          {item.selectedSize && item.selectedColor && (
            <p className="text-gray-400 text-xs">
              {item.selectedSize} • {item.selectedColor}
            </p>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            variant="outline"
            className='outline-btn'
            onClick={() => moveToCart(item.id)}
          >
            Move to Cart
          </Button>
          <Button
            onClick={() => removeSavedItem(item.id)}
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Shopping Cart
            </h1>
            <p className="text-gray-300">
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <Button asChild variant="outline" className='outline-btn'>
            <Link href="/products">
              <ArrowLeft />
              Continue Shopping
            </Link>
          </Button>
          
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <Card className="card p-12 max-w-md mx-auto">
              <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Your cart is empty</h3>
              <p className="text-gray-400 mb-6">
                Looks like you haven't added any cosmic items to your cart yet.
              </p>
              <Button asChild className='primary-btn'>
                <Link href="/products">
                  <Package />
                  Start Shopping
                </Link>
              </Button>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Out of Stock Warning */}
              {hasOutOfStockItems() && (
                <Card className="card p-4 bg-red-500/10 border-red-500/20">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="text-red-400 font-medium">Some items are out of stock</p>
                      <p className="text-red-300 text-sm">
                        Out of stock items will be removed before checkout
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Cart Items List */}
              {cartItems.map(item => (
                <CartItemCard key={item.id} item={item} />
              ))}

              {/* Saved for Later */}
              {savedForLater.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Saved for Later ({savedForLater.length})
                  </h3>
                  <div className="space-y-3">
                    {savedForLater.map(item => (
                      <SavedItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <Card className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Promo Code</h3>
                  {!showPromoInput && !appliedPromo && (
                    <Button
                      onClick={() => setShowPromoInput(true)}
                      className="text-cosmic-400 hover:text-cosmic-300 text-sm transition-colors"
                    >
                      <Tag className="h-4 w-4 inline mr-1" />
                      Add Code
                    </Button>
                  )}
                </div>

                {appliedPromo ? (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span className="text-green-400 font-medium">{appliedPromo.code}</span>
                        </div>
                        <p className="text-green-300 text-sm">{appliedPromo.description}</p>
                      </div>
                      <Button
                        onClick={removePromoCode}
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : showPromoInput ? (
                  <div className="space-y-3">
                    <Input
                      type="text"
                      className='input'
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      // error={promoError}
                    />
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        onClick={applyPromoCode}
                        disabled={!promoCode.trim()}
                        className='primary-btn'
                      >
                        Apply
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className='outline-btn'
                        onClick={() => {
                          setShowPromoInput(false);
                          setPromoCode('');
                          setPromoError('');
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm">
                    Have a promo code? Click "Add Code" to apply it.
                  </p>
                )}
              </Card>

              {/* Gift Options */}
              <Card className="card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Gift className="h-5 w-5 text-cosmic-400" />
                  <h3 className="text-lg font-semibold text-white">Gift Options</h3>
                </div>
                
                <label className="flex items-center space-x-3 mb-4">
                  <Input
                    type="checkbox"
                    checked={isGift}
                    onChange={(e) => setIsGift(e.target.checked)}
                    className="input w-4 h-4 text-cosmic-600 bg-transparent border-gray-300 rounded focus:ring-cosmic-500"
                  />
                  <span className="text-white">This is a gift</span>
                </label>

                {isGift && (
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Gift Message (Optional)
                    </label>
                    <Textarea
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      placeholder="Write a personal message..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cosmic-500 focus:border-transparent transition-all duration-300 resize-none"
                      rows={3}
                      maxLength={200}
                    />
                    <p className="text-gray-400 text-xs mt-1">
                      {giftMessage.length}/200 characters
                    </p>
                  </div>
                )}
              </Card>

              {/* Order Summary */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal ({getTotalItems()} items)</span>
                    <span>${getSubtotal().toFixed(2)}</span>
                  </div>
                  
                  {appliedPromo && getDiscount() > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount ({appliedPromo.code})</span>
                      <span>-${getDiscount().toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-gray-300">
                    <span className="flex items-center space-x-1">
                      <Truck className="h-4 w-4" />
                      <span>Shipping</span>
                    </span>
                    <span>
                      {getShipping() === 0 ? 'Free' : `$${getShipping().toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>${getTax().toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span>${getTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="mt-6 p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Truck className="h-4 w-4" />
                    <span>
                      {getShipping() === 0 
                        ? 'Free shipping on this order!'
                        : `Free shipping on orders over $50`
                      }
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300 mt-1">
                    <Clock className="h-4 w-4" />
                    <span>Estimated delivery: 3-5 business days</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <div className="mt-6 space-y-3">
                  <Button
                    size="lg"
                    disabled={hasOutOfStockItems() || cartItems.length === 0}
                    className="justify-center primary-btn w-full"
                  >
                    <CreditCard />
                    Proceed to Checkout
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                    <Lock className="h-4 w-4" />
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                </div>
              </Card>

              {/* Security Features */}
              <Card className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Why Shop With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300 text-sm">Secure payment processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300 text-sm">Free shipping over $50</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300 text-sm">30-day return policy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">Quality guarantee</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}