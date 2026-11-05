/** Resolves a root-relative public asset path (e.g. "/projects/x.svg") against the
 *  configured Vite `base`, so dynamically-loaded (JSON) paths work in dev and on
 *  GitHub Pages regardless of the base path. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
