import { FaWhatsapp } from 'react-icons/fa'
import { site } from '../../data'
import styles from './FloatingWhatsApp.module.css'

export default function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Message on WhatsApp"
      className={styles.button}
    >
      <span className={styles.ring} aria-hidden="true" />
      <span className={styles.iconWrap}>
        <FaWhatsapp size={22} />
      </span>
      <span className={styles.label}>Chat with me</span>
    </a>
  )
}
