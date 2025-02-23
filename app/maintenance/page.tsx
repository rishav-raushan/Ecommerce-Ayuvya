'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function MaintenancePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="text-center max-w-lg mx-auto p-8 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Under Maintenance
        </h1>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          We're currently updating this page to serve you better. Please check back
          later. We apologize for any inconvenience.
        </p>
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white"
          onClick={() => router.push('/')}
        >
          <Home className="mr-2 h-5 w-5" />
          Return to Home
        </Button>
      </div>
    </div>
  );
}