'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Code2 } from 'lucide-react'

const projects = [
  {
    title: 'College Task Management System',
    description: 'Multi-role web application (Principal, HOD, Staff, Students) with role-based access control (RBAC) for end-to-end task creation, assignment, and progress tracking across 100+ users. Features dashboard analytics and real-time status updates.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    link: '#',
    github: '#',
    color: 'from-primary',
    year: '2023 – 2024',
    highlights: [
      'Multi-role RBAC implementation',
      'Real-time status updates',
      'Dashboard analytics',
      'Zero unauthorized data access',
    ]
  },
  {
    title: 'College ID Card Generator',
    description: 'Automated printable ID card generation system from structured database inputs, eliminating manual creation for 100+ student records with near-zero error rate. Includes admin interface for batch data entry and PDF-ready output.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    link: '#',
    github: '#',
    color: 'from-secondary',
    year: '2025',
    highlights: [
      'Automated batch processing',
      'Admin data entry interface',
      'Optimized SQL queries',
      'PDF generation',
    ]
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function Projects() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} id="projects" className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-sm text-accent font-semibold">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2 text-foreground">Key Features:</p>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-background/50 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
