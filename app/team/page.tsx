"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Globe, Mail, MapPin } from "lucide-react"

export default function TeamPage() {
  const coreTeam = [
    {
      name: "Punya Mittal",
      role: "Founder",
      location: "Delhi, India",
      bio: "Founder of Y-SoC, driven to empower youth through open source. Experienced in leading communities and building global collaborations.",
      image: "/mittal.jpg",
      skills: ["Leadership", "Open Source", "Community Building"],
      social: {
        linkedin: "https://www.linkedin.com/in/punya-mittal-a1122520b",
        github: "",
        twitter: "",
        website: ""
      },
    },
    {
      name: "Ayush Vaish",
      role: "Programme Director",
      location: "Delhi, India",
      bio: "Oversees program structure and execution at Y-SoC. Skilled in managing large-scale initiatives and ensuring smooth operations.",
      image: "/ay.jpg",
      skills: ["Program Management", "System Design", "Mentorship"],
      social: {
        linkedin: "https://www.linkedin.com/in/ayush-vaish-286064361",
        github: "",
        twitter: "",
        website: ""
      },
    },
    {
      name: "Vaibhav Dwivedi",
      role: "Programme Management Head",
      location: "Uttar Pradesh, India",
      bio: "Manages program operations and team coordination. Ensures smooth execution of Y-SoC initiatives.",
      image: "/vaibhav.jpg",
      skills: ["Development", "Management", "Communication"],
      social: {
        linkedin: "https://www.linkedin.com/in/vaibhav-dwivedi-64bds",
        github: "",
        twitter: "",
        website: ""
      },
    },
      {
        name: "Vaibhav Raj",
        role: "Technical Head",
        location: "Jharkhand, India",
        bio: "Oversees website development and technical systems. Creates smooth user experiences across platforms.",
        image: "/vr.jpg",
        skills: ["Full-Stack Development", "System Architecture", "Accessibility"],
        social: {
          linkedin: "https://www.linkedin.com/in/vaibhavraj28",
          github: "",
          twitter: "",
          website: ""
        },
      },
      {
        name: "Vismit Bhat",
        role: "Technical Head",
        location: "Goa, India",
        bio: "Handles Discord operations and community management. Builds engaging collaborative environments.",
        image: "/vismit.jpg",
        skills: ["Full-Stack Development", "System Architecture", "Technical Leadership"],
        social: {
          linkedin: "https://www.linkedin.com/in/vismit-bhat-78b60b363/",
          github: "",
          twitter: "",
          website: ""
        },
      },
    {
      name: "Utsav Gautam",
      role: "Mentor Coordination Head",
      location: "Uttar Pradesh, India",
      bio: "Connects mentors with participants for optimal learning. Builds strong mentor ecosystems and guidance programs.",
      image: "/utsav.jpg",
      skills: ["Mentorship", "Coordination", "Industry Expertise"],
      social: {
        linkedin: "https://www.linkedin.com/in/utsav-gautam-406696303",
        github: "",
        twitter: "",
        website: ""
      },
    },
    {
      name: "Aryaman Kumar Singh",
      role: "Documentation and Content Head",
      location: "Jharkhand, India",
      bio: "Creates clear documentation and content strategies. Makes Y-SoC processes transparent and accessible to all.",
      image: "/ar.jpeg",
      skills: ["Technical Writing", "Documentation", "Content Strategy"],
      social: {
        linkedin: "https://www.linkedin.com/in/aryaman-kumar-singh-2b6832317",
        github: "",
        twitter: "",
        website: ""
      },
    },
    {
      name: "Garvik Jain",
      role: "Code of Conduct Head",
      location: "Karnataka, India",
      bio: "Leads community guidelines and ensures inclusive participation. Focuses on creating safe spaces for all contributors.",
      image: "/garvik.jpg",
      skills: ["Community Guidelines", "Policy Making", "Conflict Resolution"],
      social: {
        linkedin: "https://www.linkedin.com/in/garvik-jain-23378931b/",
        github: "",
        twitter: "",
        website: ""
      },
    },
    {
      name: "Sahil Poply",
      role: "Code of Conduct Head",
      location: "Madhya Pradesh, India",
      bio: "Supports community standards and promotes ethical collaboration. Dedicated to maintaining respectful interactions.",
      image: "/sa.jpg",
      skills: ["Community Guidelines", "Policy Making", "Conflict Resolution"],
      social: {
        linkedin: "https://www.linkedin.com/in/sahil-poply-6150b1324",
        github: "",
        twitter: "",
        website: ""
      },
    },
    {
      name: "Harshil Jauhari",
      role: "Marketing Head",
      location: "India",
      bio: "Leads marketing campaigns and brand promotion. Develops strategies to expand community reach.",
      image: "/harshil.png",
      skills: ["Digital Marketing", "Brand Strategy", "Community Growth"],
      social: {
        linkedin: "https://www.linkedin.com/in/harshil-jauhari-09281931b/",
        github: "",
        twitter: "",
        website: ""
      },
    },
    {
      name: "Sharanya Ahire",
      role: "Marketing Co-Head",
      location: "Maharashtra, India",
      bio: "Assists marketing efforts and community expansion. Contributes to growth strategies and engagement.",
      image: "/sharanya_ahire.jpg",
      skills: ["Digital Marketing", "Brand Strategy", "Community Growth"],
      social: {
        linkedin: "https://www.linkedin.com/in/sharanya-ahire-889720261/",
        github: "",
        twitter: "",
        website: ""
      },
    },
    {
      name: "Raaghav Agarwal",
      role: "Social Media & Design and Branding Head",
      location: "Delhi, India",
      bio: "Creates visual content and manages social platforms. Streamlines member onboarding experience.",
      image: "/raaghav_agarwal.jpg",
      skills: ["Social Media", "Design", "Onboarding", "Content Creation"],
      social: {
        linkedin: "https://www.linkedin.com/in/raaghav-agarwal-a6514331a/",
        github: "",
        twitter: "",
        website: ""
      },
    },
    {
      name: "Pratham Shukla",
      role: "Social Media Co-Head",
      location: "Uttar Pradesh, India",
      bio: "Assists with social media content and community engagement. Supports platform management and outreach.",
      image: "/pratham_shukla.jpg",
      skills: ["Social Media", "Content Strategy", "Community Management"],
      social: {
        linkedin: "",
        github: "",
        twitter: "",
        website: ""
      },
    },
  ]

  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <BackgroundBeamsWithCollision className="h-[50rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex items-center justify-center min-h-[50rem]">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <Badge variant="secondary" className="px-6 py-3 text-sm font-medium border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
                  Meet Our Team
                </Badge>
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-white font-sans tracking-tight mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                The People Behind{" "}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                  <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className="">Y-SoC</span>
                  </div>
                  <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                    <span className="">Y-SoC</span>
                  </div>
                </div>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Our diverse team of organizers, mentors, and contributors from around the world are united by a shared
                passion for open source and youth empowerment.
              </motion.p>
            </motion.div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>

      {/* Core Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/30 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-8 px-8 py-4 text-base font-medium border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 shadow-lg">
              Core Team
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-8">
              Our Core Team
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              The dedicated organizers who make Y-SoC possible through their passion, expertise, and commitment to empowering youth in open source.
            </p>
          </motion.div>

          {/* Leadership Row - Centered */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {coreTeam.slice(0, 2).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-gray-800/50 hover:border-blue-500/50 overflow-hidden bg-gray-900/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square w-full">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.social.linkedin && (
                          <Button 
                            size="sm" 
                            variant="secondary" 
                            className="w-8 h-8 p-0 hover:bg-blue-600 hover:text-white transition-colors bg-white/20 border-white/30 backdrop-blur-sm"
                            asChild
                          >
                            <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="p-4 bg-gray-900/30">
                      <h3 className="text-base font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-blue-400 font-medium mb-2 text-xs">{member.role}</p>
                      <div className="flex items-center text-xs text-gray-400 mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {member.location}
                      </div>
                      <p className="text-xs text-gray-300 mb-3 leading-relaxed line-clamp-3">{member.bio}</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs border-blue-500/30 text-blue-300 hover:bg-blue-500/10 px-1.5 py-0.5 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Rest of Core Team - Regular Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.slice(2).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-gray-800/50 hover:border-blue-500/50 overflow-hidden bg-gray-900/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square w-full">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.social.linkedin && (
                          <Button 
                            size="sm" 
                            variant="secondary" 
                            className="w-8 h-8 p-0 hover:bg-blue-600 hover:text-white transition-colors bg-white/20 border-white/30 backdrop-blur-sm"
                            asChild
                          >
                            <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="p-4 bg-gray-900/30">
                      <h3 className="text-base font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-blue-400 font-medium mb-2 text-xs">{member.role}</p>
                      <div className="flex items-center text-xs text-gray-400 mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {member.location}
                      </div>
                      <p className="text-xs text-gray-300 mb-3 leading-relaxed line-clamp-3">{member.bio}</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs border-blue-500/30 text-blue-300 hover:bg-blue-500/10 px-1.5 py-0.5 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60 relative overflow-hidden page-transition">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Want to Join Our Team?</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're always looking for passionate individuals to help grow the Y-SoC community. Whether as a mentor,
              organizer, or contributor, there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow px-8 py-4 text-lg"
              >
                <Link href="/contact" className="flex items-center">
                  Get In Touch <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors px-8 py-4 text-lg"
              >
                <Link href="/recruit" className="flex items-center">
                  View Openings <Globe className="ml-2 h-5 w-5" />
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
