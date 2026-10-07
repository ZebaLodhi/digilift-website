import type { Metadata } from 'next';
import Link from 'next/link';

import rawData from '@/data/packages.json';
import type { PackageData, PackagesJson } from '@/types/package';

const pkgData = rawData as PackagesJson;

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Technology, AI and marketing under one roof. From a free growth audit to lead and booking engines, AI automation builds, custom software and an ongoing growth partnership. Clear scope, fixed prices.',
  alternates: {
    canonical: '/packages',
  },
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

function PriceCard({ pkg }: { pkg: PackageData }) {
  const featured = pkg.isPopular === true;
  const from = /^from\s+/i.test(pkg.price);
  const amount = from ? pkg.price.replace(/^from\s+/i, '') : pkg.price;

  return (
    <div className={featured ? 'price featured' : 'price'} id={pkg.id}>
      {featured && <span className="best">Most popular</span>}

      <div className="k">{pkg.kicker}</div>
      <h3>{pkg.name}</h3>

      <div className="amt">
        {from && <small style={{ marginLeft: 0, marginRight: 6 }}>from</small>}
        {amount}
        <small>{pkg.priceNote}</small>
      </div>

      <div className="when">{pkg.turnaround}</div>
      <p>{pkg.description}</p>

      <ul className="checks">
        {pkg.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {pkg.notIncluded && pkg.notIncluded.length > 0 && (
        <div className="not">Not included: {pkg.notIncluded.join(' · ')}</div>
      )}

      <Link className={featured ? 'btn btn-white' : 'btn btn-ghost'} href="/bookings">
        {pkg.cta ?? 'Book a Call'} <Arrow />
      </Link>

      {pkg.guarantee && <div className="gtee">{pkg.guarantee}</div>}
    </div>
  );
}

export default function PackagesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: pkgData.packages.map((pkg, index) => {
      const amount = pkg.price.replace(/[^0-9.]/g, '') || '0';
      const isFrom = /^from/i.test(pkg.price.trim());
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: pkg.name,
          description: pkg.description,
          offers: isFrom
            ? {
                '@type': 'AggregateOffer',
                lowPrice: amount,
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: `https://www.digilift.ai/packages#${pkg.id}`,
              }
            : {
                '@type': 'Offer',
                price: amount,
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: `https://www.digilift.ai/packages#${pkg.id}`,
              },
        },
      };
    }),
  };

  const primary = pkgData.packages.filter((p) =>
    ['audit', 'funnel', 'automation'].includes(p.id)
  );
  const secondary = pkgData.packages.filter((p) => ['software', 'partner'].includes(p.id));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Services &amp; pricing</div>
          <h1>
            Technology, AI and marketing
            <br />
            under <i>one roof.</i>
          </h1>
          <p className="lede">
            Every engagement is scoped around a measurable result and priced before we
            start. No retainers you cannot leave, no change orders you did not agree to.
          </p>
          <div className="pill-row">
            <span className="tag">Fixed prices agreed up front</span>
            <span className="tag">No long-term contracts</span>
            <span className="tag">Response within 24 hours</span>
          </div>
          <div className="rule" />
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="prices">
            {primary.map((pkg) => (
              <PriceCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="head" style={{ marginTop: 96 }}>
            <div>
              <div className="eyebrow">Also available</div>
              <h2 className="h2">
                Bigger builds and <i>ongoing partnership.</i>
              </h2>
            </div>
          </div>

          <div className="prices two" style={{ marginTop: 40 }}>
            {secondary.map((pkg) => (
              <PriceCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec paper">
        <div className="wrap">
          <div className="eyebrow">Every engagement</div>
          <h2 className="h2">
            What you get, <i>whichever you choose.</i>
          </h2>

          <div className="includes">
            <div>
              <h4
                style={{
                  fontSize: 12,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--gray)',
                  fontWeight: 500,
                  marginBottom: 14,
                }}
              >
                Deliverables
              </h4>
              <ul className="checks">
                {pkgData.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontSize: 12,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--gray)',
                  fontWeight: 500,
                  marginBottom: 14,
                }}
              >
                How we work
              </h4>
              <ul className="dash">
                {pkgData.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="custom" style={{ marginTop: 56 }}>
            <div>
              <h3>Not sure which one fits?</h3>
              <p>
                Start with the free growth audit. It costs nothing and shows exactly what
                you need before you spend anything on a build.
              </p>
            </div>
            <Link className="btn btn-ink" href="/bookings">
              Book a free call <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
