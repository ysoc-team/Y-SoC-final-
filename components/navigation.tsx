"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activePath, setActivePath] = useState("")

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setActivePath(window.location.pathname)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/timeline", label: "Timeline" },
    { href: "/team", label: "Team" },
    { href: "/mentors", label: "Mentors" },
    { href: "/community-partners", label: "Community Partners" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
  ]


  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-900/95 backdrop-blur-md shadow-xl" 
          : "bg-gray-900/90 backdrop-blur-md shadow-lg"
      } rounded-xl border border-gray-700/30`}
    >
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-12 sm:h-14">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <motion.div
              className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.png"
                alt="Y-SoC Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </motion.div>
            <span className="font-bold text-lg sm:text-xl text-white">Y-SoC</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-4 xl:space-x-8">
              {navItems.map((item) => {
                const isActive = activePath === item.href
                return (
                  <motion.div
                    key={item.href}
                    whileHover={animations.hover}
                    whileTap={animations.button.whileTap}
                    transition={getTransition(0.2)}
                  >
                    <Link
                      href={item.href}
                      className={`transition-all duration-200 font-medium relative group text-sm ${
                        isActive 
                          ? "text-white" 
                          : "text-gray-500 hover:text-white"
                      }`}
                      onClick={(e) => {
                        if (item.href === "/") {
                          // If we're already on the home page, just scroll to top
                          if (window.location.pathname === "/") {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }
                          // If we're on a different page, let the link navigate normally
                        }
                      }}
                    >
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Join Now Button - Right */}
          <div className="flex items-center">
            <motion.div whileHover={animations.hover} whileTap={animations.button.whileTap} transition={getTransition(0.2)}>
              <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full px-6 py-2 font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                <Link href="/recruit">Join Now</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white hover:bg-white/10">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={animations.slideDown.initial}
              animate={animations.slideDown.animate}
              exit={animations.slideDown.exit}
              transition={getTransition(0.3)}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-700/30 rounded-b-2xl">
                {navItems.map((item, index) => {
                  const isActive = activePath === item.href
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 transition-colors duration-200 font-medium rounded-md text-sm ${
                          isActive 
                            ? "text-white bg-white/10" 
                            : "text-gray-500 hover:text-white hover:bg-white/5"
                        }`}
                        onClick={(e) => {
                          setIsOpen(false)
                          if (item.href === "/") {
                            // If we're already on the home page, just scroll to top
                            if (window.location.pathname === "/") {
                              e.preventDefault()
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                            // If we're on a different page, let the link navigate normally
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  className="px-3 py-2"
                >
                  <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full font-medium transition-all duration-200 shadow-lg">
                    <Link href="/recruit">Join Now</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
