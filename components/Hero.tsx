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
        <div className="eyebrow">People · Technology · Possibilities</div>

        <h1>
          Your all-in-one solution:
          <br />
          tech, AI, <i>marketing.</i>
        </h1>

        <p className="lede">
          We build and market digital solutions that grow your business. From custom
          software and AI to automation and digital marketing, DigiLift AI takes you
          from idea to impact.
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
          <span>Grow</span>
          <span>Optimize</span>
          <span>Support</span>
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
              New lead captured from your campaign
            </div>
            <div className="row">
              <span className="ok">
                <Check />
              </span>
              AI qualifies and routes it to your CRM
            </div>
            <div className="row dim">
              <span className="ok">
                <Check />
              </span>
              Follow-up sent · meeting booked
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
              <b>03</b>Market
            </span>
            <span>
              <b>04</b>Grow
            </span>
          </div>
        </div>

        <div className="line-row">
          <p>Technology × AI × Marketing × Real impact</p>
          <div className="inds">
            <span>Tech foundations</span>
            <span>Efficiency</span>
            <span>Reach</span>
            <span>Leads</span>
            <span>Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
