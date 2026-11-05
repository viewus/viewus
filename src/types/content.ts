export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface SiteConfig {
  name: string
  role: string
  tagline: string
  location: string
  email: string
  whatsapp: string
  resumeUrl: string
  hero: {
    eyebrow: string
    headline: string
    description: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    tertiaryCta: { label: string; href: string }
  }
  about: {
    heading: string
    summary: string
    paragraphs: string[]
    highlights: string[]
  }
  social: SocialLink[]
}

export interface NavItem {
  label: string
  href: string
}

export interface ServiceItem {
  title: string
  description: string
}

export interface ServiceCategory {
  id: string
  icon: string
  title: string
  summary: string
  items: ServiceItem[]
}

export interface TechItem {
  name: string
  icon: string
}

export interface TechCategory {
  id: string
  title: string
  items: TechItem[]
}

export type ProjectCategory = 'Web Development' | 'DevOps' | 'Cloud Infrastructure' | 'Full-Stack Applications'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  overview: string
  problem: string
  solution: string
  architecture: string
  tech: string[]
  features: string[]
  image?: string
  liveUrl?: string
  repoUrl?: string
  featured: boolean
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface Stat {
  label: string
  value: number
  suffix: string
}
