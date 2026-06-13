import { useState, useRef } from 'react'
import { trackEvent } from '../hooks/useAnalytics.js'

const FORM_ENDPOINT = 'https://formspree.io/f/xgobnldg'

export default function SignupForm() {
  const [fields, setFields]     = useState({ name: '', email: '', phone: '' })
  const [status, setStatus]     = useState('idle')   // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const hasTrackedStart         = useRef(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))

    // Fire form_start only once per session
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true
      trackEvent('form_start', { form_name: 'beta_signup' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const body = { name: fields.name, email: fields.email }
      if (fields.phone.trim()) body.phone = fields.phone.trim()

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        setStatus('success')
        trackEvent('form_submit', {
          form_name: 'beta_signup',
          has_phone: !!fields.phone.trim(),
        })
      } else {
        const data = await res.json().catch(() => ({}))
        const msg =
          data?.errors?.[0]?.message ||
          'Something went wrong. Please try again.'
        setErrorMsg(msg)
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section className="signup" id="signup">
      <div className="signup-inner">
        <span className="eyebrow">Early Access</span>
        <h2 className="section-title">Get on the List</h2>
        <div className="section-divider" />
        <p className="signup-sub">
          I'm rolling out access to a small group first. Drop your info and
          you'll be sent a link to download the app. No spam, no newsletters —
          just one email when you're in.
        </p>

        {status === 'success' ? (
          <div className="signup-success" role="alert">
            <span className="signup-success-icon" aria-hidden="true">✓</span>
            <h3>You're on the list.</h3>
            <p>
              We'll reach out to{' '}
              <strong>{fields.email}</strong> when your spot opens up.
              Thanks for your interest in Gutter Done.
            </p>
          </div>
        ) : (
          <form
            className="signup-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Beta waitlist signup"
          >
            {/* Name */}
            <div className="form-field">
              <label className="form-label" htmlFor="signup-name">
                Name
              </label>
              <input
                id="signup-name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your name"
                value={fields.name}
                onChange={handleChange}
                required
                autoComplete="name"
                disabled={status === 'loading'}
              />
            </div>

            {/* Email */}
            <div className="form-field">
              <label className="form-label" htmlFor="signup-email">
                Email
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                className="form-input"
                placeholder="your@email.com"
                value={fields.email}
                onChange={handleChange}
                required
                autoComplete="email"
                disabled={status === 'loading'}
              />
            </div>

            {/* Phone */}
            <div className="form-field">
              <label className="form-label" htmlFor="signup-phone">
                Phone
                <span className="form-label-optional">(optional)</span>
              </label>
              <input
                id="signup-phone"
                name="phone"
                type="tel"
                className="form-input"
                placeholder="(555) 000-0000"
                value={fields.phone}
                onChange={handleChange}
                autoComplete="tel"
                disabled={status === 'loading'}
              />
              <span className="form-hint">
                We'll only reach out if you want a quick call.
              </span>
            </div>

            {/* Error */}
            {status === 'error' && (
              <div className="form-error" role="alert">
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="form-submit"
              disabled={status === 'loading'}
              aria-busy={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Join the Waitlist →'}
            </button>

            <p className="form-fine-print">
              No card required. No commitment. Just your email.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
