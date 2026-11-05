import { FiCode, FiServer, FiCloud, FiLayers } from 'react-icons/fi'
import type { ProjectCategory } from '../../types/content'
import styles from './ProjectVisual.module.css'

const CATEGORY_META: Record<ProjectCategory, { icon: React.ComponentType<{ size?: number }>; variant: string }> = {
  'Web Development': { icon: FiCode, variant: 'web' },
  DevOps: { icon: FiServer, variant: 'devops' },
  'Cloud Infrastructure': { icon: FiCloud, variant: 'cloud' },
  'Full-Stack Applications': { icon: FiLayers, variant: 'fullstack' },
}

interface ProjectVisualProps {
  category: ProjectCategory
  title: string
}

export default function ProjectVisual({ category, title }: ProjectVisualProps) {
  const meta = CATEGORY_META[category]
  const Icon = meta.icon

  return (
    <div className={`${styles.visual} ${styles[meta.variant]}`}>
      <div className={styles.grid} aria-hidden="true" />
      <span className={styles.watermark} aria-hidden="true">
        {title}
      </span>
      <span className={styles.iconBadge}>
        <Icon size={26} />
      </span>
    </div>
  )
}
