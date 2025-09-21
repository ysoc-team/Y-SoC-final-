"use client";

import React, { useState, useEffect, useRef } from 'react';
import { usePerformanceOptimization } from './PerformanceMonitor';

// Import the original Prism component
import Prism from './Prism';

interface OptimizedPrismProps {
  height?: number;
  baseWidth?: number;
  animationType?: 'rotate' | 'hover' | '3drotate';
  glow?: number;
  offset?: { x?: number; y?: number };
  noise?: number;
  transparent?: boolean;
  scale?: number;
  hueShift?: number;
  colorFrequency?: number;
  hoverStrength?: number;
  inertia?: number;
  bloom?: number;
  suspendWhenOffscreen?: boolean;
  timeScale?: number;
  className?: string;
}

const OptimizedPrism: React.FC<OptimizedPrismProps> = (props) => {
  const { shouldReduceMotion, isLowEndDevice, quality } = usePerformanceOptimization();
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay rendering for better performance
          timeoutRef.current = setTimeout(() => {
            setShouldRender(true);
          }, 100);
        } else {
          setIsVisible(false);
          setShouldRender(false);
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Don't render if not visible or on low-end devices with reduced motion
  if (!isVisible || (isLowEndDevice && shouldReduceMotion)) {
    return (
      <div 
        ref={containerRef}
        className={`w-full h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg animate-pulse ${props.className || ''}`}
      />
    );
  }

  // Optimize props based on device performance
  const optimizedProps = {
    ...props,
    // Reduce complexity on low-end devices
    noise: isLowEndDevice ? (props.noise || 0) * 0.5 : props.noise,
    timeScale: shouldReduceMotion ? 0 : props.timeScale,
    animationType: shouldReduceMotion ? 'rotate' : props.animationType,
    // Reduce quality for better performance
    glow: quality === 'low' ? (props.glow || 0) * 0.7 : props.glow,
    bloom: quality === 'low' ? (props.bloom || 0) * 0.5 : props.bloom,
  };

  return (
    <div ref={containerRef} className={props.className}>
      {shouldRender ? (
        <Prism {...optimizedProps} />
      ) : (
        <div className="w-full h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedPrism;
