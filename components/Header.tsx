'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import {
  ShoppingCart,
  User,
  Search,
  Package,
  Home,
  Grid,
  Sparkles,
  Brain,
  Menu,
  Tag,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { motion } from 'framer-motion';

export default function Header() {
  const { user, isAuthenticated } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSidenav = () => {
    document.dispatchEvent(new Event('toggle-sidenav'));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b shadow-sm dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidenav}
              className="mr-2"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Ayuvya</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="ghost">
                <Grid className="mr-2 h-4 w-4" />
                All Items
              </Button>
            </Link>
            <Link href="/todays-deals">
              <Button variant="ghost" className="text-red-500 hover:text-red-600">
                <Tag className="mr-2 h-4 w-4" />
                Today's Deals
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Categories</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/categories/skin-hair">Skin & Hair Care</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/categories/weight-power">Weight & Power</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/categories/daily-intimate">Daily Intimate</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/categories/daily-health">Daily Health</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/categories/combos">Combos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/ai-suggestions">
              <Button variant="ghost">
                <Brain className="mr-2 h-4 w-4" />
                AI Suggestions
              </Button>
            </Link>
            <Link href={isAuthenticated ? '/orders' : '/auth'}>
              <Button variant="ghost">
                <Package className="mr-2 h-4 w-4" />
                Orders
              </Button>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link href={isAuthenticated ? '/profile' : '/auth'}>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={isAuthenticated ? '/cart' : '/auth'}>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            {isAuthenticated && (
              <span className="text-sm font-medium">Hi, {user?.name}</span>
            )}
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t dark:border-gray-800 p-4"
        >
          <div className="container mx-auto">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
        </motion.div>
      )}
    </header>
  );
}