import { Shield, Truck, Zap } from "lucide-react";


export const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Free Shipping
            </h3>
            <p className="text-gray-300">
              Free shipping on all orders over $50 worldwide
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-nebula-600 to-stardust-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Quality Guarantee
            </h3>
            <p className="text-gray-300">
              30-day money-back guarantee on all products
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-stardust-600 to-cosmic-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-300">
              Express delivery available in 2-3 business days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
