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
import { FileText, Scale, Users, Code, AlertTriangle, CheckCircle, ExternalLink, Mail } from "lucide-react"

export default function TermsOfServicePage() {
  const termsPrinciples = [
    {
      icon: Scale,
      title: "Fair Use",
      description: "We promote fair and ethical use of our platform and resources."
    },
    {
      icon: Users,
      title: "Community Respect",
      description: "All participants must respect fellow community members and mentors."
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Contributions should follow open source best practices and licensing."
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "All activities must comply with applicable laws and regulations."
    }
  ]

  const eligibility = [
    {
      requirement: "Age Requirement",
      description: "Participants must be between 13-25 years old at the time of application."
    },
    {
      requirement: "Educational Status",
      description: "Open to students, recent graduates, and young professionals in tech-related fields."
    },
    {
      requirement: "Commitment Level",
      description: "Must be able to commit 10-15 hours per week for the duration of the program."
    },
    {
      requirement: "Technical Skills",
      description: "Basic programming knowledge and willingness to learn new technologies."
    }
  ]

  const participantObligations = [
    {
      obligation: "Active Participation",
      description: "Regular attendance at meetings, workshops, and collaborative sessions."
    },
    {
      obligation: "Code of Conduct",
      description: "Adherence to our community guidelines and professional behavior standards."
    },
    {
      obligation: "Project Contributions",
      description: "Meaningful contributions to assigned projects and open source repositories."
    },
    {
      obligation: "Documentation",
      description: "Proper documentation of work and clear communication with mentors and peers."
    },
    {
      obligation: "Intellectual Property",
      description: "Respect for intellectual property rights and proper attribution of work."
    },
    {
      obligation: "Confidentiality",
      description: "Maintaining confidentiality of sensitive project information when required."
    }
  ]

  const prohibitedActivities = [
    "Plagiarism or submission of work that is not your own",
    "Harassment, discrimination, or inappropriate behavior towards any participant",
    "Sharing of inappropriate, offensive, or illegal content",
    "Attempting to gain unauthorized access to systems or data",
    "Commercial use of program resources for personal gain",
    "Violation of any applicable laws or regulations",
    "Disruption of program activities or other participants' work",
    "Misrepresentation of identity, qualifications, or achievements"
  ]

  const terminationConditions = [
    {
      condition: "Voluntary Withdrawal",
      description: "Participants may withdraw from the program at any time with proper notice."
    },
    {
      condition: "Violation of Terms",
      description: "Immediate termination for serious violations of these terms or code of conduct."
    },
    {
      condition: "Inactive Participation",
      description: "Removal from program after extended periods of inactivity without communication."
    },
    {
      condition: "Technical Issues",
      description: "Temporary suspension for technical problems that affect program integrity."
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
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
            className="mb-6"
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              <FileText className="w-4 h-4 mr-2" />
              Legal Terms
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-8"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.8)}
          >
            Terms of Service
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto"
            initial={animations.slideUp.initial}
            animate={animations.slideUp.animate}
            transition={getTransition(0.6)}
          >
            These terms govern your participation in the Youth Season of Code program and use of our platform.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm shadow-xl">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Agreement to Terms</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Welcome to Youth Season of Code (Y-SoC). These Terms of Service ("Terms") govern your 
                  participation in our program and use of our website and services. By participating in 
                  Y-SoC, you agree to be bound by these Terms.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  If you do not agree to these Terms, please do not participate in our program or use our services. 
                  We reserve the right to modify these Terms at any time, and your continued participation 
                  constitutes acceptance of any changes.
                </p>
                <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/20">
                  <p className="text-sm text-gray-300">
                    <strong>Last Updated:</strong> September 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Core Principles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide our program and define the expectations for all participants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termsPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full text-center rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                      <principle.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">{principle.title}</h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Participant Obligations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-[1.3] pb-3">Participant Obligations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a Y-SoC participant, you agree to fulfill these obligations throughout the program.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participantObligations.map((obligation, index) => (
              <motion.div
                key={obligation.obligation}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">{obligation.obligation}</h3>
                        <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{obligation.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Prohibited Activities</h2>
            <p className="text-xl text-gray-300">
              The following activities are strictly prohibited and may result in immediate termination.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm shadow-xl">
              <div className="p-8">
                <div className="space-y-4">
                  {prohibitedActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Termination Conditions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Termination Conditions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Participation in Y-SoC may be terminated under the following circumstances.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {terminationConditions.map((condition, index) => (
              <motion.div
                key={condition.condition}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all duration-300">
                        <AlertTriangle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-orange-400 transition-colors duration-300">{condition.condition}</h3>
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{condition.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm shadow-xl">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Limitation of Liability</h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Y-SoC is provided on an "as is" basis. We make no warranties, express or implied, 
                    regarding the program's availability, quality, or outcomes. Participants participate 
                    at their own risk.
                  </p>
                  <p>
                    To the maximum extent permitted by law, Y-SoC shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages arising from participation 
                    in the program.
                  </p>
                  <p>
                    We reserve the right to modify, suspend, or terminate the program at any time 
                    without prior notice. Participants acknowledge that program outcomes may vary 
                    based on individual effort and circumstances.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm shadow-xl">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Questions About These Terms?</h2>
                <p className="text-lg text-gray-300 leading-relaxed text-center">
                  If you have any questions about these Terms of Service or need clarification on any 
                  aspect of the program, please contact us:
                </p>
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400"><strong>Email:</strong> team@ysoc.in</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button asChild className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-all duration-300">
                    <Link href="/contact">
                      Contact Us
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
