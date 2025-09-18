"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

// Custom Instagram Icon Component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    program: [
      { label: "About Y-SoC", href: "/about" },
      { label: "Timeline", href: "/timeline" },
      { label: "Join Program", href: "/recruit" },
      { label: "FAQ", href: "/faq" },
    ],
    community: [
      { label: "Team", href: "/team" },
      { label: "GitHub", href: "https://github.com/ysoc-team" },
    ],
    communityPartners: [
      { label: "Our Partners", href: "/community-partners" },
      { label: "Become a Partner", href: "/contact" },
      { label: "Become Our Sponsors", href: "/sponsors" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/ysoc-team", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/y-soc", label: "LinkedIn" },
    { icon: InstagramIcon, href: "https://www.instagram.com/youthseasonofcode", label: "Instagram" },
  ]

  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-3 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-lg overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 4px rgba(59, 130, 246, 0.1)",
                        "0 0 0 0 rgba(59, 130, 246, 0.4)"
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <Image
                      src="/logo.png"
                      alt="Y-SoC Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Y-SoC</span>
                </Link>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Empowering the next generation of developers through open-source collaboration. Join thousands of
                  young developers building the future together.
                </p>
                <Badge variant="secondary" className="mb-6">
                  November 2025 - April 2026
                </Badge>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-white transition-colors text-gray-400"
                    >
                      <Link 
                        href={social.href} 
                        aria-label={social.label}
                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="font-bold text-white mb-6 text-lg">Program</h3>
                <ul className="space-y-4">
                  {footerLinks.program.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="font-bold text-white mb-6 text-lg">Community</h3>
                <ul className="space-y-4">
                  {footerLinks.community.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="font-bold text-white mb-6 text-lg">Community Partners</h3>
                <ul className="space-y-4">
                  {footerLinks.communityPartners.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="font-bold text-white mb-6 text-lg">Support</h3>
                <ul className="space-y-4">
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <p className="text-sm text-gray-400">© 2025 Y-SoC. All rights reserved.</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="hover:text-white transition-colors text-gray-400"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
