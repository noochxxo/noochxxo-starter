import React from "react";
import { SavedItemCard } from ".";

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
  savedForLater: CartItem[];
  moveToCart: (itemId: string) => void;
  removeSavedItem: (itemId: string) => void;
};

export const SavedForLater = ({
  savedForLater,
  moveToCart,
  removeSavedItem
}: Props) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white mb-4">
        Saved for Later ({savedForLater.length})
      </h3>
      <div className="space-y-3">
        {savedForLater.map((item) => (
          <SavedItemCard
            key={item.id}
            item={item}
            moveToCart={moveToCart}
            removeSavedItem={removeSavedItem}
          />
        ))}
      </div>
    </div>
  );
};
