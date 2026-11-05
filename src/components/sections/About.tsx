import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { site } from '../../data'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <Container>
        <SectionHeading eyebrow="About" title={site.about.heading} description={site.about.summary} />

        <div className={styles.grid}>
          <motion.div
            className={styles.paragraphs}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {site.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <div className={styles.highlightGrid}>
            {site.about.highlights.map((h, i) => (
              <motion.div
                key={h}
                className={styles.highlightTile}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                <FiCheckCircle className={styles.icon} />
                <span>{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
