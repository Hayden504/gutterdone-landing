const FEATURES = [
  {
    icon: '👤',
    title: 'Customer Info',
    desc: 'Capture basic job and customer details upfront so everything stays organized in one place.',
  },
  {
    icon: '📐',
    title: 'Build Estimates',
    desc: 'Walk through a job run by run. Input your measurements, materials, and specs as you go.',
  },
  {
    icon: '🔀',
    title: 'Multiple Options Per Job',
    desc: 'Give your customer choices — K-style vs fascia, aluminum vs steel — side by side, same job.',
  },
  {
    icon: '🧾',
    title: 'Auto Material List',
    desc: 'The app builds your material list automatically, combining identical components across the job.',
  },
  {
    icon: '💵',
    title: 'Pricing Totals',
    desc: 'See your totals per option as you build. Know your numbers before you walk to the door.',
  },
  {
    icon: '📋',
    title: 'Job Report',
    desc: 'Generate a clean summary of each job option — materials, specs, and pricing — ready to review or share.',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <span className="eyebrow">What's in V1</span>
        <h2 className="section-title">What the App Does Right Now</h2>
        <div className="section-divider" />
        <p className="features-sub">
          This is version 1. It's lean and intentional. Here's exactly what you get:
        </p>
      </div>

      <div className="features-grid">
        {FEATURES.map((f) => (
          <article className="feature-card" key={f.title}>
            <span className="feature-icon" aria-hidden="true">{f.icon}</span>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
