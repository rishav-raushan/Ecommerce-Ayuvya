'use client';

import { popularCombos } from '@/lib/products';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShoppingCart, Tag } from 'lucide-react';

export default function CombosPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Value Combos</h1>
          <p className="text-gray-600 mt-2">
            Special combinations for complete wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCombos.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={combo.image}
                  alt={combo.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  Save ₹{combo.savings}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{combo.name}</h3>
                <div className="space-y-2 mb-4">
                  {combo.products.map((product) => (
                    <div key={product.id} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      <span className="text-sm">{product.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">₹{combo.price}</p>
                    <p className="text-sm text-gray-500 line-through">
                      ₹{combo.price + combo.savings}
                    </p>
                  </div>
                  <Button>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}