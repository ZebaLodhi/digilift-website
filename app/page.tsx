import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import faqData from "@/data/faq.json";

import Chatbot from "@/components/Chatbot"; // ⭐ Chatbot injected into body

export const metadata: Metadata = {
  title: "Home",
  description:
    "DigiLift helps local daycare centers modernize their digital presence with Google Business Profile optimization, professional websites, brand refresh, and online booking systems.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: "DigiLift for Daycare",
    description:
      "Digital marketing and web design services specifically for daycare centers and childcare providers",
    url: "https://digilift-daycare.com",
    logo: "https://digilift-daycare.com/logo.png",
    image: "https://digilift-daycare.com/og-image.png",
    telephone: "+1-555-123-4567",
    email: "hello@digilift-daycare.com",
    address: { "@type": "PostalAddress", addressCountry: "US" },
    priceRange: "$1,497 - $4,997",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "50" },
    areaServed: { "@type": "Country", name: "United States" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <ValueProps />

      {/* RESULTS SECTION */}
      <section className="section bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Real Impact for Real Daycares</h2>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto">
              Our proven process delivers measurable results that directly impact your enrollment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-2xl mb-6 text-center">Before DigiLift</h3>
              <ul className="space-y-3">
                {[
                  "Invisible in Google search results",
                  "Outdated or non-existent website",
                  "Inconsistent branding across platforms",
                  "Manual tour scheduling = missed opportunities",
                  "Few online reviews or outdated testimonials",
                  "No way to measure marketing ROI",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-dark/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card bg-gradient-to-br from-accent/5 to-accent/10 ring-2 ring-accent">
              <h3 className="text-2xl mb-6 text-center">After DigiLift</h3>
              <ul className="space-y-3">
                {[
                  "Top of Google search results for local searches",
                  "Professional, mobile-optimized website",
                  "Cohesive brand that builds trust instantly",
                  "Automated booking system capturing every lead",
                  "Steady stream of 5-star reviews",
                  "Clear analytics showing enrollment growth",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ⭐ TRUSTED BY SECTION — HIDDEN FOR NOW */}
      {false && (
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Trusted by Daycare Centers Nationwide</h3>
              <p className="text-dark/70">
                Join the growing community of childcare providers who've modernized with DigiLift
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-20 bg-neutral-100 rounded-xl"
                >
                  <span className="text-dark/40 font-semibold">Daycare Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Common Questions</h2>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto">
              Everything you need to know about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQ items={faqData} limit={5} />

            <div className="text-center mt-12">
              <Link href="/about#faq" className="btn-outline">
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      {/* Inject the chatbot DOM into body */}
      <Chatbot />
    </>
  );
}
