import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCode, FiDatabase, FiCloud, FiServer, FiLayers, FiChevronDown } from 'react-icons/fi'
import { services } from '../../data'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import GlassCard from '../common/GlassCard'
import styles from './Services.module.css'

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  code: FiCode,
  backend: FiDatabase,
  cloud: FiCloud,
  server: FiServer,
  architecture: FiLayers,
}

export default function Services() {
  const [openId, setOpenId] = useState<string>('')

  return (
    <section id="services" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Complete software solutions, not just code"
          description="From the first requirement to a monitored production system — every service required to ship and run a real software product."
        />

        <div className={styles.grid}>
          {services.map((category, i) => {
            const Icon = ICONS[category.icon]
            const isOpen = openId === category.id
            return (
              <GlassCard
                key={category.id}
                delay={i * 0.06}
                className={`${styles.card} ${i === 0 ? styles.wide : ''} ${isOpen ? styles.expanded : ''}`}
              >
                <button
                  type="button"
                  className={styles.header}
                  onClick={() => setOpenId(isOpen ? '' : category.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.iconWrap}>{Icon && <Icon size={22} />}</span>
                  <span className={styles.headerText}>
                    <span className={styles.title}>{category.title}</span>
                    <span className={styles.summary}>{category.summary}</span>
                  </span>
                  <span className={styles.count}>{category.items.length}</span>
                  <FiChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.itemsWrap}
                    >
                      <div className={styles.items}>
                        {category.items.map((item) => (
                          <div key={item.title} className={styles.item}>
                            <span className={styles.itemTitle}>{item.title}</span>
                            <span className={styles.itemDesc}>{item.description}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
