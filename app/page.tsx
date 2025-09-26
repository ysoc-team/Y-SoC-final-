"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Code, Users, Zap, Globe, Calendar, Trophy, ChevronUp, Briefcase, GraduationCap, Palette, BookOpen } from "lucide-react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { useEffect, useState, useCallback, useMemo, lazy, Suspense } from "react"
import { animations, getTransition } from "@/lib/animations"
import { PerformanceMonitor, usePerformanceOptimization } from "@/components/PerformanceMonitor"
import { LazyPrism, LazyPrismaticBurst, LazyPixelBlast } from "@/components/LazyComponents"

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const { shouldReduceMotion, isLowEndDevice } = usePerformanceOptimization()
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 100 : 200,
    damping: shouldReduceMotion ? 20 : 40,
    restDelta: 0.001
  })

  // Performance optimization: use transform instead of changing width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 300)
  }, [])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const features = [
    {
      icon: Code,
      title: "Open Source Projects",
      description: "Contribute to real-world projects and build your portfolio with meaningful code.",
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with passionate developers from around the world and learn together.",
    },
    {
      icon: Zap,
      title: "Skill Development",
      description: "Level up your coding skills with mentorship and hands-on experience.",
    },
    {
      icon: Globe,
      title: "Remote Collaboration",
      description: "Work with distributed teams and master modern development workflows.",
    },
  ]


  const roles = [
    { 
      name: "Project Leads", 
      color: "bg-gradient-to-r from-blue-500 to-cyan-400", 
      iconColor: "text-blue-400",
      icon: Briefcase,
      description: "Guide and manage open-source projects" 
    },
    { 
      name: "Mentors", 
      color: "bg-gradient-to-r from-blue-500 to-cyan-400", 
      iconColor: "text-blue-400",
      icon: GraduationCap,
      description: "Share knowledge and guide newcomers" 
    },
    { 
      name: "Contributors", 
      color: "bg-gradient-to-r from-blue-500 to-cyan-400", 
      iconColor: "text-blue-400",
      icon: Code,
      description: "Write code and build amazing features" 
    },
    { 
      name: "Designers", 
      color: "bg-gradient-to-r from-blue-500 to-cyan-400", 
      iconColor: "text-blue-400",
      icon: Palette,
      description: "Create beautiful and intuitive interfaces" 
    },
    { 
      name: "Learners", 
      color: "bg-gradient-to-r from-blue-500 to-cyan-400", 
      iconColor: "text-blue-400",
      icon: BookOpen,
      description: "Start your open-source journey" 
    },
  ]

  return (
    <div className="min-h-screen bg-black scroll-smooth">
        <PerformanceMonitor />
        {/* Optimized Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 origin-left gpu-accelerated"
          style={{ scaleX }}
        />
        
        <Navigation />

      {/* Enhanced Hero Section */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-transparent" />
        
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.4) contrast(1.2) saturate(1.1)'
            }}
          >
            <source src="/back.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Enhanced Badge with better animation */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Badge 
                  variant="secondary" 
                  className="px-8 py-4 text-base font-bold border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 hover:from-primary/20 hover:via-primary/10 hover:to-secondary/20 transition-all duration-500 text-white backdrop-blur-sm shadow-lg hover:shadow-xl"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase"
                  }}
                >
                  <Calendar className="w-5 h-5 mr-3 animate-pulse" />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-black tracking-wider">
                    November 2025 - April 2026
                  </span>
                </Badge>
              </motion.div>
            </motion.div>

            {/* Enhanced Main Title with stylish fonts */}
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight gpu-accelerated text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                fontFamily: "'Poppins', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 0.9
              }}
            >
              <motion.span 
                className="inline-block relative text-white"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.8)"
                }}
                transition={getTransition(0.3)}
                style={{
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 900,
                  letterSpacing: "-0.02em"
                }}
              >
                Youth Season
              </motion.span>
              <br />
              <motion.span 
                className="inline-block relative text-white"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.8)"
                }}
                transition={getTransition(0.3)}
                style={{
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 900,
                  letterSpacing: "-0.02em"
                }}
              >
                of Code
              </motion.span>
            </motion.h1>

            {/* Enhanced Subtitle with stylish typography */}
            <motion.div 
              className="text-2xl md:text-3xl lg:text-4xl text-white mb-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-4">
                <motion.div 
                  className="font-bold text-white text-3xl md:text-4xl lg:text-5xl"
                  style={{
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1
                  }}
                  whileHover={{
                    scale: 1.02,
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.6)"
                  }}
                >
                  You Code, You Create, You Collaborate
                </motion.div>
                <motion.div 
                  className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-200"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                    lineHeight: 1.4
                  }}
                  whileHover={{
                    color: "#ffffff",
                    transition: { duration: 0.3 }
                  }}
                >
                  Join the global youth open-source community and build the future together
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={getTransition(0.3)}
              >
                <Button
                  asChild
                  size="lg"
                  className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 text-white transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 border-0 rounded-xl relative overflow-hidden group"
                  onClick={() => {
                    const featuresSection = document.querySelector('#features')
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <Link href="/recruit" className="flex items-center group relative z-10">
                    <span className="relative z-10">Join Y-SOC</span>
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={getTransition(0.3)}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-bold border-2 border-purple-500/50 text-purple-400 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white bg-transparent transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/30 rounded-xl backdrop-blur-sm"
                  onClick={() => {
                    const featuresSection = document.querySelector('#features')
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <Link href="/about" className="flex items-center">
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Why Join Y-SoC?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of collaborative coding and accelerate your development journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4 neon-glow group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <feature.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Find Your Role</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a beginner or expert, there's a place for you in our community
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* First Row - 3 roles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {roles.slice(0, 3).map((role, index) => (
                <motion.div
                  key={role.name}
                  whileInView={animations.scale.animate}
                  transition={getTransition(0.4)}
                  viewport={animations.scrollReveal.viewport}
                  whileHover={animations.card.whileHover}
                  className="cursor-pointer group"
                >
                  <div className="h-full text-center rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      {/* Modern Icon */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                        <role.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Role Title */}
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {role.name}
                      </h3>
                      
                      {/* Role Description */}
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 roles centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {roles.slice(3, 5).map((role, index) => (
                <motion.div
                  key={role.name}
                  whileInView={animations.scale.animate}
                  transition={getTransition(0.4)}
                  viewport={animations.scrollReveal.viewport}
                  whileHover={animations.card.whileHover}
                  className="cursor-pointer group"
                >
                  <div className="h-full text-center rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      {/* Modern Icon */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                        <role.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Role Title */}
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {role.name}
                      </h3>
                      
                      {/* Role Description */}
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/40 via-gray-800/20 to-gray-900/40 relative overflow-hidden page-transition min-h-[80vh] flex items-center">
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-transparent" />
        
         {/* PixelBlast Background with light dependencies */}
         <div className="absolute inset-0 z-0">
           <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5" />}>
             <LazyPixelBlast
               color="#3b82f6"
               speed={0.3}
               direction="horizontal"
               scale={0.8}
               opacity={0.4}
               mouseInteractive={false}
               className="w-full h-full"
             />
           </Suspense>
           {/* Overlay for better text readability */}
           <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60" />
         </div>
        
       
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div>
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <Trophy className="w-20 h-20 mx-auto mb-8 text-primary drop-shadow-lg" />
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
              }}
              style={{
                fontFamily: "'Poppins', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                textShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
              }}
            >
              Ready to Start Coding?
            </motion.h2>
             <p className="text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto leading-relaxed"
                style={{
                  fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  lineHeight: 1.4,
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                }}
             >
               Join thousands of young developers building the future of open source. Your journey starts here.
             </p>
            <div className="flex justify-center">
              <motion.div
                whileHover={animations.hover}
                whileTap={animations.button.whileTap}
                transition={getTransition(0.2)}
              >
                <Button
                  asChild
                  size="lg"
                  className="px-10 py-6 text-xl font-bold gradient-primary text-white hover:opacity-90 transition-all duration-300 neon-glow shadow-lg hover:shadow-xl"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.02em"
                  }}
                >
                  <Link href="/recruit" className="flex items-center group">
                    Apply Now <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

      {/* Smooth Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ 
          scale: 1.1,
          y: -2
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </motion.button>
      </div>
  )
} 
 