"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Particles from "@/components/Particles"
import Link from "next/link"
import { motion } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"
import { Calendar, Users, Lightbulb, Code, Trophy, Star, ArrowRight, CheckCircle, Clock } from "lucide-react"

export default function TimelinePage() {

  const timelineEvents = [
    {
      month: "Phase 1",
      title: "Registration & Onboarding",
      icon: Calendar,
      description: "Applications open for Project Leads, Mentors, and Participants. Teams are formed and projects are introduced.",
      highlights: [],
      accentColor: "#0096FF",
      status: "current",
    },
    {
      month: "Phase 2",
      title: "Community Bonding",
      icon: Users,
      description: "Contributors connect with mentors, explore beginner-friendly issues, and learn through workshops.",
      highlights: [],
      accentColor: "#00E0FF",
      status: "upcoming",
    },
    {
      month: "Phase 3",
      title: "Active Contribution",
      icon: Code,
      description: "Core development begins with pull requests, code reviews, and teamwork.",
      highlights: [],
      accentColor: "#00FFA3",
      status: "upcoming",
    },
    {
      month: "Phase 4",
      title: "Refinement & Completion",
      icon: Lightbulb,
      description: "Features are polished, bugs are fixed, and documentation is improved.",
      highlights: [],
      accentColor: "#CFFF04",
      status: "upcoming",
    },
    {
      month: "Phase 5",
      title: "Final Showcase",
      icon: Trophy,
      description: "Completed projects are presented to the community, with recognition for outstanding contributors.",
      highlights: [],
      accentColor: "#9D4DFF",
      status: "upcoming",
    }
  ]


  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Particles Background - Fire Effect */}
        <div className="absolute inset-0">
          {/* Red particles */}
          <Particles
            particleCount={25}
            particleSize={3}
            particleSpeed={1.0}
            particleColor="#FF0000"
            backgroundColor="transparent"
            opacity={0.5}
            connectionDistance={80}
            connectionColor="#FF3333"
          />
          {/* Orange particles */}
          <Particles
            particleCount={25}
            particleSize={4}
            particleSpeed={1.4}
            particleColor="#FF6B35"
            backgroundColor="transparent"
            opacity={0.6}
            connectionDistance={90}
            connectionColor="#FF8C42"
          />
          {/* Amber particles */}
          <Particles
            particleCount={20}
            particleSize={2}
            particleSpeed={0.8}
            particleColor="#FFA500"
            backgroundColor="transparent"
            opacity={0.4}
            connectionDistance={70}
            connectionColor="#FFB84D"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/3 to-yellow-500/5" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              Program Flow
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6 leading-[1.3] pb-2">Your 6-Month Journey</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From registration to showcase, follow the complete Y-SoC timeline and see how you'll grow as a developer
              and contributor to the open-source community.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">Program Flow</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Each phase is carefully designed to maximize learning, collaboration, and project success
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 transform -translate-x-1/2 shadow-lg shadow-gray-500/20" />

            {/* Timeline Dots */}
            {timelineEvents.map((event, index) => (
              <div
                key={`dot-${event.month}`}
                className={`absolute left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 ${
                  event.status === "current" 
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50" 
                    : "bg-gray-600 shadow-lg shadow-gray-500/30"
                }`}
                style={{
                  top: `${index * 20}rem` // Position dots at correct intervals
                }}
              />
            ))}


            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.month}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div 
                      className="bg-[#1a1a2e] rounded-2xl p-6 border border-gray-600/40 hover:border-gray-500/60 transition-all duration-300 shadow-lg hover:shadow-xl"
                      style={{
                        borderLeftColor: event.accentColor,
                        borderLeftWidth: '4px'
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: event.accentColor,
                            boxShadow: `0 0 20px ${event.accentColor}40`
                          }}
                        >
                          <event.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-medium text-gray-300">{event.month}</span>
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{
                                backgroundColor: `${event.accentColor}20`,
                                color: event.accentColor,
                                border: `1px solid ${event.accentColor}40`
                              }}
                            >
                              {event.status === "current" ? "Current" : "Upcoming"}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                          <p className="text-gray-200 leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/40 via-gray-800/20 to-gray-900/40 relative overflow-hidden page-transition">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't miss out on this incredible opportunity to grow, learn, and contribute to meaningful projects. Your
              open-source journey starts with a single application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
              >
                <Link href="/recruit" className="flex items-center">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
              >
                <Link href="/about">Learn More About Y-SoC</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
