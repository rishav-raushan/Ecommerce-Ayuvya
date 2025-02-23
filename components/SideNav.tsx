'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button } from './ui/button';
import {
  Info,
  BookOpen,
  Star,
  Phone,
  Settings,
  LogOut,
  Menu,
  Brain,
} from 'lucide-react';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleToggle = () => setIsOpen(!isOpen);
    document.addEventListener('toggle-sidenav', handleToggle);
    return () => document.removeEventListener('toggle-sidenav', handleToggle);
  }, [isOpen]);

  const navItems = [
    { 
      id: 'about',
      href: '/about', 
      icon: <Info className="h-5 w-5" />, 
      label: 'About Us' 
    },
    {
      id: 'blogs',
      href: '/blogs',
      icon: <BookOpen className="h-5 w-5" />,
      label: 'Blogs',
    },
    {
      id: 'ai-suggestions',
      href: '/ai-suggestions',
      icon: <Brain className="h-5 w-5" />,
      label: 'AI Suggestions',
    },
    {
      id: 'reviews',
      href: '/reviews',
      icon: <Star className="h-5 w-5" />,
      label: 'Reviews',
    },
    {
      id: 'contact',
      href: '/contact',
      icon: <Phone className="h-5 w-5" />,
      label: 'Contact Us',
    },
    {
      id: 'settings',
      href: '/settings',
      icon: <Settings className="h-5 w-5" />,
      label: 'Settings',
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-800 border-r dark:border-gray-700 shadow-lg transition-transform duration-300 ease-in-out z-40 w-64 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4 pt-20">
          <div className="flex-1 space-y-2">
            {navItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>
          {isAuthenticated && (
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 mt-4"
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          )}
        </div>
      </div>
    </>
  );
}