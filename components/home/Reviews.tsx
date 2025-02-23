'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5,
    review:
      'Amazing products! The Ashwagandha supplement has significantly improved my sleep quality and reduced stress levels.',
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    rating: 5,
    review:
      'The hair care combo has worked wonders for my hair fall issues. Highly recommended!',
  },
  {
    id: 3,
    name: 'Anita Desai',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    rating: 4,
    review:
      'Natural ingredients and effective results. The face pack has given me clear, glowing skin.',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    rating: 5,
    review:
      'Great customer service and fast delivery. The weight management products are showing good results.',
  },
  {
    id: 5,
    name: 'Meera Reddy',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    rating: 5,
    review:
      'The daily health supplements have boosted my immunity. Thank you, Ayuvya!',
  },
];

export default function Reviews() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}