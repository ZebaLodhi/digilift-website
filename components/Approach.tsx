const capabilities = [
  { title: 'Web & Workflow', copy: 'Websites, portals and the workflows that run behind them.' },
  { title: 'AI & Portals', copy: 'Intelligent tools and member platforms built around your data.' },
  { title: 'Digital Strategy', copy: 'A plan for where to invest, and what it should return.' },
  { title: 'Analytics & Integrations', copy: 'Your tools connected, your numbers in one place.' },
  { title: 'Marketing & Ads', copy: 'Campaigns that reach the right audience and prove it.' },
  { title: 'Ongoing Support', copy: 'A partner after launch, not just through it.' },
];

export default function Approach() {
  return (
    <section className="sec" id="approach">
      <div className="wrap">
        <div className="eyebrow">Technology × AI × Marketing × Real impact</div>

        <p className="statement">
          From custom software and AI solutions to automation and digital marketing,
          DigiLift AI helps organizations solve real problems and achieve{' '}
          <i>measurable growth.</i>
        </p>

        <div className="cols3">
          {capabilities.map((item, i) => (
            <div key={item.title}>
              <h3>
                {item.title} <span>{String(i + 1).padStart(2, '0')}</span>
              </h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
