/**
 * Thin wrapper around window.gtag so components don't crash
 * when GA hasn't loaded yet (e.g. during local dev or ad-blocking).
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}
