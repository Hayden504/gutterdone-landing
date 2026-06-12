import { trackEvent } from '../hooks/useAnalytics.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <span className="hero-eyebrow-tag">
          Mobile Estimating App&nbsp;&nbsp;·&nbsp;&nbsp;Built for the Field
        </span>

        <h1 className="hero-title">
          Measure.<br />
          Estimate.<br />
          <span className="accent">Gutter Done.</span>
        </h1>

        <p className="hero-copy">
          Stop doing estimates in your head or on a notepad.
          A fast, no-frills tool built by gutter installers — for gutter installers.
        </p>

        <a
          href="#signup"
          className="hero-cta"
          onClick={() => trackEvent('cta_click', { location: 'hero' })}
        >
          Join the Waitlist
        </a>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </div>
    </section>
  )
}
