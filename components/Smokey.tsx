"use client"

import { useEffect, useRef } from 'react'

export type SmokeyProps = {
  particleCount?: number
  particleSize?: number
  particleSpeed?: number
  particleColor?: string
  backgroundColor?: string
  opacity?: number
  windStrength?: number
  riseSpeed?: number
  className?: string
}

const Smokey = ({
  particleCount = 20,
  particleSize = 3,
  particleSpeed = 0.5,
  particleColor = '#3b82f6',
  backgroundColor = 'transparent',
  opacity = 0.4,
  windStrength = 0.3,
  riseSpeed = 0.8,
  className = ''
}: SmokeyProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef(0)
  const particlesRef = useRef<Array<{
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
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
          y: height + Math.random() * 100,
          vx: (Math.random() - 0.5) * windStrength * 2,
          vy: -riseSpeed - Math.random() * riseSpeed * 0.5,
          life: Math.random(),
          maxLife: 1,
          size: particleSize + Math.random() * particleSize,
          alpha: opacity * (0.3 + Math.random() * 0.7)
        })
      }
    }

    const updateParticles = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx * particleSpeed
        particle.y += particle.vy * particleSpeed

        // Add wind effect
        particle.vx += (Math.random() - 0.5) * windStrength * 0.1
        particle.vy += (Math.random() - 0.5) * 0.1

        // Update life
        particle.life -= 0.01 * particleSpeed
        particle.alpha = (particle.life / particle.maxLife) * opacity

        // Reset particle if it's dead or out of bounds
        if (particle.life <= 0 || particle.y < -50 || particle.x < -50 || particle.x > width + 50) {
          particle.x = Math.random() * width
          particle.y = height + Math.random() * 100
          particle.vx = (Math.random() - 0.5) * windStrength * 2
          particle.vy = -riseSpeed - Math.random() * riseSpeed * 0.5
          particle.life = particle.maxLife
          particle.alpha = opacity * (0.3 + Math.random() * 0.7)
        }
      })
    }

    const drawParticles = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, width, height)

      particlesRef.current.forEach(particle => {
        ctx.save()
        ctx.globalAlpha = particle.alpha
        ctx.fillStyle = particleColor

        // Create smoke-like effect with multiple circles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        gradient.addColorStop(0, `${particleColor}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(0.5, `${particleColor}${Math.floor(particle.alpha * 128).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, `${particleColor}00`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Add smaller inner circle for more realistic smoke
        ctx.globalAlpha = particle.alpha * 0.6
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
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
  }, [particleCount, particleSize, particleSpeed, particleColor, backgroundColor, opacity, windStrength, riseSpeed])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default Smokey
