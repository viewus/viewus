import { useMemo, useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import ProjectCard from '../components/projects/ProjectCard'
import { projects, projectCategories, site } from '../data'
import styles from './Projects.module.css'

const ALL = 'All'

export default function Projects() {
  const [filter, setFilter] = useState<string>(ALL)

  const filtered = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <PageLayout
      title={`Projects — ${site.name}`}
      description="Case studies across web development, DevOps, cloud infrastructure, and full-stack applications."
    >
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            description="Complete case studies: the problem, the solution, the architecture, and the outcome."
            align="left"
          />

          <div className={styles.filters}>
            {[ALL, ...projectCategories].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filter} ${filter === cat ? styles.filterActive : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} delay={i * 0.06} />
            ))}
          </div>

          {filtered.length === 0 && <p className={styles.empty}>No projects in this category yet.</p>}
        </Container>
      </section>
    </PageLayout>
  )
}
