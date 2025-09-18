"use client"

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  fmp: number | null
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  })

  useEffect(() => {
    // Only run in development and if PerformanceObserver is available
    if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
            if (entry.name === 'first-meaningful-paint') {
              setMetrics(prev => ({ ...prev, fmp: entry.startTime }))
            }
            break
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
            break
          case 'first-input':
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
            break
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
            }
            break
          case 'navigation':
            setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }))
            break
        }
      })
    })

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] })
    } catch (error) {
      console.warn('Performance monitoring not fully supported:', error)
    }

    // Monitor Web Vitals
    const reportWebVitals = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }))

      // Send to analytics (replace with your analytics service)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          event_label: metric.id,
          non_interaction: true,
        })
      }
    }

    // Load web-vitals library dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      try {
        getCLS(reportWebVitals)
        getFID(reportWebVitals)
        getFCP(reportWebVitals)
        getLCP(reportWebVitals)
        getTTFB(reportWebVitals)
      } catch (error) {
        console.warn('Error initializing web vitals:', error)
      }
    }).catch(() => {
      console.warn('web-vitals library not available')
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Performance optimization suggestions
  const getPerformanceSuggestions = () => {
    const suggestions = []
    
    if (metrics.fcp && metrics.fcp > 1800) {
      suggestions.push('First Contentful Paint is slow. Consider optimizing critical resources.')
    }
    
    if (metrics.lcp && metrics.lcp > 2500) {
      suggestions.push('Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.')
    }
    
    if (metrics.fid && metrics.fid > 100) {
      suggestions.push('First Input Delay is high. Reduce JavaScript execution time.')
    }
    
    if (metrics.cls && metrics.cls > 0.1) {
      suggestions.push('Cumulative Layout Shift is high. Ensure stable layouts.')
    }
    
    if (metrics.ttfb && metrics.ttfb > 600) {
      suggestions.push('Time to First Byte is slow. Optimize server response time.')
    }
    
    return suggestions
  }

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  const suggestions = getPerformanceSuggestions()

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-sm z-50 backdrop-blur-sm">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        {metrics.fcp && <div>FCP: {Math.round(metrics.fcp)}ms</div>}
        {metrics.lcp && <div>LCP: {Math.round(metrics.lcp)}ms</div>}
        {metrics.fid && <div>FID: {Math.round(metrics.fid)}ms</div>}
        {metrics.cls && <div>CLS: {metrics.cls.toFixed(3)}</div>}
        {metrics.ttfb && <div>TTFB: {Math.round(metrics.ttfb)}ms</div>}
      </div>
      
      {suggestions.length > 0 && (
        <div className="mt-3 pt-2 border-t border-white/20">
          <h4 className="font-semibold mb-1">Suggestions:</h4>
          <ul className="space-y-1">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-yellow-300">• {suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
