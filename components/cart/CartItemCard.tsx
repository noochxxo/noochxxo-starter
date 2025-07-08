import Image from 'next/image';
import { AlertCircle, Heart, Minus, Plus, Trash2 } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

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
};

type Props = {
  item: CartItem;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  saveForLater: (itemId: string) => void;
  removeItem: (itemId: string) => void;
};

export const CartItemCard = ({ 
  item,
  updateQuantity,
  saveForLater,
  removeItem
}: Props) => (
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