import Link from 'next/link';
import * as orbit from './logoOrbit';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

/** Free growth audit call to action, on the brand plate with the logo's orbit swoosh. */
export default function AuditCta() {
  return (
    <section className="sec" id="audit">
      <div className="wrap">
        <div className="audit-band">
          <svg className="audit-orbit" viewBox="30 90 330 200" aria-hidden="true">
            <defs>
              <linearGradient id="audit-ring" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#056278" stopOpacity=".12" />
                <stop offset=".22" stopColor="#06d1f9" stopOpacity=".85" />
                <stop offset=".62" stopColor="#8feafc" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
              <radialGradient id="audit-tip">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset=".22" stopColor="#8feafc" stopOpacity=".85" />
                <stop offset="1" stopColor="#06d1f9" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d={orbit.back} fill="none" stroke="#056278" strokeWidth="3" strokeLinecap="round" opacity=".5" />
            <path d={orbit.core} fill="none" stroke="url(#audit-ring)" strokeWidth="5" strokeLinecap="round" />
            <circle cx={orbit.tip.x} cy={orbit.tip.y} r="18" fill="url(#audit-tip)" />
            <circle cx={orbit.tip.x} cy={orbit.tip.y} r="3.4" fill="#ffffff" />
          </svg>

          <div className="audit-copy">
            <div className="eyebrow on-dark">Not sure where to start?</div>
            <h2>
              Start with a free <i>growth audit.</i>
            </h2>
            <p>
              Tell us where things break down and we will tell you which part of the
              pipeline would make the biggest difference.
            </p>
            <div className="audit-actions">
              <Link className="btn btn-white" href="/bookings">
                Book a free growth audit <Arrow />
              </Link>
              <Link className="btn btn-ghost-dark" href="/packages">
                See services and pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
