import packagesData from '@/data/packages.json';
import type { PackageData } from '@/types/package';

const rawPackages = packagesData.packages as PackageData[];

// --- Expand inherited features (Everything in Starter/Growth) ---
function expandFeatures(pkgs: PackageData[]): PackageData[] {
  const starter = pkgs.find(p => p.id === "starter")!;
  const growth = pkgs.find(p => p.id === "growth")!;
  const premium = pkgs.find(p => p.id === "premium")!;

  const starterFeatures = starter.features;

  const growthFeatures = [
    ...starterFeatures,
    ...growth.features.filter(f => !f.toLowerCase().startsWith("everything in starter")),
  ];

  const premiumFeatures = [
    ...growthFeatures,
    ...premium.features.filter(f => !f.toLowerCase().startsWith("everything in growth")),
  ];

  return [
    { ...starter, features: starterFeatures },
    { ...growth, features: growthFeatures },
    { ...premium, features: premiumFeatures },
  ];
}

const packages = expandFeatures(rawPackages);

// Build list of all unique features
const ALL_FEATURES: string[] = Array.from(
  new Set(packages.flatMap(pkg => pkg.features))
).sort();

export default function ComparisonTable() {
  const pkgHasFeature = (feature: string, pkg: PackageData) =>
    pkg.features.some(f => f.toLowerCase() === feature.toLowerCase());

  const renderCell = (value: boolean) => (
    value ? (
      <svg className="w-6 h-6 text-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg className="w-6 h-6 text-neutral-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  );

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Package Comparison</h2>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto">
            Compare features across all DigiLift packages.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-neutral-200">
                <th className="text-left py-4 px-4 font-bold text-dark">Features</th>
                {packages.map(pkg => (
                  <th key={pkg.id} className="text-center py-4 px-4">
                    <div className="font-bold text-xl text-primary">{pkg.name}</div>
                    <div className="text-sm text-dark/60 mt-1">{pkg.price}</div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {ALL_FEATURES.map(feature => (
                <tr key={feature} className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="py-4 px-4 font-medium text-dark">{feature}</td>
                  {packages.map(pkg => (
                    <td key={pkg.id} className="py-4 px-4 text-center">
                      {renderCell(pkgHasFeature(feature, pkg))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {packages.map(pkg => (
            <div key={pkg.id} className="card">
              <h3 className="text-2xl mb-2">{pkg.name}</h3>
              <div className="text-accent font-bold mb-4">{pkg.price}</div>

              <div className="space-y-3">
                {ALL_FEATURES.map(feature => (
                  <div key={feature} className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="text-sm text-dark/70">{feature}</span>
                    {renderCell(pkgHasFeature(feature, pkg))}
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
