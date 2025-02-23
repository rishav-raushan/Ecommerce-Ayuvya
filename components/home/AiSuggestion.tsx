'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Loader2, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AiSuggestion() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    products: string[];
    remedies: string[];
  } | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Simulated API call - replace with actual Gemini AI integration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setResult({
        products: [
          'Ashwagandha Root Extract',
          'Turmeric Supplement',
          'Triphala Tablets',
        ],
        remedies: [
          'Practice meditation for 10 minutes daily',
          'Follow a balanced diet rich in whole grains',
          'Get 7-8 hours of quality sleep',
        ],
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">AI Health Consultation</h2>
          <p className="text-gray-600">
            Describe your health concerns and get personalized Ayurvedic
            recommendations
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <Input
            placeholder="Describe your health concern..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSearch} disabled={loading || !query}>
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Search className="h-4 w-4 mr-2" />
            )}
            Get Suggestions
          </Button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-5 w-5 text-purple-500 mr-2" />
                  <h3 className="text-xl font-semibold">Recommended Products</h3>
                </div>
                <ul className="space-y-3">
                  {result.products.map((product, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 hover:text-gray-900"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                      {product}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-5 w-5 text-indigo-500 mr-2" />
                  <h3 className="text-xl font-semibold">Natural Remedies</h3>
                </div>
                <ul className="space-y-3">
                  {result.remedies.map((remedy, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 hover:text-gray-900"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                      {remedy}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}