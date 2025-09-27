"use client"

import { useEffect, useRef } from 'react'

export type GridDotBackgroundProps = {
  dotSize?: number
  dotSpacing?: number
  dotColor?: string
  backgroundColor?: string
  opacity?: number
  animationSpeed?: number
  pulseIntensity?: number
  className?: string
}

const GridDotBackground = ({
  dotSize = 2,
  dotSpacing = 40,
  dotColor = '#3b82f6',
  backgroundColor = 'transparent',
  opacity = 0.3,
  animationSpeed = 1,
  pulseIntensity = 0.5,
  className = ''
}: GridDotBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef(0)

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

    const drawDots = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, width, height)

      const cols = Math.ceil(width / dotSpacing) + 1
      const rows = Math.ceil(height / dotSpacing) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * dotSpacing
          const y = j * dotSpacing

          // Calculate distance from center for wave effect
          const centerX = width / 2
          const centerY = height / 2
          const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
          const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2)

          // Create wave animation
          const wave = Math.sin((distance / maxDistance) * Math.PI * 4 - timeRef.current * animationSpeed) * 0.5 + 0.5
          const pulse = Math.sin(timeRef.current * animationSpeed * 2 + distance * 0.01) * pulseIntensity + 1

          // Calculate opacity based on wave and pulse
          const dotOpacity = opacity * wave * pulse
          const currentDotSize = dotSize * pulse

          if (dotOpacity > 0.01) {
            ctx.save()
            ctx.globalAlpha = dotOpacity
            ctx.fillStyle = dotColor
            ctx.beginPath()
            ctx.arc(x, y, currentDotSize, 0, Math.PI * 2)
            ctx.fill()
            ctx.restore()
          }
        }
      }
    }

    const animate = () => {
      timeRef.current += 0.016 // ~60fps
      drawDots()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [dotSize, dotSpacing, dotColor, backgroundColor, opacity, animationSpeed, pulseIntensity])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default GridDotBackground
