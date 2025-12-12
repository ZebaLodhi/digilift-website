"use client";

import { useState } from "react";
import pkgData from "@/data/packages.json";

const check = (
  <span className="text-primary text-lg font-semibold leading-none">✔</span>
);
const dash = <span className="text-dark/40 text-lg leading-none">—</span>;

// Highlighter column index — Premium package
const PREMIUM_INDEX = 2; // starter=0, growth=1, premium=2

export default function ComparisonTable() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Extract only the package arrays
  const packages = pkgData.packages;

  // Build feature rows from Premium list then match others
  const allFeatures = [
    ...new Set(packages.flatMap((pkg) => pkg.features)),
  ].sort();

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-2">Package Comparison</h2>
        <p className="text-center text-dark/60 mb-12 max-w-xl mx-auto">
          Compare features across all DigiLift packages.
        </p>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-neutral-50 sticky top-0 z-10">
              <tr>
                <th className="py-4 px-6 text-left font-semibold text-dark/70 w-1/2">
                  Features
                </th>

                {packages.map((pkg, index) => (
                  <th
                    key={pkg.id}
                    className={`py-4 px-6 text-center font-semibold relative ${
                      index === PREMIUM_INDEX
                        ? "bg-primary/5 border-x border-primary/20"
                        : ""
                    }`}
                  >
                    <div className="text-base font-semibold">{pkg.name}</div>
                    {index === PREMIUM_INDEX && (
                      <span className="absolute -top-3 right-1/2 translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded-md shadow-sm">
                        Most Value
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {allFeatures.map((feature, i) => (
                <tr
                  key={i}
                  className={`border-t border-neutral-200 ${
                    i % 2 === 0 ? "bg-neutral-50/40" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-6">{feature}</td>

                  {packages.map((pkg, index) => (
                    <td
                      key={pkg.id + i}
                      className={`py-3 px-6 text-center ${
                        index === PREMIUM_INDEX ? "bg-primary/5" : ""
                      }`}
                    >
                      {pkg.features.includes(feature) ? check : dash}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE ACCORDION */}
        <div className="md:hidden space-y-4 mt-10">
          {packages.map((pkg, pkgIndex) => (
            <div
              key={pkg.id}
              className={`border rounded-xl overflow-hidden ${
                pkgIndex === PREMIUM_INDEX
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-neutral-200"
              }`}
            >
              <button
                onClick={() => toggle(pkgIndex)}
                className="w-full flex items-center justify-between p-4"
              >
                <span className="font-semibold text-lg">{pkg.name}</span>
                <span className="text-dark/50 text-xl">
                  {openIndex === pkgIndex ? "−" : "+"}
                </span>
              </button>

              {openIndex === pkgIndex && (
                <div className="px-4 pb-4 space-y-2">
                  {allFeatures.map((feature, i) => (
                    <div
                      key={i}
                      className="flex justify-between border-b py-2 text-sm"
                    >
                      <span>{feature}</span>
                      <span>
                        {packages[pkgIndex].features.includes(feature)
                          ? check
                          : dash}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
