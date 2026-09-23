import Link from 'next/link';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

/**
 * Mid-page call to action. Deliberately light: the dark contact band in the
 * footer already closes every page, and two dark bands would stack.
 */
export default function CTA() {
  return (
    <section className="sec paper">
      <div className="wrap">
        <div className="cta-band">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            Get started
          </div>

          <h2>
            Ready to build something <i>that works?</i>
          </h2>

          <p className="lede">
            Tell us where things break down — a slow process, a manual workflow, a
            campaign that is not converting. We will tell you what we would do about it.
          </p>

          <div className="actions">
            <Link className="btn btn-ink" href="/bookings">
              Book a free growth audit <Arrow />
            </Link>
            <Link className="btn btn-ghost" href="/packages">
              See services and pricing
            </Link>
          </div>

          <div className="pill-row" style={{ justifyContent: 'center', marginTop: 32 }}>
            <span className="tag">Fixed prices agreed up front</span>
            <span className="tag">No long-term contracts</span>
            <span className="tag">Response within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
