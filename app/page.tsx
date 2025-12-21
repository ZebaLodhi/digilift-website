import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
// import Testimonials from "@/components/Testimonials"; // Hidden for now
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import faqData from "@/data/faq.json";
import Chatbot from "@/components/Chatbot";

/* =========================
   SEO METADATA (CRITICAL)
   ========================= */
export const metadata: Metadata = {
  title: "Daycare Website Design & Digital Marketing | DigiLift",
  description:
    "DigiLift helps daycare centers get found on Google, build parent trust, and book more tours through professional website design and digital marketing.",
  keywords: [
    "daycare website design",
    "daycare digital marketing",
    "childcare website design",
    "daycare marketing services",
    "daycare Google SEO",
    "DigiLift",
  ],
  alternates: {
    canonical: "https://digilift.ai/",
  },
};

/* =========================
   PAGE
   ========================= */
export default function Home() {
  /* ---------- Business Schema ---------- */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DigiLift",
    description:
      "Website design and digital marketing services built specifically for daycare centers and childcare providers.",
    url: "https://digilift.ai",
    logo: "https://digilift.ai/logo.png",
    image: "https://digilift.ai/og-image.png",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Daycare Website Design",
      "Daycare Digital Marketing",
      "Google Business Profile Optimization",
    ],
  };

  /* ---------- HERO FAQ SCHEMA (GOOGLE ONLY) ---------- */
  const heroFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you work with small daycare centers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. DigiLift works with home daycares, single-location centers, and growing childcare businesses across the United States.",
        },
      },
      {
        "@type": "Question",
        "name": "What services does DigiLift provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "DigiLift provides daycare website design, Google Business Profile optimization, branding, and AI chatbots that help parents book tours.",
        },
      },
      {
        "@type": "Question",
        "name": "How quickly can my daycare see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Most daycare owners see improved visibility and increased parent inquiries within weeks of launching their DigiLift system.",
        },
      },
    ],
  };

  return (
    <>
      {/* =========================
          STRUCTURED DATA
         ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================
          HERO FAQ SCHEMA (INVISIBLE)
         ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroFaqSchema) }}
      />

      {/* =========================
          SEO INTRO (HIDDEN VISUALLY, READ BY GOOGLE)
         ========================= */}
      <section className="sr-only">
        <h1>Daycare Website Design & Digital Marketing for Childcare Centers</h1>
        <p>
          DigiLift helps daycare centers attract families, rank on Google, and
          book more tours through professional website design and proven digital
          marketing strategies.
        </p>
      </section>

      {/* =========================
          HERO
         ========================= */}
      <Hero />

      {/* =========================
          VALUE PROPS
         ========================= */}
      <ValueProps />

      {/* =========================
          RESULTS SECTION
         ========================= */}
      <section className="section bg-neutral px-4 md:px-0">
        <div className="container-custom max-w-6xl">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results for Daycare Centers
            </h2>
            <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto">
              Our daycare-focused websites and marketing systems help centers
              increase enrollment, build parent trust, and stay fully booked.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* BEFORE */}
            <article className="card p-6 md:p-8">
              <h3 className="text-2xl text-center font-semibold mb-6">
                Before DigiLift
              </h3>
              <ul className="space-y-4">
                {[
                  "Low visibility on Google search results",
                  "Outdated or no daycare website",
                  "Weak branding that doesn't build parent trust",
                  "Manual tour scheduling and missed inquiries",
                  "Few or outdated online reviews",
                  "No insight into website or marketing performance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* AFTER */}
            <article className="card p-6 md:p-8 bg-gradient-to-br from-accent/5 to-accent/10 ring-2 ring-accent">
              <h3 className="text-2xl text-center font-semibold mb-6">
                After DigiLift
              </h3>
              <ul className="space-y-4">
                {[
                  "Higher Google rankings for daycare searches",
                  "Mobile-friendly website built for parents",
                  "Professional branding that builds instant trust",
                  "Automated online tour booking",
                  "Consistent 5-star parent reviews",
                  "Clear insights into enrollment growth",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          FAQ (VISIBLE)
         ========================= */}
      <section className="section bg-neutral px-4 md:px-0">
        <div className="container-custom max-w-5xl">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Daycare Website & Marketing FAQs
            </h2>
            <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto">
              Common questions daycare owners ask before improving their website
              and online presence.
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

      {/* =========================
          CTA
         ========================= */}
      <CTA />

      {/* =========================
          CHATBOT
         ========================= */}
      <Chatbot />
    </>
  );
}
