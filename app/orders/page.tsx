'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  ShoppingBag,
} from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered';
  items: OrderItem[];
  total: number;
  trackingId: string;
}

export default function OrdersPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD001',
      date: '2024-03-15',
      status: 'delivered',
      items: [
        {
          id: '1',
          name: 'Ashwagandha Root Extract',
          price: 599,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee',
        },
      ],
      total: 1198,
      trackingId: 'TRK123456789',
    },
    {
      id: 'ORD002',
      date: '2024-03-18',
      status: 'shipped',
      items: [
        {
          id: '2',
          name: 'Neem & Tulsi Face Pack',
          price: 399,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
        },
      ],
      total: 399,
      trackingId: 'TRK987654321',
    },
  ]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
    }
  }, [isAuthenticated, router]);

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'processing':
        return 'Processing';
      case 'shipped':
        return 'Shipped';
      case 'delivered':
        return 'Delivered';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Your Orders</h1>
          <p className="text-gray-600 mt-2">
            Track and manage your orders
          </p>
        </div>

        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                    <p className="text-sm text-gray-600">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(order.status)}
                    <span className="font-medium">
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4"
                    >
                      <div className="relative w-20 h-20">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <p className="font-semibold">₹{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">
                        Tracking ID: {order.trackingId}
                      </p>
                      <p className="font-bold">Total: ₹{order.total}</p>
                    </div>
                    <Button variant="outline">Track Order</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-8 text-center">
            <Package className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
            <p className="text-gray-600 mb-4">
              Start shopping to see your orders here
            </p>
            <Button onClick={() => router.push('/products')}>
              <ShoppingBag className="h-4 w-4 mr-2" />
              Start Shopping
            </Button>
          </Card>
        )}
      </motion.div>
    </div>
  );
}