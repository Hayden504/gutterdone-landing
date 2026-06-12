const YEAR = new Date().getFullYear()

// Social icon SVGs (inline keeps the bundle zero-dependency)
function IconInstagram() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconTwitterX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
      aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand mark */}
        <a href="#top" aria-label="Back to top">
          <img src="/logo.png" alt="Gutter Done" className="footer-logo" loading="lazy" />
        </a>

        {/* Social links */}
        <div className="footer-social">
          <a
            href="https://instagram.com/gogutterdone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @gogutterdone"
          >
            <IconInstagram />
            @gogutterdone
          </a>
          <a
            href="https://x.com/gogutterdone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) @gogutterdone"
          >
            <IconTwitterX />
            @gogutterdone
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © {YEAR} Gutter Done
          <span className="sep">·</span>
          Built by gutter guys, for gutter guys
          <span className="sep">·</span>
          v1 Early Access
        </p>
      </div>
    </footer>
  )
}
