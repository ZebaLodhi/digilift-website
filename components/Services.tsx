import Link from 'next/link';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

const icons = {
  build: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M7 9l3 2.5L7 14M12 14h4M8 21h8M12 17v4" />
    </>
  ),
  automate: (
    <>
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="19" cy="6" r="2.5" />
      <circle cx="12" cy="19" r="2.5" />
      <path d="M7.5 6h9M6.3 8.2l4.4 8.6M17.7 8.2l-4.4 8.6" />
    </>
  ),
  launch: (
    <>
      <path d="M12 2.5c3 2.4 4.5 5.6 4.5 9.2V17h-9v-5.3c0-3.6 1.5-6.8 4.5-9.2z" />
      <circle cx="12" cy="10" r="1.8" />
      <path d="M7.5 13.5L5 16.5V20l2.5-3M16.5 13.5l2.5 3V20l-2.5-3M10.5 20h3" />
    </>
  ),
  grow: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
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
