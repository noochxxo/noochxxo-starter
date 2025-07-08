'use client'

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { currentProducts, promoCodes } from '@/mock_data';
import { 
  CartItemCard,
  EmptyCart,
  OutOfStockWarning,
  SavedForLater,
  PromoCode,
  GiftOptions,
  OrderSummary,
  SecurityFeatures
} from '@/components/cart';
import { getDiscount, getShipping, getSubtotal, getTax, getTotal, getTotalItems, hasOutOfStockItems } from '@/components/cart/utils';

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
  const [cartItems, setCartItems] = useState<CartItem[]>(currentProducts);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState('');
  const [isGift, setIsGift] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [savedForLater, setSavedForLater] = useState<CartItem[]>([]);

  const validPromoCodes: PromoCode[] = promoCodes as PromoCode[];

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
              {getTotalItems(cartItems)} {getTotalItems(cartItems) === 1 ? 'item' : 'items'} in your cart
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
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Out of Stock Warning */}
              {hasOutOfStockItems(cartItems) && (
                <OutOfStockWarning />
              )}

              {/* Cart Items List */}
              {cartItems.map(item => (
                <CartItemCard 
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  saveForLater={saveForLater}
                  removeItem={removeItem}
                />
              ))}

              {/* Saved for Later */}
              {savedForLater.length > 0 && (
                <SavedForLater
                  savedForLater={savedForLater}
                  moveToCart={moveToCart}
                  removeSavedItem={removeSavedItem}
                />
              )}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <PromoCode
                promoCode={promoCode}
                showPromoInput={showPromoInput}
                appliedPromo={appliedPromo}
                setShowPromoInput={setShowPromoInput}
                setPromoCode={setPromoCode}
                setPromoError={setPromoError}
                removePromoCode={removePromoCode}
                applyPromoCode={applyPromoCode}
              />

              {/* Gift Options */}
              <GiftOptions
                isGift={isGift}
                giftMessage={giftMessage}
                setIsGift={setIsGift}
                setGiftMessage={setGiftMessage}
              />

              {/* Order Summary */}
              <OrderSummary
                cartItems={cartItems}
                appliedPromo={appliedPromo}
                hasOutOfStockItems={hasOutOfStockItems}
                getTotalItems={getTotalItems}
                getSubtotal={getSubtotal}
                getDiscount={getDiscount}
                getShipping={getShipping}
                getTax={getTax}
                getTotal={getTotal}
              />

              {/* Security Features */}
              <SecurityFeatures />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}