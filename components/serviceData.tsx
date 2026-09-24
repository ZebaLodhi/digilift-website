// Line icons on a 24px grid, one stroke weight; colour and glow come from CSS.
export const icons = {
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
  leads: <path d="M3.5 4.5h17l-6.5 8v6.5l-4 1.5v-8z" />,
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

// In pipeline order: each step hands its output to the next.
export const services = [
  {
    n: '01',
    title: 'App Development',
    kicker: 'Tech foundations',
    output: 'Your product',
    icon: icons.it,
    tone: 'c1',
    description: 'Robust tech foundations built to scale — websites, portals and custom software designed around how your organization actually works.',
    tags: ['Websites & landing pages', 'Custom software', 'Member portals', 'Integrations'],
  },
  {
    n: '02',
    title: 'Digital Marketing',
    kicker: 'Reach',
    output: 'An audience',
    icon: icons.marketing,
    tone: 'c2',
    description: 'Targeted outreach that builds your brand and puts your work in front of the people who need it.',
    tags: ['Meta & search advertising', 'Brand identity', 'Content & creative', 'Campaign management'],
  },
  {
    n: '03',
    title: 'Lead Generation',
    kicker: 'Leads',
    output: 'Qualified leads',
    icon: icons.leads,
    tone: 'c3',
    description: 'Turn that attention into inquiries, with every lead captured and qualified automatically so your team spends its time on the ones that are ready.',
    tags: ['Lead capture & qualification', 'Meta Lead Ads', 'Enrollment & lead funnels'],
  },
  {
    n: '04',
    title: 'Customer Acquisition',
    kicker: 'New business',
    output: 'Paying customers',
    icon: icons.acquisition,
    tone: 'c4',
    description: 'Convert qualified leads into new business, with every inquiry followed up and booked automatically.',
    tags: ['Automated follow-up', 'Booking systems', 'Missed-lead recovery', 'CRM routing'],
  },
  {
    n: '05',
    title: 'Growth Strategy',
    kicker: 'Growth',
    output: 'Measurable growth',
    icon: icons.growth,
    tone: 'c5',
    description: 'Achieve sustainable, measurable growth through analytics, reporting and continuous optimization.',
    tags: ['Performance dashboards', 'Analytics & tracking', 'Cost-per-lead reporting', 'Ongoing optimization'],
  },
];

