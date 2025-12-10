import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
// import Testimonials from "@/components/Testimonials"; // Hidden for now
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import faqData from "@/data/faq.json";

import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "DigiLift – Digital Marketing & Websites for Daycare Centers",
  description:
    "DigiLift transforms daycare centers with Google Business Profile optimization, mobile-friendly websites, branding, and automated booking systems. Designed for childcare providers.",
  keywords: [
    "daycare marketing",
    "childcare website design",
    "Google Business Profile daycare",
    "daycare digital marketing",
    "DigiLift",
    "childcare branding",
  ],
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: "DigiLift for Daycare",
    description:
      "Digital marketing and web design services specifically for daycare centers and childcare providers.",
    url: "https://digilift.ai",
    logo: "https://digilift.ai/logo.png",
    image: "https://digilift.ai/og-image.png",
    telephone: "+1-555-123-4567",
    email: "hello@digilift.ai",
    address: { "@type": "PostalAddress", addressCountry: "US" },
    priceRange: "$1,497 - $4,997",
    areaServed: { "@type": "Country", name: "United States" },
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <Hero />

      {/* VALUE PROPS */}
      <ValueProps />

      {/* RESULTS SECTION */}
      <section className="section bg-neutral px-4 md:px-0">
        <div className="container-custom max-w-6xl">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Impact for Daycare Centers
            </h2>
            <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto">
              Our proven strategies help daycare owners boost enrollment, modernize their online
              presence, and build trust with parents.
            </p>
          </header>

          {/* RESPONSIVE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* BEFORE */}
            <article className="card p-6 md:p-8">
              <h3 className="text-2xl text-center font-semibold mb-6">Before DigiLift</h3>
              <ul className="space-y-4">
                {[
                  "Low visibility on Google search results",
                  "Outdated or no website",
                  "Branding that doesn't build trust with parents",
                  "Manual tour scheduling causing lost opportunities",
                  "Few or outdated parent reviews",
                  "No analytics or marketing insights",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"
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
                    <span className="text-dark/80 text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* AFTER */}
            <article className="card p-6 md:p-8 bg-gradient-to-br from-accent/5 to-accent/10 ring-2 ring-accent">
              <h3 className="text-2xl text-center font-semibold mb-6">After DigiLift</h3>
              <ul className="space-y-4">
                {[
                  "Top Google rankings for daycare searches",
                  "Mobile-friendly website built for parents",
                  "Professional branding that parents trust instantly",
                  "Automated online tour booking system",
                  "Continuous stream of new 5-star reviews",
                  "Clear analytics showing enrollment growth",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-dark/80 text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS — HIDDEN */}
      {/* <Testimonials /> */}

      {/* TRUSTED BY SECTION — HIDDEN */}
      {false && (
        <section className="section bg-white px-4 md:px-0">
          <div className="container-custom max-w-6xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Trusted by Daycare Centers Nationwide
            </h3>
            <p className="text-dark/70 text-center mb-10">
              More centers are joining DigiLift every week.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-20 bg-neutral-100 rounded-xl"
                >
                  <span className="text-dark/40 font-semibold text-sm md:text-base">
                    Daycare Logo {i}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ SECTION */}
      <section className="section bg-neutral px-4 md:px-0">
        <div className="container-custom max-w-5xl">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto">
              Everything daycare owners need to know about DigiLift’s services.
            </p>
          </header>

          <FAQ items={faqData} limit={5} />

          <div className="text-center mt-12">
            <Link href="/about#faq" className="btn-outline">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      <CTA />

      {/* Chatbot */}
      <Chatbot />
    </>
  );
}
