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
import { Users, Lightbulb, Code, Trophy, Star, ArrowRight, CheckCircle, BookOpen, GitBranch } from "lucide-react"

export default function TimelinePage() {

  const timelineEvents = [
    {
      month: "1 Feb – 7 Feb",
      phase: "Phase 0",
      title: "Onboarding & Culture",
      icon: BookOpen,
      description: "Get oriented with open-source mindset, Git/GitHub workflow, and community norms.",
      highlights: [
        "Orientation and Open-Source mindset",
        "Git/GitHub workflow: Issues → Branch → PR → Review → Merge",
        "Tooling setup and community norms",
      ],
      workshops: [],
      awards: [],
      accentColor: "#0096FF",
      status: "upcoming",
    },
    {
      month: "8 Feb – 28 Feb",
      phase: "Phase 1",
      title: "Guided Contribution Sprint",
      icon: Code,
      description: "Learners act as Contributors with assigned beginner-friendly issues.",
      highlights: [
        "Learners act as Contributors",
        "Assigned beginner-friendly issues",
      ],
      workshops: [],
      awards: [],
      accentColor: "#00E0FF",
      status: "current",
    },
    {
      month: "1 Mar – 31 Mar",
      phase: "Phase 2",
      title: "Independent Contribution & Collaboration",
      icon: Users,
      description: "Self-picked issues and collaboration with the community.",
      highlights: [
        "Self-picked issues and collaboration",
      ],
      workshops: [],
      awards: [],
      accentColor: "#00FFA3",
      status: "upcoming",
    },
    {
      month: "1 Apr – 15 Apr",
      phase: "Phase 3",
      title: "Hack & Build Phase",
      icon: GitBranch,
      description: "Internal Hackathon with feature/module development via issues and PRs.",
      highlights: [
        "Internal Hackathon",
        "Feature/module development via issues and PRs",
      ],
      workshops: [],
      awards: [],
      accentColor: "#CFFF04",
      status: "upcoming",
    },
    {
      month: "16 Apr – 30 Apr",
      phase: "Phase 4",
      title: "Maintainer Shadowing",
      icon: Star,
      description: "Leaderboard updating, PR reviews, issue labeling, and mentoring.",
      highlights: [
        "Leaderboard updating",
        "PR reviews, issue labeling, mentoring",
      ],
      workshops: [],
      awards: [],
      accentColor: "#9D4DFF",
      status: "upcoming",
    },
    {
      month: "1 May – Mid May",
      phase: "Phase 5",
      title: "Open Innovation Sprint",
      icon: Lightbulb,
      description: "Open-ended Hackathon with major enhancements.",
      highlights: [
        "Open-ended Hackathon",
        "Major enhancements",
      ],
      workshops: [],
      awards: [],
      accentColor: "#FF6B6B",
      status: "upcoming",
    },
    {
      month: "—",
      phase: "Final",
      title: "Evaluation & Recognition",
      icon: Trophy,
      description: "Final evaluation based on quality of PRs, issue discussions, reviews and collaboration.",
      highlights: [
        "Quality of PRs",
        "Issue discussions",
        "Reviews and collaboration",
      ],
      workshops: [],
      awards: ["Top Contributor", "Best Reviewer", "Best Maintainer", "Community Builder"],
      accentColor: "#FFD93D",
      status: "upcoming",
    },
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
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 
             text-blue-400 hover:bg-blue-500/20 
             transition-all duration-300 
             leading-normal pb-1 overflow-visible">
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
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6 leading-[1.3] pb-2">Program Flow</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Each phase is carefully designed to maximize learning, collaboration, and project success
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - spans full height of content */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 transform -translate-x-1/2 shadow-lg shadow-gray-500/20 z-0" />
            {/* Blue progress trail - from top to current phase */}
            <div
              className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 transform -translate-x-1/2 shadow-lg shadow-blue-500/30 z-[1] transition-all duration-500"
              style={{
                height: `${Math.max(0, ((timelineEvents.findIndex((e) => e.status === "current") + 0.5) / timelineEvents.length) * 100)}%`,
              }}
            />

            <div className="space-y-16 relative">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={`${event.phase}-${event.title}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot - first at top of line, others centered with card */}
                  <div
                    className={`absolute left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 ${
                      index === 0 ? "top-0" : "top-1/2 -translate-y-1/2"
                    } ${
                      event.status === "current"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50"
                        : "bg-gray-600 shadow-lg shadow-gray-500/30"
                    }`}
                  />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div
                      className="bg-[#1a1a2e] rounded-2xl p-6 border border-gray-600/40 hover:border-gray-500/60 transition-all duration-300 shadow-lg hover:shadow-xl"
                      style={{
                        borderLeftColor: event.accentColor,
                        borderLeftWidth: "4px",
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: event.accentColor,
                            boxShadow: `0 0 20px ${event.accentColor}40`,
                          }}
                        >
                          <event.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <span className="text-sm font-medium text-gray-300">{event.phase}</span>
                            {event.month !== "—" && (
                              <span className="text-sm text-gray-400">• {event.month}</span>
                            )}
                            <span
                              className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{
                                backgroundColor: `${event.accentColor}20`,
                                color: event.accentColor,
                                border: `1px solid ${event.accentColor}40`,
                              }}
                            >
                              {event.status === "current" ? "Current" : "Upcoming"}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                          <p className="text-gray-200 leading-relaxed mb-4">{event.description}</p>
                          {event.highlights && event.highlights.length > 0 && (
                            <ul className="space-y-2 mb-4">
                              {event.highlights.map((item, i) => (
                                <li key={i} className="text-gray-300 flex items-start gap-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {event.awards && event.awards.length > 0 && (
                            <div>
                              <p className="text-sm font-semibold text-amber-400 mb-2">Awards:</p>
                              <div className="flex flex-wrap gap-2">
                                {event.awards.map((a, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-sm"
                                  >
                                    {a}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
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
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6 leading-[1.3] pb-3">Ready to Start Your Journey?</h2>
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
