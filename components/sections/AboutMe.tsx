'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

export function AboutMe() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="about-me" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm">
            Get to Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a detail-oriented Computer Science (AI & ML) undergraduate with a passion for creating intelligent solutions through technology. My journey in tech combines academic rigor with practical hands-on experience in full-stack web development and data science.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              What excites me most is the intersection of artificial intelligence and real-world problem-solving. I thrive on building applications that not only function seamlessly but also contribute meaningfully to solving complex challenges. I'm driven by curiosity, continuous learning, and a commitment to excellence in every project I undertake.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I explore emerging technologies, collaborate with fellow developers, and stay updated with the latest advancements in AI and web development. I believe in the power of teamwork and am always eager to contribute to projects that make a real impact.
            </p>

            <div className="pt-4 flex gap-4">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Based in:</strong> Hanamkonda, Telangana</p>
                <p className="text-sm text-muted-foreground mt-2"><strong className="text-foreground">Education:</strong> B.Tech CS (AI & ML)</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-primary">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                Proficient in building end-to-end web applications with multi-role access control, database management, and user-centric interfaces using HTML, CSS, JavaScript, PHP, and MySQL.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-secondary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-secondary">AI & Machine Learning</h3>
              <p className="text-muted-foreground">
                Exploring supervised learning, data preprocessing, and predictive analytics with hands-on experience using Python, Pandas, and NumPy for real-world data challenges.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-accent">Problem Solving</h3>
              <p className="text-muted-foreground">
                Analytical mindset with strong attention to detail, enabling me to break down complex problems and deliver optimized, scalable solutions with minimal errors.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
