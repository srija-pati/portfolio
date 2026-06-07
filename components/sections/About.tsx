'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function About() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} id="about" className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm">
              Education
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Academic Background
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-2xl font-semibold mb-2">B.Tech - Computer Science</h3>
                <p className="text-accent font-semibold mb-4">Artificial Intelligence & Machine Learning</p>
                <p className="text-muted-foreground mb-3">Sumathi Reddy Institute of Technology for Women, Telangana</p>
                <p className="text-muted-foreground"><strong>Duration:</strong> 2023 – 2027</p>
                <p className="text-muted-foreground"><strong>CGPA:</strong> 7.20 / 10</p>
                <div className="mt-4 text-muted-foreground text-sm">
                  <p><strong>Relevant Coursework:</strong></p>
                  <p>AI Fundamentals, Machine Learning, Data Structures & Algorithms, DBMS, Web Development</p>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-2xl font-semibold mb-2">Intermediate (Class XII)</h3>
                <p className="text-muted-foreground mb-2">Telangana State Board</p>
                <p className="text-muted-foreground"><strong>Score:</strong> 86%</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                <div className="space-y-3 text-muted-foreground text-sm">
                  <p><strong className="text-foreground">Languages:</strong> Python, JavaScript, PHP, HTML5, CSS3, MySQL</p>
                  <p><strong className="text-foreground">Tools & Frameworks:</strong> Git, GitHub, VS Code, XAMPP, phpMyAdmin</p>
                  <p><strong className="text-foreground">AI/ML:</strong> Supervised Learning, Data Preprocessing, Pandas, NumPy</p>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border hover:border-secondary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Core Strengths</h3>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• Analytical Thinking</p>
                  <p>• Attention to Detail</p>
                  <p>• Fast Learner</p>
                  <p>• Team Collaboration</p>
                  <p>• Problem Solving</p>
                  <p>• Communication</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
