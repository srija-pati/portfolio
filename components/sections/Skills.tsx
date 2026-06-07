'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'PHP', 'HTML5', 'CSS3', 'MySQL'],
  },
  {
    name: 'Tools & Frameworks',
    skills: ['Git', 'GitHub', 'VS Code', 'XAMPP', 'phpMyAdmin'],
  },
  {
    name: 'AI / ML',
    skills: ['Supervised Learning', 'Data Preprocessing', 'Pandas', 'NumPy'],
  },
  {
    name: 'Methodologies',
    skills: ['Agile / Scrum', 'RBAC', 'RESTful Design', 'Data Analysis', 'Content Accuracy Evaluation'],
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

export function Skills() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} id="skills" className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Technologies & Tools
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 rounded-md bg-background/50 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
