import styles from './Badge.module.css'

interface BadgeProps {
  label: string
}

export default function Badge({ label }: BadgeProps) {
  return <span className={styles.badge}>{label}</span>
}
