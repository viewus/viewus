import PageLayout from '../components/layout/PageLayout'
import Container from '../components/common/Container'
import SmartLink from '../components/common/SmartLink'
import { site } from '../data'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <PageLayout title={`Page Not Found — ${site.name}`} description="The page you're looking for doesn't exist.">
      <section className={styles.section}>
        <Container className={styles.inner}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>This page doesn't exist</h1>
          <p className={styles.description}>
            The page you're looking for may have been moved or never existed. Let's get you back on track.
          </p>
          <div className={styles.actions}>
            <SmartLink href="#/" variant="primary">
              Back to Home
            </SmartLink>
            <SmartLink href="#/projects" variant="secondary">
              View Projects
            </SmartLink>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
