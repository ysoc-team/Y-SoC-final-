"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GridDotBackground from "@/components/GridDotBackground"
import { motion } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"
import { ExternalLink, Sparkles } from "lucide-react"

export default function PartnersPage() {
  const partners = [
    {
      name: "Tech Horizon Club",
      logo: "/thc-logo.png.png",
      description: "Fostering innovation and hands-on learning through tech events, hackathons, and collaborative projects."
    },
    {
      name: "Unstop",
      logo: "/unstop_logo.jpeg",
      description: "Connecting students with opportunities through competitions, hackathons, and career development programs."
    },
    {
      name: "Lenient Tree",
      logo: "/1756381534421.jpeg",
      description: "Empowering students through competitions, resources, and innovation."
    },
    {
      name: "TechHelp4u",
      logo: "/techhelp4u_logo.jpeg",
      description: "Providing technical support and guidance to developers"
    },
    {
      name: "Maximally",
      logo: "/maximallyedu_logo.jpeg",
      description: "Maximizing potential through innovative learning solutions and educational technology platforms."
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
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.4)}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              Our Partners
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-[1.3] pb-3"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
          >
            Community Partners
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.8)}
          >
            Y-SoC is made possible by forward-thinking companies and organizations who believe in empowering the next generation of developers.
          </motion.p>

        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-20"
            initial={animations.scrollReveal.initial}
            whileInView={animations.scrollReveal.whileInView}
            transition={animations.scrollReveal.transition}
            viewport={animations.scrollReveal.viewport}
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="px-6 py-3 text-sm font-semibold border-2 border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-cyan-500/10 text-blue-400 hover:from-blue-500/20 hover:via-blue-500/10 hover:to-cyan-500/20 transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-blue-500/30">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Trusted Partnerships
              </Badge>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-[1.2]"
              initial={animations.scale.initial}
              whileInView={animations.scale.animate}
              transition={{ ...getTransition(0.6), delay: 0.3 }}
              viewport={animations.scrollReveal.viewport}
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
              }}
            >
              Our Partners
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={animations.scrollReveal.initial}
              whileInView={animations.scrollReveal.whileInView}
              transition={{ ...animations.scrollReveal.transition, delay: 0.5 }}
              viewport={animations.scrollReveal.viewport}
            >
              Thank you to these incredible organizations supporting youth in open source development and innovation.
            </motion.p>
          </motion.div>

          {/* Enhanced Partners Grid */}
          <div className="space-y-12">
            {/* First Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {partners.slice(0, 3).map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={animations.scale.initial}
                  whileInView={animations.scale.animate}
                  transition={getTransition(0.4 + index * 0.1)}
                  viewport={animations.scrollReveal.viewport}
                  className="group"
                >
                  <div className="relative h-full">
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-blue-900/30 rounded-3xl"></div>
                    
                    <div className="relative h-full rounded-3xl border border-slate-700/50 bg-gradient-to-br from-gray-900/80 via-slate-900/60 to-gray-800/80 backdrop-blur-xl hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden">
                      
                      <div className="relative z-10 p-8 h-full flex flex-col">
                        {/* Logo Container - Fixed positioning for proper alignment */}
                        <div className="w-28 h-28 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-slate-800/80 border border-slate-600/50 flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-shadow duration-300">
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="w-20 h-20 object-contain"
                            style={{ 
                              transform: 'none',
                              transformOrigin: 'center center'
                            }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                    ${partner.name.charAt(0)}
                                  </div>
                                `;
                              }
                            }}
                          />
                        </div>

                        {/* Partner Info */}
                        <div className="flex-1 flex flex-col justify-center text-center">
                          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                            {partner.name}
                          </h3>
                          
                          <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-sm md:text-base">
                            {partner.description}
                          </p>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="mt-6 flex justify-center">
                          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 Cards Centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
                {partners.slice(3, 5).map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={animations.scale.initial}
                    whileInView={animations.scale.animate}
                    transition={getTransition(0.4 + (index + 3) * 0.1)}
                    viewport={animations.scrollReveal.viewport}
                    className="group"
                  >
                    <div className="relative h-full">
                      {/* Card Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-blue-900/30 rounded-3xl"></div>
                      
                      <div className="relative h-full rounded-3xl border border-slate-700/50 bg-gradient-to-br from-gray-900/80 via-slate-900/60 to-gray-800/80 backdrop-blur-xl hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden">
                        
                        <div className="relative z-10 p-8 h-full flex flex-col">
                          {/* Logo Container - Fixed positioning for proper alignment */}
                          <div className="w-28 h-28 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-slate-800/80 border border-slate-600/50 flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-shadow duration-300">
                            <img 
                              src={partner.logo} 
                              alt={partner.name}
                              className="w-20 h-20 object-contain"
                              style={{ 
                                transform: 'none',
                                transformOrigin: 'center center'
                              }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                      ${partner.name.charAt(0)}
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </div>

                          {/* Partner Info */}
                          <div className="flex-1 flex flex-col justify-center text-center">
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                              {partner.name}
                            </h3>
                            
                            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-sm md:text-base">
                              {partner.description}
                            </p>
                          </div>

                          {/* Bottom Decoration */}
                          <div className="mt-6 flex justify-center">
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Building the future together</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
