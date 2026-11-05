import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiWordpress,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiNginx,
  SiApache,
  SiLinux,
  SiUbuntu,
  SiGrafana,
  SiPrometheus,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { techStack } from '../../data'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import styles from './TechStack.module.css'

type IconMap = Record<string, React.ComponentType<{ size?: number }>>

const icons: IconMap = {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiWordpress,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  FaAws,
  SiNginx,
  SiApache,
  SiLinux,
  SiUbuntu,
  SiGrafana,
  SiPrometheus,
  SiGit,
  SiGithub,
  VscVscode,
  SiPostman,
}

const ALL = 'all'

export default function TechStack() {
  const [activeId, setActiveId] = useState(ALL)
  const items =
    activeId === ALL
      ? techStack.flatMap((category) => category.items)
      : techStack.find((t) => t.id === activeId)?.items ?? []

  return (
    <section id="technologies" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Technologies"
          title="Technologies & Tools"
          description="A full-stack toolbox spanning application code, infrastructure, and operations."
        />

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${activeId === ALL ? styles.tabActive : ''}`}
            onClick={() => setActiveId(ALL)}
          >
            All
          </button>
          {techStack.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`${styles.tab} ${activeId === category.id ? styles.tabActive : ''}`}
              onClick={() => setActiveId(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeId}
          className={styles.grid}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {items.map((tech) => {
            const Icon = icons[tech.icon]
            return (
              <div key={tech.name} className={styles.chip}>
                <span className={styles.chipIcon}>{Icon && <Icon size={20} />}</span>
                <span>{tech.name}</span>
              </div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
