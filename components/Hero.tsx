import Link from 'next/link';
import SpinningGlobe from './SpinningGlobe';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

const verbs = ['Build', 'Automate', 'Launch', 'Grow'];

const industries = [
  'Schools & Daycares',
  'Local Businesses',
  'Community Organisations',
  'Events',
  'Professional Services',
];

export default function Hero() {
  return (
    <section className="hero hero-split">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">AI · Automation · Digital growth</div>

            <h1>
              Your next idea,
              <br />
              <i>lifted</i> into results.
            </h1>

            <p className="lede">
              DigiLift AI is your one-stop partner for technology, AI, automation and
              digital growth. We build it, automate it, launch it, and help you grow it.
            </p>

            <div className="cta-row">
              <Link className="btn btn-ink" href="/bookings">
                Book a free growth audit <Arrow />
              </Link>
              <Link className="btn btn-ghost" href="/#work">
                See our work
              </Link>
            </div>

            <div className="trust">
              <span>No long-term contracts</span>
              <span>Clear scope and deliverables</span>
              <span>Response within 24 hours</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="blob b1" />
            <div className="blob b2" />
            <div className="blob b3" />
            <div className="grid" />

            <div className="cap">People · Technology · Possibilities</div>

            <SpinningGlobe className="globe" />

            <div className="verbs">
              {verbs.map((verb, i) => (
                <span key={verb}>
                  <b>{String(i + 1).padStart(2, '0')}</b>
                  {verb}
                </span>
              ))}
            </div>

            <div className="card">
              <div className="t">
                Automation running <i />
              </div>
              <div className="row">
                <span className="ok">
                  <Check />
                </span>
                New inquiry from Meta Lead Ads
              </div>
              <div className="row">
                <span className="ok">
                  <Check />
                </span>
                Qualified and routed to your CRM
              </div>
              <div className="row dim">
                <span className="ok">
                  <Check />
                </span>
                Follow-up sent · tour booked
              </div>
            </div>
          </div>
        </div>

        <div className="line-row">
          <p>Built for growing organisations in</p>
          <div className="inds">
            {industries.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
