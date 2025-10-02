"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DarkVeil from "@/components/DarkVeil"
import Link from "next/link"
import { motion } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"
import { Target, Eye, Users, Code, Target as ProblemArchitect, GraduationCap, Crown, ArrowRight, Globe, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  const memberCategories = [
    {
      icon: Crown,
      title: "Project Leads",
      description:
        "Visionary leaders who guide open-source projects from conception to completion. They coordinate teams, make technical decisions, and ensure project success.",
      skills: ["Project Management", "Technical Leadership", "Team Coordination", "Strategic Planning"],
      color: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      icon: Users,
      title: "Mentors",
      description:
        "Experienced developers who share knowledge and guide newcomers. They provide technical guidance, code reviews, and career advice.",
      skills: ["Code Review", "Technical Guidance", "Career Mentoring", "Knowledge Sharing"],
      color: "bg-teal-500",
      textColor: "text-teal-500",
    },
    {
      icon: Code,
      title: "Contributors",
      description:
        "The backbone of our community who write code, fix bugs, and build amazing features. They turn ideas into reality through their coding skills.",
      skills: ["Software Development", "Bug Fixing", "Feature Implementation", "Testing"],
      color: "bg-green-500",
      textColor: "text-green-500",
    },
    {
      icon: ProblemArchitect,
      title: "Problem Architects",
      description:
        "Strategic thinkers who design clear, challenging problem statements that drive innovation and learning. They craft problems that inspire creative solutions.",
      skills: ["Problem Design", "Strategic Thinking", "Innovation", "Learning Design"],
      color: "bg-purple-500",
      textColor: "text-purple-500",
    },
    {
      icon: GraduationCap,
      title: "Learners",
      description:
        "Enthusiastic beginners starting their open-source journey. They learn by doing, contributing, and growing with the community.",
      skills: ["Learning", "Contributing", "Collaboration", "Growth Mindset"],
      color: "bg-orange-500",
      textColor: "text-orange-500",
    },
  ]

  const values = [
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "We believe in the power of diverse perspectives from around the world working together.",
    },
    {
      icon: Heart,
      title: "Inclusive Community",
      description: "Everyone is welcome regardless of their background, experience level, or location.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We encourage creative solutions and cutting-edge approaches to problem-solving.",
    },
  ]

  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* DarkVeil Background */}
        <div className="absolute inset-0 opacity-60 dark:opacity-40">
          <DarkVeil />
        </div>
        
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/10 dark:bg-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              About Y-SoC
            </Badge>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-[1.3] pb-2">
              Empowering Youth Through Open Source
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Y-SoC is more than a program—it's a movement that connects passionate young developers worldwide to
              create, collaborate, and contribute to meaningful open-source projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-full rounded-2xl border-2 border-blue-500/50 bg-gray-900/50 backdrop-blur-sm hover:border-blue-400/70 transition-all duration-300 shadow-lg shadow-blue-500/10">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Our Mission</h2>
                  </div>
                  <p className="text-lg text-white leading-relaxed">
                    To create a global platform where young developers can learn, grow, and contribute to open-source
                    projects while building meaningful connections and advancing their careers. We bridge the gap
                    between learning and real-world application through collaborative coding.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-full rounded-2xl border-2 border-cyan-500/50 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-400/70 transition-all duration-300 shadow-lg shadow-cyan-500/10">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center mr-4 shadow-lg shadow-cyan-500/30">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Our Vision</h2>
                  </div>
                  <p className="text-lg text-white leading-relaxed">
                    To become the world's leading youth-driven open-source community, fostering innovation and
                    collaboration across borders. We envision a future where every young developer has the opportunity
                    to contribute to projects that matter and shape the digital world.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* DarkVeil Background */}
        <div className="absolute inset-0 opacity-40 dark:opacity-30">
          <DarkVeil />
        </div>
        
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do in the Y-SoC community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-full text-center rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Community Roles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover where you fit in our diverse community of creators, collaborators, and innovators
            </p>
          </motion.div>

          <div className="space-y-6">
            {memberCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                      <div className="flex items-start gap-4 lg:min-w-0 lg:flex-1">
                        <div
                          className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center shadow-lg`}
                        >
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-2xl font-bold mb-3 text-white">
                            {category.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="lg:min-w-0 lg:flex-1">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Skills & Responsibilities</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Ready to Join Our Community?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a seasoned developer or just starting out, there's a place for you in Y-SoC. Let's build
              the future of open source together.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
              >
                <Link href="/recruit" className="flex items-center">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
