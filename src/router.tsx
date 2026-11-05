import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Home from './pages/Home'
import { initAnalytics, trackPageview } from './utils/analytics'

const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (!(location.state as { scrollTo?: string } | null)?.scrollTo) {
      window.scrollTo({ top: 0 })
    }
    // Intentionally keyed on pathname only — a scrollTo navigation from another
    // page must not re-run this just because location.state changed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return null
}

function Analytics() {
  const location = useLocation()

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    trackPageview(location.pathname)
  }, [location.pathname])

  return null
}

export default function AppRouter() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Analytics />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
