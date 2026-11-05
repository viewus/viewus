import { featuredProjects } from '../../data'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import SmartLink from '../common/SmartLink'
import ProjectCard from '../projects/ProjectCard'
import styles from './FeaturedProjects.module.css'

export default function FeaturedProjects() {
  return (
    <section id="projects-preview" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="A sample of complete systems — from client-facing applications to the infrastructure that runs them."
        />

        <div className={styles.grid}>
          {featuredProjects.slice(0, 3).map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              delay={i * 0.08}
              featured={i === 0}
              className={i === 0 ? styles.hero : i === 1 ? styles.side1 : styles.side2}
            />
          ))}
        </div>

        <div className={styles.footer}>
          <SmartLink href="#/projects" variant="secondary">
            View All Projects
          </SmartLink>
        </div>
      </Container>
    </section>
  )
}
