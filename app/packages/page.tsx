import type { Metadata } from 'next';
import PackageCard from '@/components/PackageCard';
import CTA from '@/components/CTA';

import rawData from '@/data/packages.json';
import type { PackagesJson } from '@/types/package';

const pkgData = rawData as PackagesJson;

export const metadata: Metadata = {
  title: 'Growth Systems & Pricing | DigiLift AI',
  description:
    'Choose the right growth system for your business. From a focused audit to a full appointment engine and ongoing fractional growth partnership. Clear scope, measurable outcomes.',
};

export default function PackagesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: pkgData.packages.map((pkg, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: pkg.name,
        description: pkg.description,
        offers: {
          '@type': 'Offer',
          price: pkg.price.replace('$', '').replace(',', ''),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `https://digilift.ai/packages#${pkg.id}`,
        },
      },
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-neutral via-white to-neutral-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              How We Work Together
            </p>
            <h1 className="mb-6">
              Growth Systems Built Around Outcomes
            </h1>
            <p className="text-xl md:text-2xl text-dark/70 mb-8 max-w-2xl mx-auto">
              Every engagement is scoped around a specific result — more qualified leads,
              faster follow-up, and appointments that actually show up.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark/50">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No long-term contracts
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Clear scope and deliverables
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Built for schools and small businesses
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section bg-white">
        <div className="container-custom">

          {/* Trust bar */}
          <div className="text-center mb-14">
            <p className="text-sm text-dark/40 uppercase tracking-widest font-medium">
              Trusted by schools, daycares, and growth-stage small businesses
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start mb-20">
            {pkgData.packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                name={pkg.name}
                tagline={pkg.tagline}
                price={pkg.price}
                priceNote={pkg.priceNote}
                turnaround={pkg.turnaround}
                description={pkg.description}
                features={pkg.features}
                isPopular={pkg.isPopular === true}
                priceId={pkg.priceId}
                cta={pkg.cta}
                guarantee={pkg.guarantee}
              />
            ))}
          </div>

          {/* What's Included */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-neutral-100 p-10">
              <h3 className="text-2xl font-bold text-center mb-2">
                What Every Engagement Includes
              </h3>
              <p className="text-center text-dark/50 text-sm mb-8">
                Regardless of which offer you choose, every client gets the same standard of work.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-base mb-4 text-primary">
                    Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {pkgData.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-dark/70">
                        <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-base mb-4 text-primary">
                    Our Process
                  </h4>
                  <ul className="space-y-3">
                    {pkgData.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-dark/70">
                        <span className="text-accent font-bold flex-shrink-0">
                          {i + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="section bg-neutral">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Common Questions</h2>
            <p className="text-dark/60 text-lg">
              Not sure which offer is right for you? Start with the audit.
              It tells us both exactly where to focus.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              {
                q: "What if I'm not sure which offer is right for me?",
                a: "Start with the Growth Intelligence Audit. It gives us a clear picture of your current setup and tells you exactly which next step makes the most sense for your business.",
              },
              {
                q: "Do I need an existing ad account or CRM?",
                a: "No. We can build your lead tracking and automation from scratch using Google Sheets and Meta Ads. If you have existing tools, we'll integrate with them.",
              },
              {
                q: "How is this different from hiring a marketing agency?",
                a: "Agencies typically run campaigns and report on them. We build the full system — from how leads are captured and qualified, to how they're followed up with and tracked — and hand you something that runs without constant manual input.",
              },
              {
                q: "Is there a contract for the monthly retainer?",
                a: "No long-term contract. The Fractional Growth Partner engagement runs month to month. Most clients stay because results improve — not because they're locked in.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-dark mb-2">{item.q}</h4>
                <p className="text-dark/60 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}