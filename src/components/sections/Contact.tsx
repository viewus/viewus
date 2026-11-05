import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { site } from '../../data'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import GlassCard from '../common/GlassCard'
import styles from './Contact.module.css'

const SOCIAL_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
}

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's discuss your project"
          description="Tell me what you're building — email or WhatsApp works best, and I'll get back to you quickly."
        />

        <GlassCard className={styles.card}>
          <p className={styles.location}>{site.location}</p>

          <div className={styles.primaryLinks}>
            <a href={`mailto:${site.email}`} className={styles.primaryLink}>
              <FaEnvelope size={20} />
              <span>{site.email}</span>
            </a>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className={`${styles.primaryLink} ${styles.whatsapp}`}>
              <FaWhatsapp size={20} />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          <div className={styles.social}>
            {site.social.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon]
              return (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} className={styles.socialLink}>
                  {Icon ? <Icon size={18} /> : s.label}
                </a>
              )
            })}
          </div>
        </GlassCard>
      </Container>
    </section>
  )
}
