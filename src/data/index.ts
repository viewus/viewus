import siteJson from './site.json'
import navJson from './nav.json'
import servicesJson from './services.json'
import techStackJson from './techStack.json'
import projectsJson from './projects.json'
import processJson from './process.json'
import statsJson from './stats.json'

import type {
  SiteConfig,
  NavItem,
  ServiceCategory,
  TechCategory,
  Project,
  ProcessStep,
  Stat,
} from '../types/content'

export const site = siteJson as SiteConfig
export const nav = navJson as NavItem[]
export const services = servicesJson as ServiceCategory[]
export const techStack = techStackJson as TechCategory[]
export const projects = projectsJson as Project[]
export const process = processJson as ProcessStep[]
export const stats = statsJson as Stat[]

export const featuredProjects = projects.filter((p) => p.featured)

export const projectCategories = Array.from(new Set(projects.map((p) => p.category)))

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
