import Image from 'next/image';
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

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

type Props = {
  item: CartItem;
  moveToCart: (itemId: string) => void;
  removeSavedItem: (itemId: string) => void;
};

export const SavedItemCard = ({ 
  item,
  moveToCart,
  removeSavedItem
}: Props ) => (
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