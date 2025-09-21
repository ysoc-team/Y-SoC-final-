"use client"

import type React from "react"
import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { Crown, Users, Code, Palette, GraduationCap, Send, CheckCircle, AlertCircle, Briefcase, BookOpen, Mail, MapPin, Star, Link as LinkIcon, Clock, Heart } from "lucide-react"

export default function RecruitPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    role: "",
    experience: "",
    skills: "",
    motivation: "",
    portfolio: "",
    github: "",
    linkedin: "",
    availability: "",
    agreeTerms: false,
    agreeNewsletter: false,
    resumeLink: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const roles = [
    { value: "project-lead", label: "Project Lead", icon: Briefcase, description: "Guide and manage open-source projects", color: "text-blue-500", iconColor: "text-blue-500" },
    { value: "mentor", label: "Mentor", icon: GraduationCap, description: "Share knowledge and guide newcomers", color: "text-teal-500", iconColor: "text-teal-500" },
    { value: "contributor", label: "Contributor", icon: Code, description: "Write code and build amazing features", color: "text-green-500", iconColor: "text-green-500" },
    { value: "designer", label: "Designer", icon: Palette, description: "Create beautiful and intuitive interfaces", color: "text-purple-500", iconColor: "text-purple-500" },
    { value: "learner", label: "Learner", icon: BookOpen, description: "Start your open-source journey", color: "text-orange-500", iconColor: "text-orange-500" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Initialize Supabase client inside the function to avoid build-time issues
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseAnonKey) {
      setSubmitError("Configuration error. Please try again later.")
      setIsSubmitting(false)
      return
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    const { data, error } = await supabase
      .from("applications")
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          country: formData.country,
          role: formData.role,
          experience_level: formData.experience,
          technical_skills: formData.skills,
          why_join: formData.motivation,
          github: formData.github,
          portfolio: formData.portfolio,
          linkedin: formData.linkedin,
          resume_link: formData.resumeLink,
          time_commitment: formData.availability,
          agree_terms: formData.agreeTerms,
          updates_subscription: formData.agreeNewsletter,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase submission error:", error)
      if (error.code === '23505') {
        setSubmitError("This email is already registered. Please try using another email or contact support.")
      } else {
        setSubmitError("Failed to submit application. Please try again.")
      }
    } else {
      setIsSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        role: "",
        experience: "",
        skills: "",
        motivation: "",
        portfolio: "",
        github: "",
        linkedin: "",
        availability: "",
        agreeTerms: false,
        agreeNewsletter: false,
        resumeLink: "",
      })
    }
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 neon-glow">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold gradient-text mb-6">Submitted Successfully!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your application has been submitted successfully. We'll review your application and get back to you soon.
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-6 py-3 text-sm font-medium border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300 text-white">
              <Crown className="w-4 h-4 mr-2" />
              Join Y-SoC
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight gpu-accelerated"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Start Your</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to join the global youth open-source community? Fill out the application below and take the first
            step toward collaborative coding excellence.
          </motion.p>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8 gradient-text">Choose Your Role</h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {roles.map((role, index) => (
                <motion.div
                  key={role.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                  onClick={() => handleInputChange("role", role.value)}
                >
                  <div
                    className={`h-full rounded-2xl border transition-all duration-300 ease-in-out ${
                      formData.role === role.value
                          ? "border-blue-500/70 shadow-lg shadow-blue-500/20 scale-105 bg-blue-500/10"
                          : "border-gray-700/30 hover:border-gray-600/50 hover:shadow-md bg-gray-900/50"
                    }`}
                  >
                    <div className="p-6 text-center">
                      {/* Modern Icon */}
                      <div className="mb-4">
                        <div className={`w-12 h-12 rounded-full ${role.color.replace('text-', 'bg-')} flex items-center justify-center mx-auto shadow-lg`}>
                          <role.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Role Title */}
                      <h3 className={`font-bold mb-2 text-lg ${role.color}`}>{role.label}</h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-300 leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm shadow-xl">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">Application Form</h2>
                  <p className="text-gray-300">Tell us about yourself and let's start your Y-SoC journey together!</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-300 font-medium">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                          className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-300 font-medium">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                          className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-gray-300 font-medium">Country *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        required
                        className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  {/* Role Selection Alert */}
                  {!formData.role && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-destructive" />
                      <p className="text-sm text-destructive">Please select a role above to continue.</p>
                    </motion.div>
                  )}

                  {/* Experience Level */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-blue-400" />
                      Experience & Skills
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-gray-300 font-medium">Experience Level *</Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) => handleInputChange("experience", value)}
                      >
                        <SelectTrigger className="bg-gray-900/50 border-gray-600/50 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50">
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-gray-900 border-gray-700">
                          <SelectItem 
                            value="beginner"
                            className="text-white hover:bg-blue-500/20 transition-colors duration-150"
                          >
                            Beginner (0-1 years)
                          </SelectItem>
                          <SelectItem 
                            value="intermediate"
                            className="text-white hover:bg-blue-500/20 transition-colors duration-150"
                          >
                            Intermediate (1-3 years)
                          </SelectItem>
                          <SelectItem 
                            value="advanced"
                            className="text-white hover:bg-blue-500/20 transition-colors duration-150"
                          >
                            Advanced (3-5 years)
                          </SelectItem>
                          <SelectItem 
                            value="expert"
                            className="text-white hover:bg-blue-500/20 transition-colors duration-150"
                          >
                            Expert (5+ years)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <Label htmlFor="skills" className="text-gray-300 font-medium">Technical Skills *</Label>
                    <Textarea
                      id="skills"
                      placeholder="List your programming languages, frameworks, tools, and technologies..."
                      value={formData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                      required
                      className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 min-h-[100px] transition-all duration-200 hover:border-gray-500/50"
                    />
                  </div>

                  {/* Motivation */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-blue-400" />
                      Tell Us About Yourself
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="motivation" className="text-gray-300 font-medium">Why do you want to join Y-SoC? *</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Tell us about your motivation, goals, and what you hope to achieve..."
                        value={formData.motivation}
                        onChange={(e) => handleInputChange("motivation", e.target.value)}
                        required
                        className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 min-h-[120px] transition-all duration-200 hover:border-gray-500/50"
                      />
                    </div>
                  </div>

                  {/* Links */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <LinkIcon className="w-5 h-5 text-blue-400" />
                      Portfolio & Links
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="github" className="text-gray-300 font-medium">GitHub Profile</Label>
                        <Input
                          id="github"
                          placeholder="https://github.com/username"
                          value={formData.github}
                          onChange={(e) => handleInputChange("github", e.target.value)}
                          className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio" className="text-gray-300 font-medium">Portfolio/Website</Label>
                        <Input
                          id="portfolio"
                          placeholder="https://yourportfolio.com"
                          value={formData.portfolio}
                          onChange={(e) => handleInputChange("portfolio", e.target.value)}
                          className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin" className="text-gray-300 font-medium">LinkedIn Profile</Label>
                        <Input
                          id="linkedin"
                          placeholder="https://linkedin.com/in/username"
                          value={formData.linkedin}
                          onChange={(e) => handleInputChange("linkedin", e.target.value)}
                          className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="resumeLink" className="text-gray-300 font-medium">Resume Link</Label>
                        <Input
                          id="resumeLink"
                          placeholder="https://docs.google.com/document/d/..."
                          value={formData.resumeLink}
                          onChange={(e) => handleInputChange("resumeLink", e.target.value)}
                          className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                      Availability
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="availability" className="text-gray-300 font-medium">Time Commitment *</Label>
                      <Select
                        value={formData.availability}
                        onValueChange={(value) => handleInputChange("availability", value)}
                      >
                        <SelectTrigger className="bg-gray-900/50 border-gray-600/50 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50">
                          <SelectValue placeholder="How many hours per week can you commit?" />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-gray-900 border-gray-700">
                          <SelectItem 
                            value="5-10"
                            className="text-white hover:bg-blue-500/20 transition-colors duration-150"
                          >
                            5-10 hours per week
                          </SelectItem>
                          <SelectItem 
                            value="10-15"
                            className="text-white hover:bg-blue-500/20 transition-colors duration-150"
                          >
                            10-15 hours per week
                          </SelectItem>
                          <SelectItem 
                            value="15-20"
                            className="text-white hover:bg-blue-500/20 transition-colors duration-150"
                          >
                            15-20 hours per week
                          </SelectItem>
                          <SelectItem 
                            value="20+"
                            className="text-white hover:bg-blue-500/20 transition-colors duration-150"
                          >
                            20+ hours per week
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Agreement & Preferences
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                          required
                          className="mt-1 transition-all duration-200 hover:scale-110"
                        />
                        <Label htmlFor="agreeTerms" className="text-sm text-gray-300 leading-relaxed">
                          I agree to the{" "}
                          <a href="/terms-of-service" className="text-blue-400 hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="/code-of-conduct" className="text-blue-400 hover:underline">
                            Code of Conduct
                          </a>{" "}
                          *
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agreeNewsletter"
                          checked={formData.agreeNewsletter}
                          onCheckedChange={(checked) => handleInputChange("agreeNewsletter", checked as boolean)}
                          className="mt-1 transition-all duration-200 hover:scale-110"
                        />
                        <Label htmlFor="agreeNewsletter" className="text-sm text-gray-300 leading-relaxed">
                          I'd like to receive updates about Y-SoC and the open-source community
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  {submitError && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <p className="text-red-500 font-medium">{submitError}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.role || !formData.agreeTerms}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 font-semibold py-3"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting Application...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          Submit Application <Send className="h-5 w-5" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
