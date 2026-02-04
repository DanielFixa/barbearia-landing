'use client';

import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({ src, alt, className, priority = false }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div className={`bg-gray-700 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">Imagem não disponível</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && (
        <div className={`absolute inset-0 bg-gray-700 animate-pulse ${className}`}></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
