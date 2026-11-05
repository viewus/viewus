const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let initialized = false

/** Loads gtag.js only if VITE_GA_MEASUREMENT_ID is configured — a no-op otherwise. */
export function initAnalytics() {
  if (initialized || !GA_ID || typeof document === 'undefined') return
  initialized = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())
  // Page views are sent manually per route (see trackPageview) since this is
  // a client-routed HashRouter app — the initial gtag.js load wouldn't
  // otherwise see subsequent in-app navigations.
  window.gtag('config', GA_ID, { send_page_view: false })
}

export function trackPageview(path: string) {
  if (!GA_ID || !window.gtag) return
  window.gtag('event', 'page_view', { page_path: path })
}
