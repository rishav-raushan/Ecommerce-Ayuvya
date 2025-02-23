'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced Gradient Orbs with more vibrant colors */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-300/40 to-pink-300/40 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-blue-300/30 to-cyan-300/30 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-green-300/30 to-emerald-300/30 blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -70, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Enhanced Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-${i % 2 ? 2 : 1} h-${i % 2 ? 2 : 1} rounded-full ${
            i % 3 === 0
              ? 'bg-purple-500/30'
              : i % 3 === 1
              ? 'bg-blue-500/30'
              : 'bg-emerald-500/30'
          }`}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}