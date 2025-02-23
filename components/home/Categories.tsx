'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'skin-hair',
    name: 'Skin & Hair Care',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908',
    description: 'Natural solutions for radiant skin and healthy hair',
  },
  {
    id: 'weight-power',
    name: 'Weight & Power',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    description: 'Ayurvedic supplements for strength and fitness',
  },
  {
    id: 'daily-intimate',
    name: 'Daily Intimate',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a',
    description: 'Gentle care for intimate wellness',
  },
  {
    id: 'daily-health',
    name: 'Daily Health',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
    description: 'Essential supplements for daily vitality',
  },
  {
    id: 'combos',
    name: 'Combos',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    description: 'Value packs for complete wellness',
  },
];

export default function Categories() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-center opacity-90">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}