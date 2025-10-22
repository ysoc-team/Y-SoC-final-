"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import GridDotBackground from "@/components/GridDotBackground"
import Link from "next/link"
import { motion } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"
import { Shield, Eye, Lock, Database, UserCheck, Globe, Mail, ExternalLink } from "lucide-react"

export default function PrivacyPolicyPage() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement robust security measures to protect your personal information."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We clearly explain how we collect, use, and share your data."
    },
    {
      icon: Lock,
      title: "Minimal Collection",
      description: "We only collect data that is necessary for our program operations."
    },
    {
      icon: UserCheck,
      title: "Your Control",
      description: "You have control over your personal data and can request changes or deletion."
    }
  ]

  const dataTypes = [
    {
      category: "Personal Information",
      items: [
        "Full name and contact information (email, phone number)",
        "Date of birth and age verification",
        "Country of residence and timezone",
        "Educational background and experience level"
      ]
    },
    {
      category: "Technical Information",
      items: [
        "IP address and device information",
        "Browser type and version",
        "Operating system details",
        "Website usage analytics and cookies"
      ]
    },
    {
      category: "Program Data",
      items: [
        "Application submissions and responses",
        "Project contributions and code submissions",
        "Mentor-mentee interactions",
        "Program progress and achievements"
      ]
    }
  ]

  const dataUsage = [
    {
      purpose: "Program Administration",
      description: "To manage applications, assign mentors, track progress, and facilitate program activities."
    },
    {
      purpose: "Communication",
      description: "To send program updates, notifications, and respond to your inquiries."
    },
    {
      purpose: "Improvement",
      description: "To analyze program effectiveness and improve our services and user experience."
    },
    {
      purpose: "Legal Compliance",
      description: "To comply with applicable laws, regulations, and legal obligations."
    }
  ]

  const rights = [
    {
      right: "Access",
      description: "Request access to your personal data we hold about you."
    },
    {
      right: "Correction",
      description: "Request correction of inaccurate or incomplete personal data."
    },
    {
      right: "Deletion",
      description: "Request deletion of your personal data under certain circumstances."
    },
    {
      right: "Portability",
      description: "Request a copy of your data in a structured, machine-readable format."
    },
    {
      right: "Objection",
      description: "Object to processing of your personal data for certain purposes."
    },
    {
      right: "Restriction",
      description: "Request restriction of processing under certain circumstances."
    }
  ]

  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <GridDotBackground
            dotSize={2}
            dotSpacing={40}
            dotColor="#06b6d4"
            backgroundColor="transparent"
            opacity={0.3}
            animationSpeed={0.7}
            pulseIntensity={0.4}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-white/10 dark:bg-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
            className="mb-6"
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              <Shield className="w-4 h-4 mr-2" />
              Data Protection
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-8 leading-[1.3] pb-3"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.8)}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
          >
            Your privacy is important to us. This policy explains how Y-SoC collects, uses, and protects your personal information.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm shadow-xl">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Our Commitment to Privacy</h2>
                <div className="space-y-6 mb-8">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Youth Season of Code (Y-SoC) is committed to protecting your privacy and personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                    you participate in our program or use our website.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    By using our services, you agree to the collection and use of information in accordance with 
                    this policy. We will not use or share your information with anyone except as described in this 
                    Privacy Policy.
                  </p>
                </div>
                <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/20">
                  <p className="text-sm text-gray-300">
                    <strong>Last Updated:</strong> September 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-[1.3] pb-3">Our Privacy Principles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow these core principles to ensure your privacy and data protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full text-center rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                      <principle.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">{principle.title}</h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Information We Collect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect different types of information to provide and improve our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                        <Database className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{type.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {type.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">How We Use Your Information</h2>
            <p className="text-xl text-gray-300">
              We use your information for specific, legitimate purposes related to our program.
            </p>
          </motion.div>

          <div className="space-y-6">
            {dataUsage.map((usage, index) => (
              <motion.div
                key={usage.purpose}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">{usage.purpose}</h3>
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{usage.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-[1.3] pb-3">Your Privacy Rights</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have certain rights regarding your personal information under applicable privacy laws.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-300">
                        <UserCheck className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">{right.right}</h3>
                    </div>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 mt-2">{right.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm shadow-xl">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Contact Us</h2>
                <p className="text-lg text-gray-300 leading-relaxed text-center">
                  If you have any questions about this Privacy Policy or wish to exercise your privacy rights, 
                  please contact us:
                </p>
                <div className="space-y-6 text-center mt-8">
                  <div className="flex items-center justify-center space-x-3 bg-gray-800/30 rounded-lg p-4 border border-gray-700/20">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400"><strong>Email:</strong> team@ysoc.in</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button asChild className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-all duration-300">
                    <Link href="/contact">
                      Contact Us
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
