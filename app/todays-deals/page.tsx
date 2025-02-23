'use client';

import { todaysDeals } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export default function TodaysDealsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Tag className="h-8 w-8 text-red-500 mr-2" />
            <h1 className="text-4xl font-bold">Today's Deals</h1>
          </div>
          <p className="text-xl text-gray-600">
            Exclusive 50% off on selected premium products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {todaysDeals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}