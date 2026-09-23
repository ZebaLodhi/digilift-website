import Link from 'next/link';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

// Line icons on a 24px grid, one stroke weight; colour and glow come from CSS.
const icons = {
  it: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 8.5h18M10 12l-2.5 2.5L10 17M14 12l2.5 2.5L14 17" />
    </>
  ),
  ai: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2.5" />
      <path d="M9.5 3v3M14.5 3v3M9.5 18v3M14.5 18v3M3 9.5h3M3 14.5h3M18 9.5h3M18 14.5h3" />
      <path d="M12 9.2l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9z" />
    </>
  ),
  marketing: (
    <>
      <path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1z" />
      <path d="M16.5 9.5a3.5 3.5 0 0 1 0 5M19 7a7 7 0 0 1 0 10" />
    </>
  ),
  acquisition: (
    <>
      <circle cx="11" cy="13" r="7.5" />
      <circle cx="11" cy="13" r="3.5" />
      <path d="M11 13l8.5-8.5M16 4.5h3.5V8" />
    </>
  ),
  growth: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M4.5 16l5-5 3.5 3.5 6.5-6.5M15 8h4.5v4.5" />
    </>
  ),
};

const services = [
  {
    n: '01',
    title: 'IT Development',
    kicker: 'Tech foundations',
    icon: icons.it,
    tone: 'c1',
    description: 'Robust tech foundations built to scale — websites, portals and custom software designed around how your organization actually works.',
    tags: ['Websites & landing pages', 'Custom software', 'Member portals', 'Integrations'],
  },
  {
    n: '02',
    title: 'AI-Powered Solutions',
    kicker: 'Efficiency',
    icon: icons.ai,
    tone: 'c2',
    description: 'Artificial intelligence that drives efficiency, taking on the repetitive work that slows your team down.',
    tags: ['AI assistants', 'Workflow automation', 'Document & data processing', 'CRM routing'],
  },
  {
    n: '03',
    title: 'Digital Marketing',
    kicker: 'Reach',
    icon: icons.marketing,
    tone: 'c3',
    description: 'Targeted outreach that builds your brand and puts your work in front of the people who need it.',
    tags: ['Meta & search advertising', 'Brand identity', 'Content & creative', 'Campaign management'],
  },
  {
    n: '04',
    title: 'Customer Acquisition',
    kicker: 'Leads',
    icon: icons.acquisition,
    tone: 'c4',
    description: 'Generate new leads and new business, with every inquiry captured, qualified and followed up automatically.',
    tags: ['Lead capture & qualification', 'Automated follow-up', 'Booking systems', 'Missed-lead recovery'],
  },
  {
    n: '05',
    title: 'Growth Strategy',
    kicker: 'Growth',
    icon: icons.growth,
    tone: 'c5',
    description: 'Achieve sustainable, measurable growth through analytics, reporting and continuous optimization.',
    tags: ['Performance dashboards', 'Analytics & tracking', 'Cost-per-lead reporting', 'Ongoing optimization'],
  },
];

export default function Services() {
  return (
    <section className="sec tight" id="services">
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
