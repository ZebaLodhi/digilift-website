import type { Metadata } from 'next';
import PackageCard from '@/components/PackageCard';
import ComparisonTable from '@/components/ComparisonTable';
import CTA from '@/components/CTA';

import rawData from '@/data/packages.json';
import type { PackagesJson } from '@/types/package';

// Correctly cast the JSON to your interface
const pkgData = rawData as PackagesJson;

export const metadata: Metadata = {
  title: 'Packages & Pricing',
  description:
    'Choose the perfect digital revamp package for your daycare. From starter essentials to premium white-glove service. Transparent pricing, clear deliverables, fast turnaround.',
};

export default function PackagesPage() {
  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: pkgData.packages.map((pkg, index) => ({
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
            <h1 className="mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl md:text-2xl text-dark/80 mb-8">
              Choose the package that fits your daycare's needs and budget.
              No hidden fees, no surprises—just clear deliverables and fast turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
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
                isPopular={pkg.id === 'growth'}
                priceId={pkg.priceId}
              />
            ))}
          </div>

          {/* Included In Every Package */}
          <div className="max-w-4xl mx-auto">
            <div className="card bg-neutral-100">
              <h3 className="text-2xl mb-6 text-center">What's Included in Every Package</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Deliverables */}
                <div>
                  <h4 className="font-bold text-lg mb-3 text-primary">Deliverables</h4>
                  <ul className="space-y-2 text-dark/70">
                    {pkgData.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <h4 className="font-bold text-lg mb-3 text-primary">Our Process</h4>
                  <ul className="space-y-2 text-dark/70">
                    {pkgData.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent">{i + 1}.</span>
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

      <ComparisonTable />

      {/* Add-ons */}
      <section className="section bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Popular Add-Ons</h2>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto">
              Enhance your package with these optional services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"></div>
        </div>
      </section>

      <CTA />
    </>
  );
}
