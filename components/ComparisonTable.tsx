import packages from '@/data/packages.json';

export default function ComparisonTable() {
  const features = [
    { label: 'Google Business Profile Optimization', starter: true, growth: true, premium: true },
    { label: 'NAP Citations', starter: '10 directories', growth: '30+ directories', premium: '50+ directories' },
    { label: 'Brand Refresh', starter: 'Basic', growth: 'Complete Kit', premium: 'Custom Strategy' },
    { label: 'Website Pages', starter: '4 pages', growth: '6 pages', premium: '8 pages' },
    { label: 'Online Booking System', starter: false, growth: true, premium: true },
    { label: 'Review Generation System', starter: false, growth: true, premium: 'Advanced' },
    { label: 'Professional Photography', starter: false, growth: 'Optional', premium: 'Included' },
    { label: 'Social Media Templates', starter: false, growth: '10 templates', premium: '20+ templates' },
    { label: 'Analytics & Reporting', starter: 'Setup only', growth: 'First month', premium: 'First 3 months' },
    { label: 'Revision Rounds', starter: '1', growth: '2', premium: '3' },
    { label: 'Post-Launch Support', starter: 'Email only', growth: '30 days', premium: '90 days priority' },
  ];

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <svg className="w-6 h-6 text-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-neutral-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    }
    return <span className="text-sm text-dark/70">{value}</span>;
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Package Comparison</h2>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto">
            Choose the package that fits your needs and budget
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-neutral-200">
                <th className="text-left py-4 px-4 font-bold text-dark">Features</th>
                {packages.map((pkg) => (
                  <th key={pkg.id} className="text-center py-4 px-4">
                    <div className="font-bold text-xl text-primary">{pkg.name}</div>
                    <div className="text-sm text-dark/60 font-normal mt-1">{pkg.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-dark">{feature.label}</td>
                  <td className="py-4 px-4 text-center">{renderCell(feature.starter)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(feature.growth)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(feature.premium)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="card">
              <h3 className="text-2xl mb-2">{pkg.name}</h3>
              <div className="text-accent font-bold mb-4">{pkg.price}</div>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="text-sm text-dark/70">{feature.label}</span>
                    <div>
                      {renderCell(
                        pkg.id === 'starter'
                          ? feature.starter
                          : pkg.id === 'growth'
                          ? feature.growth
                          : feature.premium
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
