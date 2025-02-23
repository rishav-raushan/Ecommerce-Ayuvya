'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import {
  Brain,
  Loader2,
  Sparkles,
  Leaf,
  Activity,
  Moon,
  Sun,
} from 'lucide-react';

interface Suggestion {
  products: Array<{
    name: string;
    description: string;
    dosage: string;
  }>;
  lifestyle: Array<{
    title: string;
    description: string;
    time: 'morning' | 'day' | 'evening' | 'night';
  }>;
  diet: Array<{
    category: string;
    items: string[];
  }>;
}

export default function AiSuggestionsPage() {
  const [loading, setLoading] = useState(false);
  const [concerns, setConcerns] = useState('');
  const [age, setAge] = useState('');
  const [lifestyle, setLifestyle] = useState('');
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulated API call - replace with actual AI integration
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuggestion({
        products: [
          {
            name: 'Ashwagandha Root Extract',
            description:
              'Natural adaptogen for stress relief and improved energy levels',
            dosage: '1 capsule twice daily after meals',
          },
          {
            name: 'Triphala Tablets',
            description: 'Supports digestive health and detoxification',
            dosage: '2 tablets before bedtime',
          },
        ],
        lifestyle: [
          {
            title: 'Morning Meditation',
            description:
              'Practice 10 minutes of mindful breathing to start your day',
            time: 'morning',
          },
          {
            title: 'Oil Pulling',
            description:
              'Swish coconut oil in mouth for 5-10 minutes before breakfast',
            time: 'morning',
          },
          {
            title: 'Evening Walk',
            description: 'Take a gentle 20-minute walk after dinner',
            time: 'evening',
          },
        ],
        diet: [
          {
            category: 'Recommended Foods',
            items: [
              'Warm cooked vegetables',
              'Whole grains',
              'Fresh fruits',
              'Herbal teas',
            ],
          },
          {
            category: 'Foods to Avoid',
            items: [
              'Cold beverages',
              'Processed foods',
              'Excessive dairy',
              'Late night meals',
            ],
          },
        ],
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTimeIcon = (time: string) => {
    switch (time) {
      case 'morning':
        return <Sun className="h-5 w-5 text-yellow-500" />;
      case 'day':
        return <Activity className="h-5 w-5 text-blue-500" />;
      case 'evening':
        return <Leaf className="h-5 w-5 text-green-500" />;
      case 'night':
        return <Moon className="h-5 w-5 text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">AI Health Consultation</h1>
          <p className="text-xl text-gray-600">
            Get personalized Ayurvedic recommendations based on your unique needs
          </p>
        </div>

        <Card className="p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Health Concerns
              </label>
              <Textarea
                value={concerns}
                onChange={(e) => setConcerns(e.target.value)}
                placeholder="Describe your health concerns and symptoms..."
                className="h-32"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Age</label>
                <Input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Your age"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Lifestyle
                </label>
                <Input
                  value={lifestyle}
                  onChange={(e) => setLifestyle(e.target.value)}
                  placeholder="Describe your daily routine..."
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Get Recommendations
                </>
              )}
            </Button>
          </form>
        </Card>

        {suggestion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Product Recommendations */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-purple-500 mr-2" />
                <h2 className="text-2xl font-semibold">
                  Recommended Products
                </h2>
              </div>
              <div className="space-y-4">
                {suggestion.products.map((product, index) => (
                  <div
                    key={index}
                    className="border-b last:border-0 pb-4 last:pb-0"
                  >
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {product.description}
                    </p>
                    <p className="text-sm text-purple-600">
                      Dosage: {product.dosage}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Lifestyle Recommendations */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Activity className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-2xl font-semibold">
                  Lifestyle Recommendations
                </h2>
              </div>
              <div className="space-y-4">
                {suggestion.lifestyle.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start border-b last:border-0 pb-4 last:pb-0"
                  >
                    {getTimeIcon(item.time)}
                    <div className="ml-3">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Dietary Recommendations */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-green-500 mr-2" />
                <h2 className="text-2xl font-semibold">
                  Dietary Recommendations
                </h2>
              </div>
              <div className="space-y-6">
                {suggestion.diet.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-2">
                      {category.category}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center text-gray-600"
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}