'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import * as crypto from 'crypto';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface StoredUser extends User {
  passwordHash: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAuthorized: (requiredRole?: 'user' | 'admin') => boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

// Helper function to hash passwords
const hashPassword = (password: string): string => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.id && parsedUser.email) {
          // Only store user info without password hash in state
          const { passwordHash, ...userInfo } = parsedUser;
          setUser(userInfo);
        } else {
          localStorage.removeItem('user');
        }
      } catch {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const login = async (email: string, password: string) => {
    try {
      if (!email || !password) {
        throw new Error('Please provide both email and password');
      }

      // Get stored users
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const storedUser = storedUsers.find((u: StoredUser) => u.email === email);

      if (!storedUser) {
        throw new Error('User not found');
      }

      // Check password
      const hashedPassword = hashPassword(password);
      if (hashedPassword !== storedUser.passwordHash) {
        throw new Error('Invalid password');
      }

      // Store user info without password hash
      const { passwordHash, ...userInfo } = storedUser;
      setUser(userInfo);
      localStorage.setItem('user', JSON.stringify(storedUser));
      
      toast({
        title: 'Welcome back!',
        description: 'Successfully logged in.',
      });
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error instanceof Error ? error.message : 'Invalid credentials',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      if (!name || !email || !password) {
        throw new Error('Please fill in all fields');
      }

      if (!validatePassword(password)) {
        throw new Error(
          'Password must be at least 8 characters long and contain uppercase, lowercase, and numbers'
        );
      }

      // Get stored users
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user already exists
      if (storedUsers.some((u: StoredUser) => u.email === email)) {
        throw new Error('User already exists');
      }

      // Create new user with hashed password
      const newUser: StoredUser = {
        id: crypto.randomBytes(16).toString('hex'),
        name,
        email,
        role: 'user',
        passwordHash: hashPassword(password),
      };

      // Store user in users array
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));

      // Store user info without password hash in state
      const { passwordHash, ...userInfo } = newUser;
      setUser(userInfo);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      toast({
        title: 'Welcome to Ayuvya!',
        description: 'Your account has been created successfully.',
      });
    } catch (error) {
      toast({
        title: 'Signup failed',
        description: error instanceof Error ? error.message : 'Registration failed',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/');
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
  };

  const isAuthorized = (requiredRole?: 'user' | 'admin'): boolean => {
    if (!user) return false;
    if (!requiredRole) return true;
    return user.role === requiredRole || user.role === 'admin';
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
        isAuthorized,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};