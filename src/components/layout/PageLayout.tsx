import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileTabBar from './MobileTabBar'
import FloatingWhatsApp from './FloatingWhatsApp'
import ScrollToTopButton from './ScrollToTopButton'
import styles from './PageLayout.module.css'

interface PageLayoutProps {
  children: ReactNode
  title: string
  description: string
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
      <MobileTabBar />
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </>
  )
}
