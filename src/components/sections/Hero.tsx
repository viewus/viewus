import { motion } from 'framer-motion'
import { site, stats } from '../../data'
import Container from '../common/Container'
import SmartLink from '../common/SmartLink'
import AnimatedCounter from '../common/AnimatedCounter'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glowSecondary} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />
      <Container className={styles.inner}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {site.hero.eyebrow}
        </motion.span>

        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {site.hero.headline}
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          {site.hero.description}
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <SmartLink href={site.hero.primaryCta.href} variant="primary">
            {site.hero.primaryCta.label}
          </SmartLink>
          <SmartLink href={site.hero.secondaryCta.href} variant="secondary">
            {site.hero.secondaryCta.label}
          </SmartLink>
          <SmartLink href={site.hero.tertiaryCta.href} variant="ghost">
            {site.hero.tertiaryCta.label}
          </SmartLink>
        </motion.div>

      </Container>

      <motion.div
        className={styles.bento}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.34 }}
      >
        <Container>
          <div className={styles.bentoGrid}>
            <div className={`${styles.tile} ${styles.tagline}`}>
              <p>{site.about.summary}</p>
            </div>
            {stats[0] && (
              <div className={`${styles.tile} ${styles.statTile} ${styles.stat1}`}>
                <span className={styles.statValue}>
                  <AnimatedCounter value={stats[0].value} suffix={stats[0].suffix} />
                </span>
                <span className={styles.statLabel}>{stats[0].label}</span>
              </div>
            )}
            {stats[1] && (
              <div className={`${styles.tile} ${styles.statTile} ${styles.stat2}`}>
                <span className={styles.statValue}>
                  <AnimatedCounter value={stats[1].value} suffix={stats[1].suffix} />
                </span>
                <span className={styles.statLabel}>{stats[1].label}</span>
              </div>
            )}
            {stats[2] && (
              <div className={`${styles.tile} ${styles.statTile} ${styles.stat3}`}>
                <span className={styles.statValue}>
                  <AnimatedCounter value={stats[2].value} suffix={stats[2].suffix} />
                </span>
                <span className={styles.statLabel}>{stats[2].label}</span>
              </div>
            )}
          </div>
        </Container>
      </motion.div>
    </section>
  )
}
