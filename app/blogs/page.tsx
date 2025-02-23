'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'The Power of Ashwagandha: Ancient Adaptogen for Modern Stress',
    excerpt: 'Discover how this powerful herb can help manage stress and boost immunity...',
    image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee',
    author: 'Dr. Priya Sharma',
    date: '2024-03-20',
    category: 'Herbs & Supplements',
  },
  {
    id: 2,
    title: 'Ayurvedic Daily Routine: Balance Your Doshas',
    excerpt: 'Learn how to incorporate Ayurvedic principles into your daily life...',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
    author: 'Dr. Rajesh Kumar',
    date: '2024-03-18',
    category: 'Lifestyle',
  },
  {
    id: 3,
    title: 'Natural Remedies for Better Sleep',
    excerpt: 'Explore traditional Ayurvedic solutions for quality sleep and relaxation...',
    image: 'https://images.unsplash.com/photo-1511295742362-92c1f4a6a3dc',
    author: 'Dr. Amit Patel',
    date: '2024-03-15',
    category: 'Wellness',
  },
  {
    id: 4,
    title: 'Understanding Your Body Type: Vata, Pitta, Kapha',
    excerpt: 'A comprehensive guide to identifying and balancing your dosha...',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
    author: 'Dr. Priya Sharma',
    date: '2024-03-12',
    category: 'Education',
  },
  {
    id: 5,
    title: 'Seasonal Eating: Ayurvedic Perspective',
    excerpt: 'Align your diet with natures rhythm for optimal health...',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    author: 'Dr. Rajesh Kumar',
    date: '2024-03-10',
    category: 'Nutrition',
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Ayurvedic Wisdom Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Insights and knowledge from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 line-clamp-2 text-gray-900 dark:text-gray-100">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{blog.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <Link
                  href={`/blogs/${blog.id}`}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}