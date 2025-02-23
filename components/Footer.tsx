'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">Ayuvya</span>
            </div>
            <p className="text-gray-400 mb-4">
              Ancient wisdom meets modern wellness. Discover the power of Ayurvedic
              healing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                Facebook
              </a>
              <a href="#" className="hover:text-primary">
                Twitter
              </a>
              <a href="#" className="hover:text-primary">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-suggestions"
                  className="text-gray-400 hover:text-white"
                >
                  AI Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/skin-hair"
                  className="text-gray-400 hover:text-white"
                >
                  Skin & Hair Care
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/weight-power"
                  className="text-gray-400 hover:text-white"
                >
                  Weight & Power
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/daily-health"
                  className="text-gray-400 hover:text-white"
                >
                  Daily Health
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/combos"
                  className="text-gray-400 hover:text-white"
                >
                  Combos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Hauz Khas</li>
              <li>New Delhi, Delhi</li>
              <li>Phone: 1234567890</li>
              <li>Email: contact@ayuvya.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Ayuvya. All rights reserved.</p>
          <p className="mt-2">
            Developed by{' '}
            <a
              href="https://github.com/rishav-raushan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Rishav Raushan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}