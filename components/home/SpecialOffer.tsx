'use client';

import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SpecialOffer() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl overflow-hidden"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-white text-center lg:text-left mb-8 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Gift className="h-12 w-12 mr-4" />
                <h2 className="text-4xl font-bold">Special Bundle Offer!</h2>
              </div>
              <p className="text-xl opacity-90 mb-6">
                Buy any 3 products and get amazing benefits:
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center justify-center lg:justify-start">
                  <span className="w-2 h-2 bg-white rounded-full mr-3" />
                  15% off on your entire order
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <span className="w-2 h-2 bg-white rounded-full mr-3" />
                  Free shipping across India
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <span className="w-2 h-2 bg-white rounded-full mr-3" />
                  Free wellness consultation
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-white text-center mb-6">
                <p className="text-6xl font-bold mb-2">15%</p>
                <p className="text-2xl">OFF</p>
              </div>
              <Button size="lg" variant="secondary" className="text-lg">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}