import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { nav, site } from '../../data'
import Container from '../common/Container'
import SmartLink from '../common/SmartLink'
import styles from './Footer.module.css'

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.top}>
          <div>
            <span className={styles.logo}>{site.name}</span>
            <p className={styles.tagline}>{site.tagline}</p>
          </div>

          <nav className={styles.links}>
            {nav.map((item) => (
              <SmartLink key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </SmartLink>
            ))}
          </nav>

          <div className={styles.social}>
            {site.social.map((s) => {
              const Icon = ICONS[s.icon]
              return (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} className={styles.socialLink}>
                  {Icon ? <Icon size={18} /> : s.label}
                </a>
              )
            })}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Built with React, Vite &amp; TypeScript — deployed on GitHub Pages.</span>
        </div>
      </Container>
    </footer>
  )
}
