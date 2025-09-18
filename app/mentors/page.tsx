"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Plasma from "@/components/Plasma"
import GridDotBackground from "@/components/GridDotBackground"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  User, 
  Star, 
  Code, 
  ArrowRight, 
  Mail, 
  ExternalLink,
  Award,
  Clock,
  BookOpen,
  MessageCircle
} from "lucide-react"
import { mentors } from "@/data/mentors"

export default function MentorsPage() {



  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* GridDotBackground */}
        <div className="absolute inset-0">
          <GridDotBackground
            dotSize={2}
            dotSpacing={40}
            dotColor="#3b82f6"
            backgroundColor="transparent"
            opacity={0.3}
            animationSpeed={0.7}
            pulseIntensity={0.4}
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
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
              Our Mentors
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Learn from Industry Experts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get personalized guidance from experienced professionals who are passionate about helping you succeed in your open-source journey.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Meet Our Mentors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals ready to guide you through your open-source journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="bg-[#12182B] rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col">
                  {/* Profile Picture with Online Status */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-blue-500/50 transition-colors duration-300">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#12182B] shadow-sm"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {mentor.name}
                        </h3>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                          {mentor.availability}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 mb-1 font-medium">{mentor.role}</p>
                      <p className="text-sm text-blue-400 font-semibold">{mentor.company}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed flex-grow">
                    {mentor.bio}
                  </p>

                  {/* Skills/Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mentor.expertise.slice(0, 3).map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-gray-900/80 text-blue-400 text-xs rounded-full border border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {mentor.expertise.length > 3 && (
                      <span className="px-3 py-1 bg-gray-900/80 text-blue-400 text-xs rounded-full border border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                        +{mentor.expertise.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Experience */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="font-medium">{mentor.experience}</span>
                  </div>

                  {/* Connect Button */}
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
                    asChild
                  >
                    <a 
                      href={mentor.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center font-medium"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Connect
                    </a>
                  </Button>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Ready to Get Mentored?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Y-SoC and get paired with experienced mentors who will guide you through your open-source journey and help you grow as a developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
              >
                <Link href="/recruit" className="flex items-center">
                  Apply as a Mentee <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=mentors@Y-SoC.dev" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Become a Mentor
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
