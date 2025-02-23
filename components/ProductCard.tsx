'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/button';
import { Star, ShoppingCart, Tag } from 'lucide-react';
import { type Product } from '@/lib/products';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      router.push('/auth');
      return;
    }
    
    addToCart(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discountedPrice = product.discount 
    ? Math.round(product.price * (1 - product.discount / 100)) 
    : product.price;

  return (
    <div
      onClick={() => router.push(`/products/${product.id}`)}
      className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            {product.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold line-clamp-1 text-gray-900 dark:text-gray-100">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-1">
          {product.description}
        </p>
        <div className="flex items-center mt-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-200">
            {product.rating}
          </span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {product.reviews} reviews
          </span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
              ₹{discountedPrice}
            </span>
            {product.discount && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ₹{product.price}
              </span>
            )}
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}