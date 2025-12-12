"use client";

export default function ComparisonTable() {
  const featureRows = [
    {
      feature: "Google Business Profile Optimization",
      starter: true,
      growth: true,
      premium: true,
    },
    {
      feature: "Custom Website Pages",
      starter: "4 pages",
      growth: "6 pages",
      premium: "8 pages (premium design)",
    },
    {
      feature: "Brand Identity Upgrade",
      starter: "Basic refresh",
      growth: "Expanded brand kit",
      premium: "Full brand upgrade",
    },
    {
      feature: "Online Booking / Inquiry System",
      starter: false,
      growth: true,
      premium: "Advanced flows",
    },
    {
      feature: "SEO Level",
      starter: "Basic",
      growth: "Enhanced",
      premium: "Advanced + Schema",
    },
    {
      feature: "Parent Resource Center",
      starter: false,
      growth: false,
      premium: true,
    },
    {
      feature: "Video Integration",
      starter: false,
      growth: false,
      premium: true,
    },
    {
      feature: "Local SEO Enhancements",
      starter: false,
      growth: false,
      premium: true,
    },
    {
      feature: "Revision Rounds",
      starter: "1 round",
      growth: "2 rounds",
      premium: "3 rounds",
    },
    {
      feature: "Support Level",
      starter: "Standard",
      growth: "30-day priority",
      premium: "60-day priority",
    },
  ];

  const check = (
    <span className="text-green-600 font-bold text-lg">✔</span>
  );
  const cross = (
    <span className="text-gray-300 font-bold text-lg">—</span>
  );

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-2">Package Comparison</h2>
        <p className="text-center text-dark/60 mb-10">
          Compare core features across all DigiLift packages.
        </p>

        <div className="overflow-x-auto rounded-xl shadow-sm border border-neutral-200 bg-white max-w-5xl mx-auto">
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="bg-neutral-50 text-dark/70 border-b">
                <th className="px-4 py-4 font-semibold text-sm">Features</th>
                <th className="px-4 py-4 font-semibold text-sm text-center">
                  Starter
                </th>
                <th className="px-4 py-4 font-semibold text-sm text-center bg-primary/5 text-primary rounded-t-md">
                  Growth <span className="ml-1 px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">Popular</span>
                </th>
                <th className="px-4 py-4 font-semibold text-sm text-center">
                  Premium
                </th>
              </tr>
            </thead>

            <tbody>
              {featureRows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b last:border-0 ${
                    i % 2 === 0 ? "bg-neutral-50/50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-4 font-medium text-dark/80 w-[45%]">
                    {row.feature}
                  </td>

                  {/* Starter */}
                  <td className="px-4 py-4 text-center">
                    {row.starter === true
                      ? check
                      : row.starter === false
                      ? cross
                      : row.starter}
                  </td>

                  {/* Growth */}
                  <td className="px-4 py-4 text-center bg-primary/5 font-semibold text-primary rounded-md">
                    {row.growth === true
                      ? check
                      : row.growth === false
                      ? cross
                      : row.growth}
                  </td>

                  {/* Premium */}
                  <td className="px-4 py-4 text-center">
                    {row.premium === true
                      ? check
                      : row.premium === false
                      ? cross
                      : row.premium}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
