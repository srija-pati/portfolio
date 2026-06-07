'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const experiences = [
  {
    company: 'Forage',
    role: 'Software Engineering Job Simulation',
    period: '2025',
    description: 'Completed comprehensive modules covering software architecture, OOP design, unit testing, security, and Agile methodology, simulating real engineering team workflows.',
    highlights: ['Software Architecture', 'OOP Design', 'Unit Testing', 'Agile Methodology'],
  },
  {
    company: 'Forage',
    role: 'Data Analytics Job Simulation',
    period: '2025',
    description: 'Performed forensic data analysis tasks with proficiency in accuracy assessment, pattern recognition, and structured data evaluation at scale.',
    highlights: ['Data Analysis', 'Pattern Recognition', 'Accuracy Assessment'],
  },
  {
    company: 'Forage',
    role: 'Technology Job Simulation',
    period: '2025',
    description: 'Delivered coding assignments emphasizing problem-solving, clean output, and quality under simulated industry conditions.',
    highlights: ['Problem Solving', 'Code Quality', 'Industry Standards'],
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function Experience() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} id="experience" className="relative py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm">
              Career Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Work Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background" />

                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <span className="text-accent font-semibold text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-primary font-semibold mb-3">{exp.company}</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full bg-background/50 text-secondary text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
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
