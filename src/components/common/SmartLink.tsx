import type { MouseEvent, ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import buttonStyles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost' | 'plain'

interface SmartLinkProps {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  onNavigate?: () => void
}

/**
 * Resolves the three href shapes used in the JSON content:
 *  - "#/projects"  -> client-side route (react-router Link)
 *  - "#contact"    -> smooth-scroll to an in-page section (navigating home first if needed)
 *  - "https://..."  -> external link
 */
export default function SmartLink({ href, children, variant, className = '', onNavigate }: SmartLinkProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const classes = `${variant ? `${buttonStyles.button} ${buttonStyles[variant === 'plain' ? '' : variant] ?? ''}` : ''} ${className}`.trim()

  if (href.startsWith('#/')) {
    return (
      <Link to={href.slice(1)} className={classes} onClick={onNavigate}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    const id = href.slice(1)
    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
      onNavigate?.()
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: id } })
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    return (
      <a href={href} className={classes} onClick={handleClick}>
        {children}
      </a>
    )
  }

  const isExternal = href.startsWith('http') || href.startsWith('mailto:')
  return (
    <a
      href={href}
      className={classes}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      onClick={onNavigate}
    >
      {children}
    </a>
  )
}
