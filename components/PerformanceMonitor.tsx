"use client";

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  isLowPerformance: boolean;
}

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    renderTime: 0,
    isLowPerformance: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 60;

    const measurePerformance = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;

        // Get memory usage if available
        const memory = (performance as any).memory;
        const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0;

        // Measure render time
        const renderStart = performance.now();
        requestAnimationFrame(() => {
          const renderTime = performance.now() - renderStart;
          
          setMetrics({
            fps,
            memoryUsage,
            renderTime: Math.round(renderTime * 100) / 100,
            isLowPerformance: fps < 30 || memoryUsage > 100,
          });
        });
      }

      requestAnimationFrame(measurePerformance);
    };

    measurePerformance();

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-xs font-mono text-white">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-2 h-2 rounded-full ${metrics.isLowPerformance ? 'bg-red-500' : 'bg-green-500'}`} />
        <span>Performance Monitor</span>
      </div>
      <div className="space-y-1">
        <div>FPS: <span className={metrics.fps < 30 ? 'text-red-400' : 'text-green-400'}>{metrics.fps}</span></div>
        <div>Memory: <span className={metrics.memoryUsage > 100 ? 'text-red-400' : 'text-blue-400'}>{metrics.memoryUsage}MB</span></div>
        <div>Render: <span className="text-yellow-400">{metrics.renderTime}ms</span></div>
      </div>
      <div className="text-gray-400 mt-2 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

// Performance optimization hook
export const usePerformanceOptimization = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    // Check for low-end device
    const isLowEnd = navigator.hardwareConcurrency <= 2 || 
                    (navigator as any).deviceMemory <= 4 ||
                    window.innerWidth < 768;
    setIsLowEndDevice(isLowEnd);

    // Monitor performance and adjust accordingly
    let frameCount = 0;
    let lastTime = performance.now();

    const checkPerformance = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 2000) {
        const fps = (frameCount * 1000) / (currentTime - lastTime);
        if (fps < 30) {
          setShouldReduceMotion(true);
        }
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(checkPerformance);
    };

    checkPerformance();
  }, []);

  return {
    shouldReduceMotion,
    isLowEndDevice,
    quality: isLowEndDevice ? 'low' : 'high',
  };
};