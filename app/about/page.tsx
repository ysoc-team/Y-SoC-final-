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
        "Strategic thinkers who design clear, challenging problem statements that drive innovation and learning. They craft ground-level problems that inspire creative solutions and address real-world challenges.",
      skills: ["Problem Design", "Strategic Thinking", "Innovation", "Ground Level Analysis"],
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
      description: "We believe in the power of diverse perspectives from around the world working together on research and social impact projects.",
    },
    {
      icon: Heart,
      title: "Inclusive Community",
      description: "Everyone is welcome regardless of their background, experience level, or location. We foster collaboration on everything from ML datasets to social services.",
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
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-[1.3] pb-3">
              Empowering Youth Through Open Source
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Y-SoC is more than a program—it's a movement that connects passionate young developers worldwide to
              create, collaborate, and contribute to meaningful open-source projects, including those focused on social services
              and research initiatives.
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
                    between learning and real-world application through collaborative coding, research, and ground-level problem solving.
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
                    to contribute to projects that matter, from ML datasets to social impact solutions, and shape the digital world.
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
                          {category.skills.map((skill, skillIndex) => {
                            const colorMap = {
                              "text-blue-500": "border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20",
                              "text-teal-500": "border-teal-500 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20",
                              "text-green-500": "border-green-500 bg-green-500/10 text-green-400 hover:bg-green-500/20",
                              "text-purple-500": "border-purple-500 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20",
                              "text-orange-500": "border-orange-500 bg-orange-500/10 text-orange-400 hover:bg-orange-500/20"
                            };
                            return (
                              <span
                                key={skillIndex}
                                className={`px-3 py-1 text-sm rounded-full border-2 ${colorMap[category.textColor]} transition-all duration-300`}
                              >
                                {skill}
                              </span>
                            );
                          })}
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

      {/* How Y-SoC Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* DarkVeil Background */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">How Y-SoC Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our structured approach to open-source collaboration and research-driven innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Process Overview */}
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
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Our Process</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Project Selection & Mentorship</h4>
                        <p className="text-gray-300 text-sm">We identify meaningful open-source projects, including those focused on social services and research, and connect you with industry professionals who provide personalized guidance and constructive feedback.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Role Assignment & Collaboration</h4>
                        <p className="text-gray-300 text-sm">Based on your skills and interests, you'll be assigned a role where you can collaborate with like-minded peers and build stronger solutions together.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Development & Learning</h4>
                        <p className="text-gray-300 text-sm">Access real-world datasets, including ML datasets, resources, and learning materials while participating in workshops, seminars, and mini-hackathons throughout the program.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Recognition & Community</h4>
                        <p className="text-gray-300 text-sm">Earn certificates and recognition letters for your contributions while becoming part of our global open-source community of 50+ mentors and growing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What You Get */}
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
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">What You Gain</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Personalized Mentorship</h4>
                        <p className="text-gray-300 text-sm">Get personalized guidance from industry professionals and global experts who help you grow beyond just an idea.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Constructive Feedback</h4>
                        <p className="text-gray-300 text-sm">Receive regular feedback on your projects to make them better and turn them into something impactful.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Collaborative Learning</h4>
                        <p className="text-gray-300 text-sm">Work with like-minded peers to build stronger solutions and access real-world datasets and resources through ground-level problem solving.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Certificates & Recognition</h4>
                        <p className="text-gray-300 text-sm">Earn certificates and recognition letters for your contributions, building a strong portfolio for your career.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Global Community</h4>
                        <p className="text-gray-300 text-sm">Join workshops, seminars, and mini-hackathons while becoming part of our global open-source community of researchers and innovators.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role-Specific Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Role-Specific Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each role in Y-SoC offers unique opportunities for growth and contribution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {memberCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-[320px] w-full rounded-xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center mr-3 shadow-lg`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white">{category.title}</h4>
                    </div>
                    <div className="space-y-2">
                      <h5 className={`text-sm font-semibold ${category.textColor}`}>Key Benefits:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {category.title === "Project Leads" && (
                          <>
                            <li>• Leadership experience in open-source projects</li>
                            <li>• Team management and coordination skills</li>
                            <li>• Strategic planning and decision-making</li>
                            <li>• Industry recognition and networking</li>
                          </>
                        )}
                        {category.title === "Mentors" && (
                          <>
                            <li>• Teaching and knowledge-sharing opportunities</li>
                            <li>• Professional development and recognition</li>
                            <li>• Building a mentoring portfolio</li>
                            <li>• Contributing to community growth</li>
                          </>
                        )}
                        {category.title === "Contributors" && (
                          <>
                            <li>• Hands-on coding experience</li>
                            <li>• Portfolio of meaningful contributions</li>
                            <li>• Code review and collaboration skills</li>
                            <li>• Technical skill development</li>
                          </>
                        )}
                        {category.title === "Problem Architects" && (
                          <>
                            <li>• Strategic problem analysis and design</li>
                            <li>• Research methodology and innovation skills</li>
                            <li>• Impact assessment and community needs analysis</li>
                            <li>• Creative thinking and solution architecture</li>
                          </>
                        )}
                        {category.title === "Learners" && (
                          <>
                            <li>• Structured learning path</li>
                            <li>• Mentorship and guidance</li>
                            <li>• Safe environment to make mistakes</li>
                            <li>• Gradual skill building and confidence</li>
                          </>
                        )}
                      </ul>
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
        {/* DarkVeil Background */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <DarkVeil />
        </div>
        
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Ready to Join Our Community?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a seasoned developer, researcher, or just starting out, there's a place for you in Y-SoC. Let's build
              the future of open source together through innovation and meaningful contributions.
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
