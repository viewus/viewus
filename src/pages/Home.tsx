import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import TechStack from '../components/sections/TechStack'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import Process from '../components/sections/Process'
import Contact from '../components/sections/Contact'
import { site } from '../data'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo) {
      const timer = setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [location.state])

  return (
    <PageLayout
      title={`${site.name} — ${site.role}`}
      description={site.hero.description}
    >
      <Hero />
      <About />
      <Services />
      <TechStack />
      <FeaturedProjects />
      <Process />
      <Contact />
    </PageLayout>
  )
}
