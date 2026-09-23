import Link from 'next/link';
import { icons, services } from './serviceData';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

/**
 * The five services as one end-to-end pipeline: each step hands its output to
 * the next, and AI-powered solutions sit underneath, feeding every step.
 */
export default function Pipeline() {
  return (
    <section className="sec paper" id="pipeline">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="eyebrow">End-to-end pipeline</div>
            <h2 className="h2">
              From first build to <i>lasting growth.</i>
            </h2>
            <p className="lede">
              Each service hands its result to the next, and AI powers every step along
              the way.
            </p>
          </div>
          <Link className="link" href="/bookings">
            Book a free growth audit <Arrow />
          </Link>
        </div>

        <div className="flow">
          <ol className="flow-steps">
            {services.map((service) => (
              <li key={service.n}>
                <span className="node">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {service.icon}
                  </svg>
                </span>
                <span className="step-n">{service.n}</span>
                <b>{service.title}</b>
                <span className="out">{service.output}</span>
                <i className="feed" aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="flow-ai">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {icons.ai}
            </svg>
            <span>
              <b>AI-powered solutions</b> power every step: AI assistants, workflow
              automation and data processing working underneath.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
