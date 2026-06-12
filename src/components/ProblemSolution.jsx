export default function ProblemSolution() {
  return (
    <section className="problem" id="story">
      <div className="problem-inner">
        {/* Left: the founding pain point as a quote */}
        <div className="problem-quote">
          <blockquote>
            "We got tired of quoting jobs on scrap paper and guessing materials.
            So we built something better."
          </blockquote>
        </div>

        {/* Right: what makes it different */}
        <div className="problem-copy">
          <span className="eyebrow">Built by Gutter Guys</span>
          <p>
            Gutter Done wasn't dreamed up in a boardroom. It was built in the field,
            with the specific headaches of a gutter installation business in mind.
            No bloat, no features you'll never use — just the stuff that actually
            matters when you're standing in a customer's driveway.
          </p>
          <p style={{ marginTop: '16px' }}>
            Trade-native job structure, component-level estimating, multiple options
            per job — the way an actual gutter crew thinks, not the way a software
            developer imagined it.
          </p>
        </div>
      </div>
    </section>
  )
}
