import { useState, useEffect } from 'react'
import { trackEvent } from '../hooks/useAnalytics.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main">
      <a href="#top" aria-label="Gutter Done — back to top">
        <img src="/logo.png" alt="Gutter Done" className="nav-logo" loading="eager" />
      </a>
      <a
        href="#signup"
        className="nav-cta"
        onClick={() => trackEvent('cta_click', { location: 'nav' })}
      >
        Try Out V1 Now
      </a>
    </nav>
  )
}
