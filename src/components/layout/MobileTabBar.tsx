import { useLocation } from 'react-router-dom'
import { FiHome, FiLayers, FiBriefcase, FiMail } from 'react-icons/fi'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import SmartLink from '../common/SmartLink'
import styles from './MobileTabBar.module.css'

const TABS = [
  { label: 'Home', href: '#home', icon: FiHome },
  { label: 'Services', href: '#services', icon: FiLayers },
  { label: 'Projects', href: '#/projects', icon: FiBriefcase },
  { label: 'Contact', href: '#contact', icon: FiMail },
]

export default function MobileTabBar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isProjects = location.pathname.startsWith('/project')
  const activeId = useScrollSpy(isHome ? ['home', 'services', 'contact'] : [])

  return (
    <nav className={styles.bar} aria-label="Quick navigation">
      {TABS.map((tab) => {
        const id = tab.href.replace('#', '')
        const isActive = tab.href === '#/projects' ? isProjects : isHome && activeId === id
        const Icon = tab.icon
        return (
          <SmartLink key={tab.href} href={tab.href} className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}>
            <Icon size={19} />
            <span>{tab.label}</span>
          </SmartLink>
        )
      })}
    </nav>
  )
}
