import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiHome, FiUser, FiLayers, FiCpu, FiBriefcase, FiMap, FiMail } from 'react-icons/fi'
import { nav, site } from '../../data'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import SmartLink from '../common/SmartLink'
import ThemeToggle from '../common/ThemeToggle'
import styles from './Navbar.module.css'

const NAV_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  Home: FiHome,
  About: FiUser,
  Services: FiLayers,
  Technologies: FiCpu,
  Projects: FiBriefcase,
  Process: FiMap,
  Contact: FiMail,
}

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const sectionIds = nav.map((item) => item.href.replace('#', ''))
  const activeId = useScrollSpy(isHome ? sectionIds : [])
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <SmartLink href="#home" className={styles.logo}>
          <span className={styles.logoMark}>AR</span>
          <span className={styles.logoText}>{site.name}</span>
        </SmartLink>

        <nav className={styles.links}>
          {nav.map((item) => {
            const id = item.href.replace('#', '')
            return (
              <SmartLink
                key={item.href}
                href={item.href}
                className={`${styles.link} ${isHome && activeId === id ? styles.active : ''}`}
              >
                {item.label}
              </SmartLink>
            )
          })}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <SmartLink href="#contact" variant="primary" className={styles.cta}>
            Let's Talk
          </SmartLink>

          <button
            type="button"
            className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className={styles.mobileLinks}>
              {nav.map((item, i) => {
                const id = item.href.replace('#', '')
                const Icon = NAV_ICONS[item.label]
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
                  >
                    <SmartLink
                      href={item.href}
                      className={`${styles.mobileLink} ${isHome && activeId === id ? styles.mobileLinkActive : ''}`}
                      onNavigate={() => setMenuOpen(false)}
                    >
                      {Icon && <Icon size={19} />}
                      {item.label}
                    </SmartLink>
                  </motion.div>
                )
              })}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 + nav.length * 0.05 }}
            >
              <SmartLink href="#contact" variant="primary" className={styles.mobileCta} onNavigate={() => setMenuOpen(false)}>
                Let's Talk
              </SmartLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
