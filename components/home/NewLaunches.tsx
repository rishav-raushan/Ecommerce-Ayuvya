'use client';

import { newLaunches } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

export default function NewLaunches() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">New Launches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newLaunches.map((product, index) => (
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
    </section>
  );
}