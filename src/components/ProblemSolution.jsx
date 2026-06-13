export default function ProblemSolution() {
  return (
    <section className="problem" id="story">
      <div className="problem-inner">
        {/* Left: the founding pain point as a quote */}
        <div className="problem-quote">
          <blockquote>
            "I got tired of quoting jobs using a spreadsheet and guessing at
            materials. So I built something better."
          </blockquote>
        </div>

        {/* Right: what makes it different */}
        <div className="problem-copy">
          <span className="eyebrow">Built by a Gutter Guy</span>
          <p>
            Gutter Done wasn't dreamed up in a boardroom. I built it from experience
            in the field — thinking end cap to end cap, outlet to elbow. No bloat,
            no features I'd never use myself. Just the stuff that matters when
            you're standing in a customer's driveway, trying not to forget any
            material or the line items the customer just asked for.
          </p>
        </div>
      </div>
    </section>
  )
}
