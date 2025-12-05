export default function ValueProps() {
  const props = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Google Business Profile Overhaul',
      description: 'Get found by parents searching for daycare. We optimize your GBP with the right categories, photos, posts, and review strategy to dominate local search results.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Brand & Visual Refresh',
      description: 'Modernize your identity with professional branding that builds trust. New logo, color palette, fonts, and social media templates that make parents say "yes."',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Modern AI-powered Website',
      description: 'A beautiful, mobile-responsive website you can easily update. Showcases your programs, staff, and testimonials—designed to convert visitors into enrolled families.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI Chatbot',
      description: 'Our custom AI chatbot handles FAQs, tour requests, pricing questions, and enrollment info 24/7—so families feel supported even after hours.',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Everything Your Daycare Needs to Thrive Online</h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            We handle the complete digital transformation so you can focus on what you do best—
            caring for children and running your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {props.map((prop, index) => (
            <div key={index} className="card-hover">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4">
                {prop.icon}
              </div>
              <h3 className="text-2xl mb-3">{prop.title}</h3>
              <p className="text-dark/70">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
