'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Education', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">SP SRIJA PATI</h3>
            <p className="text-muted-foreground">
              Full Stack Developer | AI/ML Enthusiast | Problem Solver
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:srijapati5@gmail.com" className="hover:text-primary transition-colors">
                  srijapati5@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pati-srija-670611290" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="https://github.com/srija-pati" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  GitHub Projects
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>&copy; {currentYear} Srija Pati. All rights reserved.</p>
            <p>Designed & Built with Next.js & Tailwind CSS</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
