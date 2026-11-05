import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import type { Project } from '../../types/content'
import { withBase } from '../../utils/url'
import GlassCard from '../common/GlassCard'
import Badge from '../common/Badge'
import ProjectVisual from './ProjectVisual'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  delay?: number
  featured?: boolean
  className?: string
}

export default function ProjectCard({ project, delay = 0, featured = false, className = '' }: ProjectCardProps) {
  return (
    <GlassCard
      delay={delay}
      className={`${styles.card} ${featured ? styles.featured : ''} ${className}`}
      as="article"
    >
      <Link to={`/project/${project.slug}`} className={styles.link}>
        <div className={styles.imageWrap}>
          {project.image ? (
            <img src={withBase(project.image)} alt="" className={styles.image} loading="lazy" />
          ) : (
            <ProjectVisual category={project.category} title={project.title} />
          )}
          <span className={styles.category}>{project.category}</span>
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.overview}>{project.overview}</p>

          <div className={styles.techRow}>
            {project.tech.slice(0, 4).map((t) => (
              <Badge key={t} label={t} />
            ))}
            {project.tech.length > 4 && <Badge label={`+${project.tech.length - 4}`} />}
          </div>

          <span className={styles.cta}>
            View case study <FiArrowUpRight />
          </span>
        </div>
      </Link>
    </GlassCard>
  )
}
