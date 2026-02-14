"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle, Users, Code, Calendar, Mail, ExternalLink } from "lucide-react"
import GridDotBackground from "@/components/GridDotBackground"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      color: "bg-blue-500",
      questions: [
        {
          question: "What is Y-SoC?",
          answer: "Y-SoC (Youth Season of Code) is a global open-source program designed to empower young developers through collaborative coding experiences. We bring together students, mentors, and industry professionals to work on real-world projects and build the next generation of tech talent."
        },
        {
          question: "Who can participate in Y-SoC?",
          answer: "Y-SoC is open to students, recent graduates, and young professionals aged 16-28 who are passionate about open-source development. We welcome participants from all backgrounds, skill levels, and countries worldwide."
        },
        {
          question: "Is Y-SoC free to participate?",
          answer: "Yes! Y-SoC is completely free to participate in. We believe in making open-source education accessible to everyone, regardless of their financial situation."
        },
        {
          question: "How long does the program run?",
          answer: "Y-SoC runs for 6 months, from November 2025 to June 2026. The program is structured in phases: Registration & Onboarding, Community Bonding, Active Contribution, Refinement & Completion, and Final Showcase."
        }
      ]
    },
    {
      title: "Application & Registration",
      icon: Users,
      color: "bg-green-500",
      questions: [
        {
          question: "How do I apply to Y-SoC?",
          answer: "You can apply by visiting our recruitment page and filling out the application form. Select your preferred role (Project Lead, Mentor, or Contributor), provide your details, and submit your application. We'll review it and get back to you within 5-7 business days."
        },
        {
          question: "What roles are available in Y-SoC?",
          answer: "We offer three main roles: Project Lead (guide and manage projects), Mentor (share knowledge and guide newcomers), and Contributor (write code and build features)."
        },
        {
          question: "What information do I need to provide in my application?",
          answer: "You'll need to provide your personal information, technical skills, experience level, motivation for joining, portfolio/GitHub links, and time commitment. We also ask about your preferred role and availability."
        },
        {
          question: "Can I change my role after applying?",
          answer: "Yes, you can discuss role changes with our team during the onboarding process. We understand that interests and skills can evolve, and we're flexible to accommodate changes when possible."
        }
      ]
    },
    {
      title: "Technical & Development",
      icon: Code,
      color: "bg-purple-500",
      questions: [
        {
          question: "What programming languages and technologies are used?",
          answer: "Y-SoC projects use a wide variety of technologies including JavaScript, Python, React, Node.js, TypeScript, Java, C++, and more. We also work with frameworks, databases, cloud platforms, and development tools. The specific tech stack depends on the project you choose."
        },
        {
          question: "Do I need prior open-source experience?",
          answer: "No prior open-source experience is required! Y-SoC is designed to help beginners start their open-source journey. We provide guidance, resources, and mentorship to help you learn and contribute effectively."
        },
        {
          question: "How are projects selected and assigned?",
          answer: "Projects are proposed by Project Leads and reviewed by our team. During the Community Bonding phase, you'll explore different projects, meet with teams, and choose the one that best matches your interests and skills."
        },
        {
          question: "What if I get stuck on a technical problem?",
          answer: "We have a strong support system in place! You can reach out to your mentor, ask questions in our community channels, or get help from other participants. We also organize regular workshops and office hours to address technical challenges."
        }
      ]
    },
    {
      title: "Program Timeline & Schedule",
      icon: Calendar,
      color: "bg-orange-500",
      questions: [
        {
          question: "What is the time commitment required?",
          answer: "The time commitment varies by role. Contributors typically spend 5-20 hours per week, while Project Leads and Mentors may spend more time. We're flexible and understand that participants have other commitments like studies or work."
        },
        {
          question: "Are there specific deadlines I need to meet?",
          answer: "Yes, we have milestone deadlines throughout the program to keep projects on track. However, we're understanding about individual circumstances and work with participants to find realistic timelines that work for everyone."
        },
        {
          question: "What happens if I can't complete the full program?",
          answer: "We understand that circumstances can change. If you need to step back, we encourage you to communicate with your team and our coordinators. We can help you transition to a different role or rejoin in a future cycle."
        },
        {
          question: "Are there any mandatory events or meetings?",
          answer: "We have some important milestone events and community meetings, but most are optional. We record important sessions and provide summaries for those who can't attend live. The key is staying connected with your team and community."
        }
      ]
    },
    {
      title: "Community & Support",
      icon: Mail,
      color: "bg-pink-500",
      questions: [
        {
          question: "How can I connect with other participants?",
          answer: "We have multiple community channels including Discord, GitHub discussions, and regular virtual meetups. You'll also be part of project-specific teams where you can collaborate closely with other participants."
        },
        {
          question: "What kind of mentorship is provided?",
          answer: "Each participant is paired with an experienced mentor who provides guidance on technical challenges, career advice, and open-source best practices. Mentors are available for regular check-ins and can help with both technical and non-technical questions."
        },
        {
          question: "How do I get help if I have questions?",
          answer: "You can reach out through multiple channels: direct message your mentor, post in community channels, email our support team at team@ysoc.in, or attend office hours. We're here to help you succeed!"
        },
        {
          question: "Is there a code of conduct?",
          answer: "Yes, we have a comprehensive code of conduct that ensures a welcoming, inclusive, and respectful environment for all participants. We take this seriously and have processes in place to address any concerns or violations."
        }
      ]
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Got Questions?
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Find answers to common questions about Y-SoC, our program structure, and how to get involved in the global youth open-source community.
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`mb-20 ${categoryIndex % 2 === 0 ? 'bg-gray-900/30' : 'bg-gray-800/20'} rounded-3xl p-8 md:p-12 border border-gray-700/30 backdrop-blur-sm`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-12">
                <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mr-6 shadow-lg shadow-${category.color.replace('bg-', '')}/30`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {category.title}
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex
                  const isOpen = openItems.includes(globalIndex)
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full p-6 text-left flex items-start justify-between hover:bg-gray-700/30 transition-colors rounded-t-lg"
                          >
                            <h3 className="text-lg font-semibold text-white pr-6 flex-1 leading-relaxed">
                              {item.question}
                            </h3>
                            <div className="flex-shrink-0 ml-4">
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-blue-400" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                          </button>
                          
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-0 border-t border-gray-700/30">
                                <p className="text-gray-300 leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you get started with Y-SoC.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
              >
                <a href="/contact" className="flex items-center">
                  Contact Us <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 bg-transparent"
                onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=team@ysoc.in", "_blank")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
