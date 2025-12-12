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
                priceId={pkg.priceId}   
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
            {/* Add-ons cards left the same */}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
