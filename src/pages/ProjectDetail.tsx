import { useParams } from 'react-router-dom'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import PageLayout from '../components/layout/PageLayout'
import Container from '../components/common/Container'
import Badge from '../components/common/Badge'
import SmartLink from '../components/common/SmartLink'
import GlassCard from '../components/common/GlassCard'
import ProjectVisual from '../components/projects/ProjectVisual'
import { withBase } from '../utils/url'
import { getProjectBySlug, site } from '../data'
import NotFound from './NotFound'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <NotFound />

  return (
    <PageLayout title={`${project.title} — ${site.name}`} description={project.overview}>
      <section className={styles.section}>
        <Container>
          <SmartLink href="#/projects" className={styles.back}>
            <FiArrowLeft /> All Projects
          </SmartLink>

          <div className={styles.header}>
            <Badge label={project.category} />
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.overview}>{project.overview}</p>

            <div className={styles.links}>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                  <FiExternalLink /> Live Project
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                  <FiGithub /> Source
                </a>
              )}
            </div>
          </div>

          <div className={styles.media}>
            {project.image ? (
              <img src={withBase(project.image)} alt={project.title} className={styles.image} />
            ) : (
              <ProjectVisual category={project.category} title={project.title} />
            )}
          </div>

          <div className={styles.grid}>
            <div className={styles.content}>
              <GlassCard className={styles.block}>
                <h2>The Problem</h2>
                <p>{project.problem}</p>
              </GlassCard>
              <GlassCard className={styles.block} delay={0.05}>
                <h2>The Solution</h2>
                <p>{project.solution}</p>
              </GlassCard>
              <GlassCard className={styles.block} delay={0.1}>
                <h2>Architecture</h2>
                <p>{project.architecture}</p>
              </GlassCard>
              <GlassCard className={styles.block} delay={0.15}>
                <h2>Key Features</h2>
                <ul className={styles.featureList}>
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            <aside className={styles.sidebar}>
              <GlassCard>
                <h3 className={styles.sidebarTitle}>Technologies Used</h3>
                <div className={styles.techList}>
                  {project.tech.map((t) => (
                    <Badge key={t} label={t} />
                  ))}
                </div>
              </GlassCard>
            </aside>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
