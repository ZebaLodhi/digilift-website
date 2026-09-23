import Link from 'next/link';

const services = [
  {
    n: '01',
    title: 'IT Development',
    kicker: 'Tech foundations',
    description: 'Robust tech foundations built to scale — websites, portals and custom software designed around how your organization actually works.',
    tags: ['Websites & landing pages', 'Custom software', 'Member portals', 'Integrations'],
  },
  {
    n: '02',
    title: 'AI-Powered Solutions',
    kicker: 'Efficiency',
    description: 'Artificial intelligence that drives efficiency, taking on the repetitive work that slows your team down.',
    tags: ['AI assistants', 'Workflow automation', 'Document & data processing', 'CRM routing'],
  },
  {
    n: '03',
    title: 'Digital Marketing',
    kicker: 'Reach',
    description: 'Targeted outreach that builds your brand and puts your work in front of the people who need it.',
    tags: ['Meta & search advertising', 'Brand identity', 'Content & creative', 'Campaign management'],
  },
  {
    n: '04',
    title: 'Customer Acquisition',
    kicker: 'Leads',
    description: 'Generate new leads and new business, with every inquiry captured, qualified and followed up automatically.',
    tags: ['Lead capture & qualification', 'Automated follow-up', 'Booking systems', 'Missed-lead recovery'],
  },
  {
    n: '05',
    title: 'Growth Strategy',
    kicker: 'Growth',
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
              All your digital needs. <i>One single roof.</i>
            </h2>
          </div>
          <Link className="link" href="/packages">
            All services
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </Link>
        </div>

        <div className="svc">
          {services.map((service) => (
            <Link className="row" href="/packages" key={service.n}>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
