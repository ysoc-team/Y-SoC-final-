"use client"

import { useEffect, useRef, useCallback } from 'react'
import { useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion'

interface SmoothnessOptimizerProps {
  children: React.ReactNode
}

export function SmoothnessOptimizer({ children }: SmoothnessOptimizerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const frameCountRef = useRef<number>(0)
  const fpsRef = useRef<number>(60)

  // Advanced scroll optimization
  const { scrollY } = useScroll()
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
    restDelta: 0.001,
    restSpeed: 0.001
  })

  // FPS monitoring and adaptive quality
  const updateFPS = useCallback(() => {
    const now = performance.now()
    frameCountRef.current++
    
    if (now - lastTimeRef.current >= 1000) {
      fpsRef.current = frameCountRef.current
      frameCountRef.current = 0
      lastTimeRef.current = now
      
      // Adjust animation quality based on FPS
      const quality = fpsRef.current > 50 ? 1 : fpsRef.current > 30 ? 0.7 : 0.5
      document.documentElement.style.setProperty('--animation-quality', quality.toString())
    }
    
    rafRef.current = requestAnimationFrame(updateFPS)
  }, [])

  // Smooth scroll implementation
  const smoothScrollTo = useCallback((targetY: number, duration: number = 1000) => {
    if (typeof window === 'undefined') return
    
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)
      
      window.scrollTo(0, startY + distance * easedProgress)
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }, [])

  // Intersection Observer for smooth animations
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement
          if (entry.isIntersecting) {
            element.style.willChange = 'transform, opacity'
            element.classList.add('animate-in')
          } else {
            element.style.willChange = 'auto'
            element.classList.remove('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    const elements = containerRef.current.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Performance monitoring
  useEffect(() => {
    rafRef.current = requestAnimationFrame(updateFPS)
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [updateFPS])

  // Smooth scroll on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Smooth scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Add smooth scroll to all internal links
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      
      if (link) {
        e.preventDefault()
        const targetId = link.getAttribute('href')?.slice(1)
        const targetElement = document.getElementById(targetId || '')
        
        if (targetElement) {
          const targetY = targetElement.offsetTop - 80 // Account for fixed header
          smoothScrollTo(targetY)
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [smoothScrollTo])

  // Optimize scroll performance
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll-based animations here
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="smoothness-optimized"
      style={{
        '--smooth-scroll-y': smoothScrollY.get(),
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
