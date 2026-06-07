'use client'

import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { AboutMe } from '@/components/sections/AboutMe'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutMe />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
