"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load heavy 3D components
export const LazyPrism = dynamic(() => import('./Prism'), {
  loading: () => <div className="w-full h-64 bg-gray-900/50 rounded-lg animate-pulse" />,
  ssr: false,
});

export const LazyPrismaticBurst = dynamic(() => import('./PrismaticBurst'), {
  loading: () => <div className="w-full h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg animate-pulse" />,
  ssr: false,
});

export const LazyPixelBlast = dynamic(() => import('./PixelBlast'), {
  loading: () => <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5" />,
  ssr: false,
});

export const LazyBackgroundBeams = dynamic(() => import('./ui/background-beams-with-collision'), {
  loading: () => <div className="w-full h-full bg-gray-900/30" />,
  ssr: false,
});

// Performance-optimized wrapper for heavy components
export const OptimizedHeavyComponent = ({ 
  children, 
  fallback = <div className="w-full h-64 bg-gray-900/50 rounded-lg animate-pulse" />,
  delay = 100 
}: { 
  children: React.ReactNode; 
  fallback?: React.ReactNode;
  delay?: number;
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [hasIntersected, setHasIntersected] = React.useState(false);
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected) {
        setIsIntersecting(true);
        setHasIntersected(true);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return [ref, isIntersecting] as const;
};
