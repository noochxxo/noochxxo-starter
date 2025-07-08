import Image from "next/image";
import {
  AlertCircle,
  Check,
  Eye,
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { addToCart, getCartItemQuantity } from "./utils";
import { cn } from "@/lib/utils";
import { renderStars } from ".";
import { Dispatch, SetStateAction } from "react";

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

type Props = {
  product: Product;
  wishlist: string[];
  productSelections: ProductSelection;
  selectionErrors: {
    [productId: string]: string;
  };
  cart: CartItem[];
  setProductSelections: Dispatch<SetStateAction<ProductSelection>>;
  setSelectionErrors: Dispatch<
    SetStateAction<{
      [productId: string]: string;
    }>
  >;
  setWishlist: Dispatch<SetStateAction<string[]>>;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

export const ProductCard = ({
  product,
  wishlist,
  productSelections,
  selectionErrors,
  cart,
  setProductSelections,
  setSelectionErrors,
  setWishlist,
  setCart,
}: Props) => {
  const selection = productSelections[product.id];
  const error = selectionErrors[product.id];
  const selectedSize =
    selection?.selectedSize || (product.requiresSize ? "" : product.sizes[0]);
  const selectedColor =
    selection?.selectedColor ||
    (product.requiresColor && product.colors.length > 1
      ? ""
      : product.colors[0].name);
  const cartQuantity = getCartItemQuantity(
    cart,
    product.id,
    selectedSize,
    selectedColor
  );

  return (
    <Card
      className={cn(
        "card group hover:scale-105 transition-all duration-300",
        !product.inStock ? "opacity-75" : ""
      )}
    >
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
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  product.badge === "Sale"
                    ? "bg-red-500 text-white"
                    : product.badge === "New"
                    ? "bg-green-500 text-white"
                    : product.badge === "Best Seller"
                    ? "bg-cosmic-600 text-white"
                    : "bg-yellow-500 text-black"
                }`}
              >
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
              onClick={() =>
                setWishlist((prev) =>
                  prev.includes(product.id)
                    ? prev.filter((id) => id !== product.id)
                    : [...prev, product.id]
                )
              }
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                wishlist.includes(product.id)
                  ? "bg-red-500 text-white"
                  : "bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white"
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
              <span className="text-xs text-gray-400 ml-1">
                ({product.reviews})
              </span>
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
                    onClick={() => {
                      setProductSelections((prev) => ({
                        ...prev,
                        [product.id]: {
                          ...prev[product.id],
                          ["selectedColor"]: color.name,
                        },
                      }));

                      // Clear any existing error for this product
                      setSelectionErrors((prev) => {
                        const newErrors = { ...prev };
                        delete newErrors[product.id];
                        return newErrors;
                      });
                    }}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? "border-cosmic-400 ring-2 ring-cosmic-400/30"
                        : "border-white/20 hover:border-white/40"
                    }`}
                    style={{
                      background: color.value.includes("gradient")
                        ? color.value
                        : color.value,
                      border:
                        color.name === "White"
                          ? "2px solid #e5e7eb"
                          : undefined,
                    }}
                    title={color.name}
                  >
                    {selectedColor === color.name && (
                      <Check
                        className="h-4 w-4 text-white mx-auto"
                        style={{
                          color: color.name === "White" ? "#000" : "#fff",
                        }}
                      />
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
                    onClick={() => {
                      setProductSelections((prev) => ({
                        ...prev,
                        [product.id]: {
                          ...prev[product.id],
                          ["selectedSize"]: size,
                        },
                      }));

                      // Clear any existing error for this product
                      setSelectionErrors((prev) => {
                        const newErrors = { ...prev };
                        delete newErrors[product.id];
                        return newErrors;
                      });
                    }}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      selectedSize === size
                        ? "bg-cosmic-600 text-white border border-cosmic-500"
                        : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white"
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
              <span className="text-xl font-bold text-white">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
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
                  onClick={() =>
                    setCart((prev) => {
                      const itemIndex = prev.findIndex(
                        (item) =>
                          item.productId === product.id &&
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
                    })
                  }
                  className="w-8 h-8 bg-cosmic-600 rounded-lg flex items-center justify-center text-white hover:bg-cosmic-500 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-white font-medium px-3 py-1 bg-white/10 rounded-lg">
                  {cartQuantity}
                </span>
                <Button
                  onClick={() => addToCart(
                    product,
                    productSelections,
                    setSelectionErrors,
                    setCart
                  )}
                  className="w-8 h-8 bg-cosmic-600 rounded-lg flex items-center justify-center text-white hover:bg-cosmic-500 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => addToCart(
                  product,
                  productSelections,
                  setSelectionErrors,
                  setCart
                )}
                disabled={!product.inStock}
                className={cn(
                  "justify-center w-full",
                  error ? "outline-btn" : "primary-btn"
                )}
                variant={error ? "outline" : "default"}
              >
                <ShoppingCart />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
