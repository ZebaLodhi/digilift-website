import Link from 'next/link';
import GlobeMark from './GlobeMark';

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

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
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

        <div className="art" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
          <div className="grid" />

          <GlobeMark
            size={560}
            radius={200}
            step={7}
            dot={5}
            color="#0A0A0A"
            gradientId="hero-globe"
            className="globe"
          />

          <div className="cap">People · Technology · Possibilities</div>

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

          <div className="verbs">
            <span>
              <b>01</b>Build
            </span>
            <span>
              <b>02</b>Automate
            </span>
            <span>
              <b>03</b>Launch
            </span>
            <span>
              <b>04</b>Grow
            </span>
          </div>
        </div>

        <div className="line-row">
          <p>Built for growing organisations in</p>
          <div className="inds">
            <span>Schools &amp; daycares</span>
            <span>Local businesses</span>
            <span>Community organisations</span>
            <span>Events</span>
            <span>Professional services</span>
          </div>
        </div>
      </div>
    </section>
  );
}
