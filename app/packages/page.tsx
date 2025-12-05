import type { Metadata } from 'next';
import PackageCard from '@/components/PackageCard';
import ComparisonTable from '@/components/ComparisonTable';
import CTA from '@/components/CTA';
import packages from '@/data/packages.json';

export const metadata: Metadata = {
  title: 'Packages & Pricing',
  description:
    'Choose the perfect digital revamp package for your daycare. From starter essentials to premium white-glove service. Transparent pricing, clear deliverables, fast turnaround.',
};

export default function PackagesPage() {
  // JSON-LD Schema for Service/Product
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: packages.map((pkg, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: `${pkg.name} Package`,
        description: pkg.description,
        offers: {
          '@type': 'Offer',
          price: pkg.price.replace('$', '').replace(',', ''),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `https://digilift-daycare.com/packages#${pkg.id}`,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-neutral via-white to-neutral-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl md:text-2xl text-dark/80 mb-8">
              Choose the package that fits your daycare's needs and budget. No hidden fees,
              no surprises—just clear deliverables and fast turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                name={pkg.name}
                tagline={pkg.tagline}
                price={pkg.price}
                priceNote={pkg.priceNote}
                turnaround={pkg.turnaround}
                description={pkg.description}
                features={pkg.features}
                isPopular={pkg.id === 'growth'}
              />
            ))}
          </div>

          {/* Additional Details */}
          <div className="max-w-4xl mx-auto">
            <div className="card bg-neutral-100">
              <h3 className="text-2xl mb-6 text-center">What's Included in Every Package</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-primary">Deliverables</h4>
                  <ul className="space-y-2 text-dark/70">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      Complete audit of current digital presence
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      Detailed revamp strategy & timeline
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      All source files & brand assets
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      Training on how to maintain & update
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      Documentation & best practices guide
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-primary">Our Process</h4>
                  <ul className="space-y-2 text-dark/70">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">1.</span>
                      Free consultation & needs assessment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">2.</span>
                      Kickoff call & information gathering
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">3.</span>
                      Design & development with regular updates
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">4.</span>
                      Review & revision rounds
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">5.</span>
                      Launch, training, & ongoing support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Add-ons Section */}
      <section className="section bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Popular Add-Ons</h2>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto">
              Enhance your package with these optional services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Professional Photography</h3>
              <p className="text-dark/70 mb-4">Half-day on-site photo session</p>
              <p className="text-2xl font-bold text-accent">+$500</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Social Media Management</h3>
              <p className="text-dark/70 mb-4">First month of content & posting</p>
              <p className="text-2xl font-bold text-accent">+$400</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Additional Location</h3>
              <p className="text-dark/70 mb-4">Setup for multi-location operators</p>
              <p className="text-2xl font-bold text-accent">+$1,500</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
