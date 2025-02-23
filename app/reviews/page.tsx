'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: 'Arjun Patel',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    rating: 5,
    review: 'The Ashwagandha supplements have significantly improved my sleep quality and stress levels. Highly recommended!',
    date: '2024-03-20',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5,
    review: 'Amazing results with the hair care products. My hair feels stronger and healthier than ever.',
    date: '2024-03-18',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    rating: 4,
    review: 'The weight management products have helped me achieve my fitness goals. Great natural alternative!',
    date: '2024-03-15',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    rating: 5,
    review: 'Excellent customer service and prompt delivery. The products are authentic and effective.',
    date: '2024-03-12',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    rating: 5,
    review: 'The immunity booster pack has kept my family healthy throughout the season. Thank you, Ayuvya!',
    date: '2024-03-10',
  },
  {
    id: 6,
    name: 'Meera Reddy',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    rating: 4,
    review: 'Love the natural ingredients and the traditional formulations. Will definitely order again.',
    date: '2024-03-08',
  },
  {
    id: 7,
    name: 'Aditya Kumar',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    rating: 5,
    review: 'The skin care products have transformed my complexion. Very satisfied with the results.',
    date: '2024-03-05',
  },
  {
    id: 8,
    name: 'Anjali Desai',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    rating: 5,
    review: 'Quality products at reasonable prices. The combo packs offer great value for money.',
    date: '2024-03-03',
  },
  {
    id: 9,
    name: 'Rajesh Malhotra',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    rating: 4,
    review: 'The joint care supplements have made a noticeable difference in my mobility.',
    date: '2024-03-01',
  },
  {
    id: 10,
    name: 'Kavita Iyer',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
    rating: 5,
    review: 'Authentic Ayurvedic products with modern packaging. Very impressed with the quality.',
    date: '2024-02-28',
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Customer Reviews
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See what our customers have to say about their experience with Ayuvya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
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
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}