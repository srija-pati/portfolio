'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Mail, Share2, Code2 } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export function Contact() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} id="contact" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <p className="text-accent font-semibold tracking-wider uppercase text-sm">
              Let&apos;s Connect
            </p>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Get In Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            I&apos;m eager to explore opportunities in software engineering and data/AI roles. Let&apos;s connect and discuss how I can contribute to your team.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="mailto:srijapati5@gmail.com"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              srijapati5@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/pati-srija-670611290"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/srija-pati"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Code2 className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-muted-foreground text-sm mt-8"
          >
            <p><strong>Location:</strong> Hanamkonda, Telangana</p>
            <p><strong>Phone:</strong> +91-9381797548</p>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8 border-t border-border">
            <p className="text-muted-foreground mb-6">Or find me on:</p>
            <div className="flex justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg text-muted-foreground hover:text-white hover:border-primary transition-colors"
            >
              <Code2 className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Share2 className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
