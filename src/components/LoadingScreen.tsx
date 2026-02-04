'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isClient || !isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black-950 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Animated logo circle */}
          <div className="absolute inset-0 border-4 border-gold-600/20 rounded-full animate-ping"></div>
          <div className="absolute inset-2 border-4 border-gold-600/40 rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
          <div className="absolute inset-4 border-4 border-gold-600 rounded-full animate-pulse"></div>
          
          {/* Logo text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-vintage text-gold-500 tracking-wider">
              BARBER
              <span className="block text-gold-600 text-lg">SHOP</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-charcoal-800 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-gold-600 to-gold-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <p className="text-gold-400 text-sm animate-pulse">
          Preparando sua experiência premium...
        </p>
      </div>
    </div>
  );
}
