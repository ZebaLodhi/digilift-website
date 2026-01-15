import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
// import Testimonials from "@/components/Testimonials"; // Hidden for now
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Chatbot from "@/components/Chatbot";
import faqData from "@/data/faq.json";

/* =========================
   SEO + OPEN GRAPH METADATA
   ========================= */
export const metadata: Metadata = {
  title: "Daycare Website Design & Digital Marketing",
  description:
    "DigiLift helps home-based and local daycare centers increase enrollment through professional website design, Google Business Profile optimization, and digital marketing built for parents.",

  alternates: {
    canonical: "https://digilift.ai/",
  },

  openGraph: {
    type: "website",
    url: "https://digilift.ai/",
    title: "Daycare Website Design & Digital Marketing | DigiLift",
    description:
      "Professional website design and digital marketing for daycare centers. Get found on Google, build parent trust, and book more tours.",
    images: [
      {
        url: "https://digilift.ai/og-facebook-v2.jpg",
        width: 1200,
        height: 630,
        alt: "DigiLift – Daycare Website Design & Digital Marketing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Daycare Website Design & Digital Marketing | DigiLift",
    description:
      "Enrollment-focused marketing for home-based and local daycare centers.",
    images: ["https://digilift.ai/og-facebook-v2.jpg"],
  },
};

/* =========================
   PAGE
   ========================= */
export default function Home() {
  /* ---------- Business Schema ---------- */
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DigiLift for Daycare",
    description:
      "Website design and digital marketing services built specifically for home-based and local daycare centers.",
    url: "https://digilift.ai/",
    logo: "https://digilift.ai/logo.png",
    image: "https://digilift.ai/og-facebook-v2.jpg",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Daycare Website Design",
      "Daycare Digital Marketing",
      "Google Business Profile Optimization",
      "Daycare SEO",
    ],
  };

  /* ---------- HERO FAQ SCHEMA ---------- */
  const heroFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you work with small or home-based daycares?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. DigiLift works with home-based daycares, single-location centers, and growing childcare businesses across the United States.",
        },
      },
      {
        "@type": "Question",
        name: "What services does DigiLift provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "DigiLift provides daycare website design, Google Business Profile optimization, branding, and automated tools that help parents book tours.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can my daycare see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most daycare owners see improved Google visibility and increased parent inquiries within weeks of launching their DigiLift system.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroFaqSchema) }}
      />

      {/* =========================
          SEO INTRO (INVISIBLE)
         ========================= */}
      <section className="sr-only">
        <h1>Daycare Website Design & Digital Marketing</h1>
        <p>
          DigiLift helps home-based and local daycare centers increase enrollment,
          rank on Google, and book more tours through professional website design
          and childcare-focused digital marketing.
        </p>
      </section>

      {/* =========================
          HERO
         ========================= */}
      <Hero />

      {/* =========================
          VALUE PROPOSITIONS
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
                  "Outdated or missing daycare website",
                  "Weak branding that doesn’t build trust",
                  "Manual tour scheduling and missed inquiries",
                  "Few or outdated online reviews",
                  "No insight into marketing performance",
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
