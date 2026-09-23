import Link from 'next/link';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function Work() {
  return (
    <section className="sec dark" id="work">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="eyebrow on-dark">Partner success story</div>
            <h2 className="h2">
              Featured <i>partnership.</i>
            </h2>
          </div>
          <Link className="link" href="/bookings" style={{ color: '#fff' }}>
            Start a project <Arrow />
          </Link>
        </div>

        <div className="results">
          <div className="result">
            <div className="v">
              600<small>+ tickets</small>
            </div>
            <div className="k">
              Sold for Empower 2026, driven by the Meta ad campaign we planned and ran.
            </div>
            <div className="c">
              <div>
                <b>South Asian Business Council of Virginia</b>
                Meta advertising
              </div>
            </div>
          </div>

          <div className="result">
            <div className="v">
              1,000<small>+ alumni</small>
            </div>
            <div className="k">
              The target the alumni portal and member platform were built to carry by 2027.
            </div>
            <div className="c">
              <div>
                <b>Council Partner</b>
                Custom software
              </div>
            </div>
          </div>

          <div className="result">
            <div className="v">
              2<small>projects</small>
            </div>
            <div className="k">
              An alumni portal and member platform, plus the event campaign that filled it.
            </div>
            <div className="c">
              <div>
                <b>Ongoing engagement</b>
                Community portal
              </div>
            </div>
          </div>
        </div>

        <p className="results-note">
          Figures as reported by the client&rsquo;s tracking at the time of writing.
          The 2027 alumni figure is a target, not a current count.
        </p>
      </div>
    </section>
  );
}
