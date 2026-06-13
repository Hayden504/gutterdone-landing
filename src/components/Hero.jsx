import { trackEvent } from '../hooks/useAnalytics.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <span className="hero-eyebrow-tag">
          Mobile Estimating App&nbsp;&nbsp;·&nbsp;&nbsp;Built for the Field
        </span>

        <h1 className="hero-title">
          <span className="hero-tagline-line">Measure.</span>
          <span className="hero-tagline-line">Estimate.</span>
          <span className="hero-app-name">Gutter Done.</span>
        </h1>

        <p className="hero-copy">
          Ditch the clunky spreadsheet and notepad. Stop doing estimates in your
          head. A fast, no-frills tool built by a gutter guy — for gutter guys.
        </p>

        <a
          href="#signup"
          className="hero-cta"
          onClick={() => trackEvent('cta_click', { location: 'hero' })}
        >
          Try Out V1 Now
        </a>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </div>
    </section>
  )
}
