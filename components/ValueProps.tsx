export default function ValueProps() {
  const props = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI Enrollment Funnel Automation',
      description: 'We design and automate enrollment funnels that capture parent inquiries, qualify leads, route them into your CRM or Google Sheet, and trigger fast follow-up workflows.',
      bullets: [
        'Meta Lead Ads and campaign setup',
        'Landing page build or optimization if needed',
        'Lead form qualification logic',
        'Google Sheets and CRM lead routing',
        'Automated follow-up workflows',
        'Tour booking and inquiry tracking',
        'Lead quality reporting',
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'AI Lead Nurture Systems',
      description: 'Most businesses lose leads because follow-up is slow or inconsistent. DigiLift builds AI-assisted nurture systems that respond faster and help move prospects toward booking.',
      bullets: [
        'Automated email and SMS follow-up workflows',
        'AI-assisted FAQ responses',
        'Parent inquiry nurture sequences',
        'Appointment and tour reminders',
        'Lead status tracking',
        'Missed lead recovery',
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Growth Analytics & Optimization',
      description: 'We help businesses understand which campaigns, forms, and follow-up workflows are actually converting — so decisions are based on data instead of guesswork.',
      bullets: [
        'Cost-per-lead tracking',
        'Lead quality analysis',
        'Campaign performance dashboards',
        'Tour booking and conversion tracking',
        'Funnel drop-off analysis',
        'Optimization recommendations',
      ],
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">

        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#00C2A8] uppercase tracking-widest mb-3">
            Core Services
          </p>
          <h2 className="mb-4">Three Systems That Drive Growth</h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            We build the infrastructure that captures leads, automates follow-up,
            and gives you clear visibility into what is working.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <div key={index} className="card-hover flex flex-col">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-5">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
              <p className="text-dark/60 text-sm leading-relaxed mb-5">
                {prop.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {prop.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark/70">
                    <svg
                      className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}