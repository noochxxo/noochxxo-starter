import { ForwardRefExoticComponent, RefAttributes } from "react";
import { filteredProducts } from "./utils";
import { LucideProps } from "lucide-react";

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
};

type Props = {
  products: Product[];
  categories: {
    id: string;
    name: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  }[];
  filterCategory: string;
  searchQuery: string;
  sortBy: string;
};

export const ActiveFilters = ({
  products,
  categories,
  filterCategory,
  searchQuery,
  sortBy
}: Props) => {
  return (
    <div className="flex items-center space-x-2 mt-4">
      <span className="text-gray-400 text-sm">
        Showing{" "}
        {filteredProducts(products, filterCategory, searchQuery, sortBy).length}{" "}
        of {products.length} products
      </span>
      {filterCategory !== "all" && (
        <span className="bg-cosmic-600/20 text-cosmic-400 px-2 py-1 rounded-full text-xs">
          {categories.find((c) => c.id === filterCategory)?.name}
        </span>
      )}
      {searchQuery && (
        <span className="bg-nebula-600/20 text-nebula-400 px-2 py-1 rounded-full text-xs">
          "{searchQuery}"
        </span>
      )}
    </div>
  );
};
