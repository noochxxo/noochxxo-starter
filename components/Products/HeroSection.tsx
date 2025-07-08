
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
};

export const HeroSection = ({
  products
}: Props) => {
  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cosmic-400 via-nebula-400 to-stardust-400 bg-clip-text text-transparent mb-6">
            Cosmic Merch
            <span className="block">Collection</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover our exclusive collection of cosmic-themed merchandise
          designed for space enthusiasts and digital explorers.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-cosmic-400">
              {products.length}
            </div>
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
  );
};
