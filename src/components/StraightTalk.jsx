const DOES = [
  'Build detailed estimates from your phone, on-site',
  'Compare multiple job options for the same customer',
  'Auto-generate a material list with quantities',
  'Track pricing totals per job option',
  'Store basic customer and job info',
  'Generate a job summary report',
]

const DOESNT = [
  'No customer-facing PDF proposals',
  'No invoicing or payment tracking',
  'No scheduling or job management',
  'No crew assignment or dispatch',
  'No QuickBooks or CRM integration',
  'No photo attachments to jobs',
]

export default function StraightTalk() {
  return (
    <section className="straight-talk" id="straight-talk">
      <div className="straight-talk-header">
        <span className="eyebrow">Straight Talk</span>
        <h2 className="section-title">
          What to Expect<br />(And What Not To)
        </h2>
        <div className="section-divider" />
        <p className="straight-talk-sub">
          This is v1. We'd rather be upfront about what it is and isn't than
          oversell it and waste your time.
        </p>
      </div>

      <div className="straight-talk-grid">
        {/* Does */}
        <div>
          <div className="talk-col-label does">
            <span aria-hidden="true">✓</span>
            <span>What It Does</span>
          </div>
          <ul className="talk-list" aria-label="What Gutter Done does">
            {DOES.map((item) => (
              <li key={item}>
                <span className="check" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Doesn't */}
        <div>
          <div className="talk-col-label doesnt">
            <span aria-hidden="true">✕</span>
            <span>What It Doesn't Do (Yet)</span>
          </div>
          <ul className="talk-list doesnt" aria-label="What Gutter Done does not do yet">
            {DOESNT.map((item) => (
              <li key={item}>
                <span className="cross" aria-hidden="true">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
