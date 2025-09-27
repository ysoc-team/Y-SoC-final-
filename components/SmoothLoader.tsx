"use client"

import { motion } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"

interface SmoothLoaderProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function SmoothLoader({ size = "md", className = "" }: SmoothLoaderProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-primary/20 border-t-primary rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}