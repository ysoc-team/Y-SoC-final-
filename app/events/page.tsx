"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Award,
  Users,
  PlayCircle,
  CheckCircle,
} from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Y-SoC Presents: Open Sphere 2026 – Industry Workshop",
    tagline: "Bridge the gap between academics & real-world tech expectations",
    description:
      "We're bringing you an exclusive FREE online industry workshop to help bridge the gap between academics & real-world tech expectations.",
    speakers: [
      { name: "Badal Bhushan", company: "Walmart", topic: "IAM & Enterprise Cloud Security" },
      { name: "Vidhi Gautam", company: "SaaSworx", topic: "Data Engineering in Enterprises" },
      { name: "Code with Nishant", company: "Naukri.com", topic: "Career Orientation & Building a Strong Tech Profile" },
    ],
    date: "17 Feb 2026",
    time: "9:30 PM – 11:00 PM IST",
    location: "Online Session",
    perks: ["E-Certificate for attendees"],
    partners: ["TechHelp4U", "Tech Horizon Club", "Unstop", "Code-y-Gen"],
    registerLink:
      "https://unstop.com/o/KzbCVqa?utm_medium=Share&utm_source=tekvlfnd55112&utm_campaign=Workshops",
    posterImage: "/opensphere.jpg",
    gradient: "from-blue-500/20 via-cyan-500/10 to-purple-500/20",
    accentColor: "#06b6d4",
    category: "Industry Workshop",
    buttonText: "Register on Unstop",
    buttonLink: "https://unstop.com/o/KzbCVqa?utm_medium=Share&utm_source=tekvlfnd55112&utm_campaign=Workshops",
    hasPoster: true,
  },
]

const pastEvents = [
  {
    id: 2,
    title: "Y-SoC Re-Orientation Programme",
    description:
      "We're excited to officially begin the fresh orientation session of the Y-SoC Program. Since our mentors and participants are joining from different countries and time zones, we've carefully selected a time slot that works best across regions. This orientation session provides complete clarity on the program structure, learning roadmap, expectations, timelines, and outcomes, ensuring a smooth and well-organized journey ahead.",
    date: "1st February 2026",
    time: "9:00 PM – 10:00 PM IST",
    location: "Google Meet",
    highlights: [
      "Program vision & goals",
      "Tracks & learning structure",
      "Timeline & milestones",
      "Contribution workflow",
      "Evaluation & outcomes",
      "Live Q&A",
    ],
    recordingLink: "https://drive.google.com/file/d/10rk-Z5ZXodAyoWJ-WdmwO-Gsm5mJnKr0/view?usp=drive_link",
    posterImage: "/reorientation.jpg",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    accentColor: "#8b5cf6",
    category: "Orientation",
    buttonText: "Watch Recording",
    hasPoster: true,
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 px-5 py-2.5 border-2 border-blue-500/40 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 text-sm font-semibold"
            >
              Y-SoC Events
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
              Events
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Workshops, orientations, and sessions to supercharge your tech career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming" className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-10">
            Upcoming Events
          </h2>
          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br ${event.gradient} hover:border-gray-600/80 transition-all duration-500 shadow-xl hover:shadow-2xl`}
                  style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-[1px]" />
                  <div className="relative p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                      {event.hasPoster && (
                        <div className="lg:w-[380px] xl:w-[420px] shrink-0">
                          <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl">
                            <Image
                              src={event.posterImage}
                              alt={`${event.title} Poster`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 420px"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div className="space-y-6">
                          <Badge className="px-4 py-1.5 text-xs font-bold border-0" style={{ backgroundColor: `${event.accentColor}40`, color: event.accentColor }}>
                            {event.category}
                          </Badge>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">{event.title}</h2>
                          {event.tagline && <p className="text-lg text-cyan-400/90 font-medium">{event.tagline}</p>}
                          <p className="text-gray-300 text-base md:text-lg leading-relaxed">{event.description}</p>
                          {event.speakers && (
                            <div>
                              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <Users className="w-5 h-5 text-blue-400" />
                                Learn from industry professionals
                              </h3>
                              <ul className="space-y-2">
                                {event.speakers.map((speaker, i) => (
                                  <li key={i} className="text-gray-300 flex flex-wrap gap-1">
                                    <span className="text-white font-medium">{speaker.name}</span>
                                    <span className="text-gray-500">({speaker.company})</span>
                                    <span className="text-gray-400">→ {speaker.topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-400 shrink-0" />{event.date}</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400 shrink-0" />{event.time}</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-purple-400 shrink-0" />{event.location}</span>
                          </div>
                          {event.perks && event.perks.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {event.perks.map((perk, i) => (
                                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                                  <Award className="w-4 h-4" />{perk}
                                </span>
                              ))}
                            </div>
                          )}
                          {event.partners && (
                            <div>
                              <p className="text-gray-400 text-sm mb-1">Community Partners</p>
                              <p className="text-gray-300 text-sm">{event.partners.join(" | ")}</p>
                            </div>
                          )}
                          {event.category === "Industry Workshop" && (
                            <p className="text-amber-400/90 text-sm font-medium">⚠️ Limited seats — registration strictly via Unstop</p>
                          )}
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-700/50">
                          <Button asChild size="lg" className="w-full sm:w-auto px-10 py-6 text-base font-bold rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                            <Link href={event.buttonLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                              {event.buttonText}
                              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `linear-gradient(135deg, ${event.accentColor}20, transparent 50%)` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section id="past" className="py-16 px-4 sm:px-6 lg:px-8 relative bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-10">
            Past Events
          </h2>
          <div className="space-y-12">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br ${event.gradient} hover:border-gray-600/80 transition-all duration-500 shadow-xl hover:shadow-2xl`}
                  style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-[1px]" />
                  <div className="relative p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                      {event.hasPoster && event.posterImage && (
                        <div className="lg:w-[380px] xl:w-[420px] shrink-0 flex items-center justify-center">
                          <div className="relative w-full rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl bg-gray-900/80">
                            <Image
                              src={event.posterImage}
                              alt={`${event.title} Poster`}
                              width={420}
                              height={560}
                              style={{ width: "100%", height: "auto" }}
                              className="block"
                              sizes="(max-width: 1024px) 100vw, 420px"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div className="space-y-6">
                          <Badge className="px-4 py-1.5 text-xs font-bold border-0" style={{ backgroundColor: `${event.accentColor}40`, color: event.accentColor }}>
                            {event.category}
                          </Badge>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">{event.title}</h2>
                          <p className="text-gray-300 text-base md:text-lg leading-relaxed">{event.description}</p>
                          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-400 shrink-0" />{event.date}</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400 shrink-0" />{event.time}</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-purple-400 shrink-0" />{event.location}</span>
                          </div>
                          {event.highlights && (
                            <div>
                              <h3 className="text-white font-semibold mb-3">What we covered</h3>
                              <ul className="space-y-2">
                                {event.highlights.map((item, i) => (
                                  <li key={i} className="text-gray-300 flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-700/50">
                          <Button asChild size="lg" className="w-full sm:w-auto px-10 py-6 text-base font-bold rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                            <Link href={event.recordingLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                              <PlayCircle className="w-5 h-5" />
                              {event.buttonText}
                              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `linear-gradient(135deg, ${event.accentColor}20, transparent 50%)` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/60 via-gray-800/30 to-gray-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Don&apos;t miss this chance to learn, connect & grow
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Stay updated on all Y-SoC events. See you there!</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white border-0 px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/recruit" className="flex items-center gap-2">Join Y-SoC <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
