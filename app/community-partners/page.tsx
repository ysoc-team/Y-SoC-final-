"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GridDotBackground from "@/components/GridDotBackground"
import { motion } from "framer-motion"
import { animations, getTransition } from "@/lib/animations"

export default function PartnersPage() {
  const partners = [
    {
      name: "Tech Horizon Club",
      logo: "/thc-logo.png.png",
      description: "Fostering innovation and hands-on learning through tech events, hackathons, and collaborative projects."
    },
    {
      name: "TechHelp4u",
      logo: "/techhelp4u_logo.jpeg",
      description: "Providing technical support and guidance to developers"
    },
    {
      name: "Lenient Tree",
      logo: "/1756381534421.jpeg",
      description: "Empowering students through competitions, resources, and innovation."
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
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={animations.scrollReveal.initial}
            whileInView={animations.scrollReveal.whileInView}
            transition={animations.scrollReveal.transition}
            viewport={animations.scrollReveal.viewport}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Our Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thank you to these incredible organizations supporting youth in open source.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={animations.scale.initial}
                whileInView={animations.scale.animate}
                transition={getTransition(0.4)}
                viewport={animations.scrollReveal.viewport}
                whileHover={animations.card.whileHover}
                className="group"
              >
                <div className="h-full text-center rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-600/30">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
