'use client'

import { Code2, Share2, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Code2,
    url: 'https://github.com/srija-pati',
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Share2,
    url: 'https://www.linkedin.com/in/pati-srija-670611290',
    color: 'hover:text-primary',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:srijapati5@gmail.com',
    color: 'hover:text-accent',
  },
]

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target={link.name !== 'Email' ? '_blank' : undefined}
            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
            className={`p-3 border border-border rounded-lg text-muted-foreground transition-colors ${link.color}`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        )
      })}
    </div>
  )
}
