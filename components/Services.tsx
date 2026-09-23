import Link from 'next/link';
import { services } from './serviceData';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="eyebrow">Services</div>
            <h2 className="h2">
              Everything under <i>one roof.</i>
            </h2>
          </div>
          <Link className="link" href="/packages">
            All services <Arrow />
          </Link>
        </div>

        <div className="svc-cards">
          {services.map((service) => (
            <Link className="svc-card" href="/packages" key={service.n}>
              <div className={`thumb ${service.tone}`} aria-hidden="true">
                <svg viewBox="0 0 24 24">{service.icon}</svg>
              </div>
              <div className="body">
                <div className="n">
                  {service.n} <span>· {service.kicker}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tags">
                  {service.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="go" aria-hidden="true">
                <Arrow />
              </span>
            </Link>
          ))}

          <Link className="svc-card svc-cta" href="/bookings">
            <div className="body">
              <div className="n">Not sure where to start?</div>
              <h3>
                Start with a free <i>growth audit.</i>
              </h3>
              <p>
                Tell us where things break down and we will tell you which of these would
                make the biggest difference.
              </p>
              <span className="btn btn-white">
                Book a free growth audit <Arrow />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
