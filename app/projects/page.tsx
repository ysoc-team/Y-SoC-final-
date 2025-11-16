"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GridDotBackground from "@/components/GridDotBackground"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, X } from "lucide-react"
import { projects } from "@/data/projects"
import { useEffect, useState } from "react"

export default function ProjectsPage() {
  const totalProjects = projects.length

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const selectedProject = projects.find(p => p.id === selectedProjectId) || null

  useEffect(() => {
    if (selectedProjectId !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [selectedProjectId])

  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[50vh] flex items-center">
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-white/10 dark:bg-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              Our Projects
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.3] pb-1">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                Projects
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover active open-source initiatives in the Y-SoC program. Join an <span className="text-foreground/90">Ongoing</span> project, explore tech stacks, and start shipping real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div
                  className="bg-[#0F1426] rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col overflow-hidden cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedProjectId(project.id)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedProjectId(project.id) }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-white truncate">{project.title}</h3>
                      <p className="mt-2 text-sm text-gray-300/80 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {project.tags?.length ? (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 5).map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {/* mentors hidden for now */}

                  <div className="mt-auto pt-4 flex items-center justify-end gap-2">
                    <div className="flex items-center gap-2">
                      <Link
                        href={project.repoUrl || "#"}
                        target={project.repoUrl ? "_blank" : undefined}
                        className={`inline-flex items-center gap-1 text-sm transition-colors ${project.repoUrl ? "text-blue-300 hover:text-blue-200" : "text-gray-500 cursor-not-allowed"}`}
                        onClick={(e) => { if (!project.repoUrl) { e.preventDefault() } e.stopPropagation() }}
                      >
                        <Github className="w-4 h-4" />
                        Repo
                      </Link>
                      {project.website ? (
                        <Link
                          href={project.website}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Site
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProjectId(null)}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-lg sm:max-w-xl bg-[#0F1426] border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-5 border-b border-gray-700/40 flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-white">{selectedProject.title}</h3>
                <p className="mt-2 text-sm text-gray-300/90">
                  {selectedProject.description}
                </p>
                {selectedProject.tags?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProject.tags.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <button
                aria-label="Close"
                className="text-gray-400 hover:text-gray-200 transition-colors"
                onClick={() => setSelectedProjectId(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 max-h-[55vh] overflow-auto">
              <div className="space-y-5">
                <p className="leading-relaxed text-gray-200">
                  {selectedProject.summary || selectedProject.description}
                </p>

                {selectedProject.highlights?.length ? (
                  <div>
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">Key Highlights</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-200/90">
                      {selectedProject.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {selectedProject.howItWorksSummary?.length ? (
                  <div>
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">How It Works</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-200/90">
                      {selectedProject.howItWorksSummary.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                {selectedProject.techStackSummary?.length ? (
                  <div>
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">Tech Stack</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-gray-200/90">
                      {selectedProject.techStackSummary.map((line, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="p-5 border-t border-gray-700/40 flex items-center justify-end gap-3">
              {selectedProject.repoUrl ? (
                <Link
                  href={selectedProject.repoUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-blue-500/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </Link>
              ) : null}
              {selectedProject.website ? (
                <Link
                  href={selectedProject.website}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-blue-500/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Site
                </Link>
              ) : null}
              <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-600/50 hover:bg-white/5 text-gray-200 transition-colors"
                onClick={() => setSelectedProjectId(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      ) : null}

      <Footer />
    </div>
  )
}


