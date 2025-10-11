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
import { Crown, Heart, Mail, Gift, Users, Zap } from "lucide-react"

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <GridDotBackground
            dotSize={2}
            dotSpacing={40}
            dotColor="#8b5cf6"
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
            transition={getTransition(0.6)}
            className="mb-6"
          >
            <Badge variant="secondary" className="mb-4 px-6 py-3 text-sm font-medium border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300 text-white">
              <Crown className="w-4 h-4 mr-2" />
              Partnership Opportunities
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight gpu-accelerated"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.8)}
          >
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Become Our</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Sponsor</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
          >
            Join our mission to empower the next generation of developers. Your support helps us create opportunities for young talent worldwide.
          </motion.p>

          <motion.div
            className="flex justify-center items-center"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
          >
            <motion.div
              whileHover={animations.hover}
              whileTap={animations.button.whileTap}
              transition={getTransition(0.2)}
            >
              <Button
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-all duration-300 neon-glow shadow-lg hover:shadow-xl"
                onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=team@ysoc.in&su=Sponsorship Inquiry", "_blank")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-800 relative overflow-hidden page-transition">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={animations.scrollReveal.initial}
            whileInView={animations.scrollReveal.whileInView}
            transition={animations.scrollReveal.transition}
            viewport={animations.scrollReveal.viewport}
          >
            <Badge variant="secondary" className="mb-6 px-8 py-4 text-base font-medium border-2 border-green-500 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-all duration-300 shadow-lg">
              <Heart className="w-4 h-4 mr-2" />
              Current Partners
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent mb-8">
              Our Valued Partners
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We're proud to partner with these amazing organizations who share our vision of empowering youth in open source.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
              {[
                {
                  name: "ETHIndia",
                  description: "India's premier Ethereum community and hackathon organizer, fostering blockchain innovation and developer education.",
                  website: "https://ethindia.co",
                  logo: "/ethindia.png",
                  category: "Blockchain & Web3"
                },
                {
                  name: "Devfolio",
                  description: "The go-to platform for hackathons and developer events, connecting developers with opportunities to build and learn.",
                  website: "https://devfolio.co",
                  logo: "/devfolio.png",
                  category: "Developer Platform"
                }
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={animations.scale.initial}
                  whileInView={animations.scale.animate}
                  transition={getTransition(0.4 + index * 0.2)}
                  viewport={animations.scrollReveal.viewport}
                  whileHover={animations.card.whileHover}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 border-slate-600/40 hover:border-green-400/70 overflow-hidden bg-gradient-to-br from-slate-800/60 to-indigo-900/40 backdrop-blur-md group-hover:scale-[1.02] group-hover:bg-gradient-to-br group-hover:from-slate-700/70 group-hover:to-indigo-800/50">
                    <CardContent className="p-8">
                      <div className="text-center">
                        {/* Partner Logo */}
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-white/10 flex items-center justify-center shadow-lg shadow-green-500/30">
                          <img
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              // Fallback to initial letter if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<span class="text-2xl font-bold text-white">${partner.name.charAt(0)}</span>`;
                              }
                            }}
                          />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                          {partner.name}
                        </h3>
                        
                        <Badge variant="outline" className="mb-4 border-green-500/40 text-green-300 hover:bg-green-500/20 px-3 py-1">
                          {partner.category}
                        </Badge>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {partner.description}
                        </p>
                        
                        <Button
                          asChild
                          variant="outline"
                          className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300"
                        >
                          <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={animations.scrollReveal.initial}
            whileInView={animations.scrollReveal.whileInView}
            transition={animations.scrollReveal.transition}
            viewport={animations.scrollReveal.viewport}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-[1.3] pb-3">Why Sponsor Y-SoC?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with us to make a meaningful impact on the future of open source development and youth education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Gift,
                title: "Access Top Talent",
                description: "Connect with the brightest young developers in open source"
              },
              {
                icon: Users,
                title: "Build Your Brand",
                description: "Enhance your company's reputation in the developer community"
              },
              {
                icon: Zap,
                title: "Shape the Future",
                description: "Influence the next generation of open source development"
              },
              {
                icon: Heart,
                title: "Make an Impact",
                description: "Support youth education and skill development"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={animations.scale.initial}
                whileInView={animations.scale.animate}
                transition={getTransition(0.4)}
                viewport={animations.scrollReveal.viewport}
                whileHover={animations.card.whileHover}
                className="text-center group"
              >
                <div className="h-full text-center rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
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