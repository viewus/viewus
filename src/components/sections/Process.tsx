import { motion } from 'framer-motion'
import { process } from '../../data'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import styles from './Process.module.css'

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="My Development Process"
          description="A consistent, repeatable workflow from the first conversation to a monitored production system."
        />

        <ol className={styles.timeline}>
          {process.map((step, i) => (
            <motion.li
              key={step.step}
              className={`${styles.step} ${i === 0 || i === process.length - 1 ? styles.wide : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <span className={styles.number}>{String(step.step).padStart(2, '0')}</span>
              <div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
