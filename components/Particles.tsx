"use client"

import { useEffect, useRef } from 'react'

export type ParticlesProps = {
  particleCount?: number
  particleSize?: number
  particleSpeed?: number
  particleColor?: string
  backgroundColor?: string
  opacity?: number
  connectionDistance?: number
  connectionColor?: string
  className?: string
}

const Particles = ({
  particleCount = 30,
  particleSize = 2,
  particleSpeed = 0.5,
  particleColor = '#3b82f6',
  backgroundColor = 'transparent',
  opacity = 0.6,
  connectionDistance = 100,
  connectionColor = '#3b82f6',
  className = ''
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef(0)
  const particlesRef = useRef<Array<{
    x: number
    y: number
    vx: number
    vy: number
    size: number
    alpha: number
  }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const initParticles = () => {
      particlesRef.current = []
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * particleSpeed * 2,
          vy: (Math.random() - 0.5) * particleSpeed * 2,
          size: particleSize + Math.random() * particleSize,
          alpha: opacity * (0.3 + Math.random() * 0.7)
        })
      }
    }

    const updateParticles = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1
        }

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(width, particle.x))
        particle.y = Math.max(0, Math.min(height, particle.y))

        // Add subtle floating motion
        particle.vx += (Math.random() - 0.5) * 0.1
        particle.vy += (Math.random() - 0.5) * 0.1

        // Limit velocity
        const maxVelocity = particleSpeed * 3
        particle.vx = Math.max(-maxVelocity, Math.min(maxVelocity, particle.vx))
        particle.vy = Math.max(-maxVelocity, Math.min(maxVelocity, particle.vy))
      })
    }

    const drawParticles = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, width, height)

      // Draw connections
      ctx.save()
      ctx.strokeStyle = connectionColor
      ctx.lineWidth = 0.5
      ctx.globalAlpha = opacity * 0.3

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const particle1 = particlesRef.current[i]
          const particle2 = particlesRef.current[j]
          
          const dx = particle1.x - particle2.x
          const dy = particle1.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const alpha = (1 - distance / connectionDistance) * opacity * 0.3
            ctx.globalAlpha = alpha
            ctx.beginPath()
            ctx.moveTo(particle1.x, particle1.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.stroke()
          }
        }
      }

      ctx.restore()

      // Draw particles
      particlesRef.current.forEach(particle => {
        ctx.save()
        ctx.globalAlpha = particle.alpha
        ctx.fillStyle = particleColor

        // Create gradient for particles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        )
        gradient.addColorStop(0, particleColor)
        gradient.addColorStop(1, `${particleColor}00`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      })
    }

    const animate = () => {
      timeRef.current += 0.016 // ~60fps
      updateParticles()
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      initParticles()
    })

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [particleCount, particleSize, particleSpeed, particleColor, backgroundColor, opacity, connectionDistance, connectionColor])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default Particles
