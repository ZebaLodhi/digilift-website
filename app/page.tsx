import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Pipeline from "@/components/Pipeline";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import Chatbot from "@/components/Chatbot";
import faqData from "@/data/faq.json";

export const metadata: Metadata = {
  title: "Your All-In-One Solution: Tech, AI and Marketing | DigiLift AI",
  description:
    "DigiLift AI builds and markets digital solutions that grow your business. Custom software, AI-powered solutions, digital marketing, customer acquisition and growth strategy under one roof.",
  alternates: {
    canonical: "https://digilift.ai/",
  },
  openGraph: {
    type: "website",
    url: "https://digilift.ai/",
    title: "Your All-In-One Solution: Tech, AI and Marketing | DigiLift AI",
    description:
      "We build and market digital solutions that grow your business — from idea to impact.",
    images: [
      {
        url: "https://digilift.ai/og-digilift-2026.jpg",
        width: 1200,
        height: 630,
        alt: "DigiLift AI — Technology, AI and Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your All-In-One Solution: Tech, AI and Marketing | DigiLift AI",
    description:
      "We build and market digital solutions that grow your business — from idea to impact.",
    images: ["https://digilift.ai/og-digilift-2026.jpg"],
  },
};

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DigiLift AI",
    description:
      "End-to-end technology and marketing solutions: custom software, AI-powered solutions, digital marketing, customer acquisition and growth strategy.",
    url: "https://digilift.ai/",
    email: "team@digilift.ai",
    logo: "https://digilift.ai/brand/logo/digilift-ai-icon-512.png",
    image: "https://digilift.ai/og-digilift-2026.jpg",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "IT Development",
      "AI-Powered Solutions",
      "Digital Marketing",
      "Lead Generation",
      "Customer Acquisition",
      "Growth Strategy",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.slice(0, 5).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="sr-only">
        <h1>Your All-In-One Solution: Technology, AI and Marketing</h1>
        <p>
          DigiLift AI builds and markets digital solutions that grow your business,
          spanning IT development, AI-powered solutions, digital marketing, customer
          acquisition and growth strategy.
        </p>
      </section>

      <Hero />
      <Approach />
      <Pipeline />
      {/* Hidden for now: the services cards (components/Services.tsx) and the
          growth audit band (components/AuditCta.tsx). */}
      <Work />

      <section className="sec paper" id="faq">
        <div className="wrap">
          <div className="faq">
            <div>
              <div className="eyebrow">FAQ</div>
              <h2 className="h2">
                Questions, <i>answered.</i>
              </h2>
              <p className="lede">Not covered here? Book a call and ask us anything.</p>
              <div style={{ marginTop: 28 }}>
                <Link className="btn btn-ghost" href="/bookings">
                  Book a free growth audit
                </Link>
              </div>
            </div>
            <FAQ items={faqData} />
          </div>
        </div>
      </section>

      <Chatbot />
    </>
  );
}
