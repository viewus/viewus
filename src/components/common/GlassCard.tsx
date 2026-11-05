import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './GlassCard.module.css'

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'article'
}

export default function GlassCard({ children, className = '', delay = 0, as = 'div' }: GlassCardProps) {
  const Comp = motion[as]
  return (
    <Comp
      className={`${styles.card} ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Comp>
  )
}
