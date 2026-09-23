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
  build: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 8.5h18M10 12l-2.5 2.5L10 17M14 12l2.5 2.5L14 17" />
    </>
  ),
  automate: (
    <>
      <rect x="3" y="3.5" width="6" height="6" rx="1.5" />
      <rect x="15" y="3.5" width="6" height="6" rx="1.5" />
      <rect x="9" y="14.5" width="6" height="6" rx="1.5" />
      <path d="M9 6.5h6M6 9.5v1.5a3.5 3.5 0 0 0 3.5 3.5M18 9.5v1.5a3.5 3.5 0 0 1-3.5 3.5" />
    </>
  ),
  launch: (
    <>
      <path d="M12 2.8c2.6 1.9 4 4.9 4 8.4v4.3H8v-4.3c0-3.5 1.4-6.5 4-8.4z" />
      <circle cx="12" cy="9.8" r="1.7" />
      <path d="M8 12.2l-2.6 2.7v3.3L8 16.6M16 12.2l2.6 2.7v3.3L16 16.6M10.4 18.6c.3.9.8 1.6 1.6 2.2.8-.6 1.3-1.3 1.6-2.2" />
    </>
  ),
  grow: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M4.5 16l5-5 3.5 3.5 6.5-6.5M15 8h4.5v4.5" />
    </>
  ),
};

const services = [
  {
    n: '01',
    title: 'Build',
    icon: icons.build,
    tone: 'c1',
    description: 'Websites, portals and custom software designed around how your organisation works.',
    tags: ['Websites', 'Portals & software', 'Brand', 'AI solutions'],
  },
  {
    n: '02',
    title: 'Automate',
    icon: icons.automate,
    tone: 'c2',
    description: 'Lead capture, qualification, routing and follow-up that run on their own.',
    tags: ['Lead funnels', 'AI follow-up', 'CRM & Sheets routing'],
  },
  {
    n: '03',
    title: 'Launch',
    icon: icons.launch,
    tone: 'c3',
    description: 'Testing, go-live and training so it works on day one and your team can run it.',
    tags: ['Campaign setup', 'Go-live', 'Training', '30-day support'],
  },
  {
    n: '04',
    title: 'Grow',
    icon: icons.grow,
    tone: 'c4',
    description: 'Performance marketing and analytics that turn attention into enrollments, bookings and sales.',
    tags: ['Meta Lead Ads', 'Dashboards', 'Optimisation'],
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
                <div className="n">{service.n}</div>
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
        </div>
      </div>
    </section>
  );
}
