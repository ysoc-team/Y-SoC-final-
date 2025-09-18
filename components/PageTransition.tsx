"use client"

import { motion } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <motion.div
      initial={animations.pageTransition.initial}
      animate={animations.pageTransition.animate}
      exit={animations.pageTransition.exit}
      transition={animations.pageTransition.transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}
