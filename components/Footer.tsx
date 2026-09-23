import Link from 'next/link';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function Footer() {
  return (
    <section className="dark contact" id="contact">
      <div className="wrap">
        <div className="eyebrow on-dark">Connect with us</div>

        <h2 style={{ marginTop: 22 }}>
          Grow. Optimize. <i>Support.</i>
        </h2>

        <a className="mail" href="mailto:team@digilift.ai">
          team@digilift.ai <Arrow />
        </a>

        <div className="actions">
          <Link className="btn btn-white" href="/bookings">
            Book a free growth audit <Arrow />
          </Link>
          <Link className="btn btn-ghost-dark" href="/packages">
            See what we do
          </Link>
        </div>

        <footer className="fgrid">
          <div>
            {/* The supplied lockup is drawn for dark backgrounds, so it is used
                here exactly as provided. */}
            <img
              src="/brand/logo/digilift-ai-logo-transparent.svg"
              alt="DigiLift AI — People, Technology, Possibilities"
              width={260}
              height={82}
            />
            <p>
              Your all-in-one solution for technology, AI and marketing. We build and
              market digital solutions that grow your business — from idea to impact.
            </p>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              <li><Link href="/packages">IT Development</Link></li>
              <li><Link href="/packages">Digital Marketing</Link></li>
              <li><Link href="/packages">Lead Generation</Link></li>
              <li><Link href="/packages">Customer Acquisition</Link></li>
              <li><Link href="/packages">Growth Strategy</Link></li>
              <li><Link href="/packages">AI-Powered Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li><Link href="/#work">Work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/bookings">Book an audit</Link></li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:team@digilift.ai">team@digilift.ai</a></li>
              <li><a href="https://www.digilift.ai">www.digilift.ai</a></li>
              <li>Ideas. Brighter tomorrow.</li>
            </ul>
          </div>
        </footer>

        <div className="fbottom">
          <div>© {new Date().getFullYear()} DigiLift AI. All rights reserved.</div>
          <div className="links">
            <span>People · Technology · Possibilities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
