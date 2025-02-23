'use client';

import { bestSellers } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function BestSellers() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}