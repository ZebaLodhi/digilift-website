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
  title: "AI, Tech & Marketing Agency in the USA | DigiLift AI",
  description:
    "DigiLift AI is a US AI, technology and marketing agency. We build apps and websites, run digital marketing, generate leads and grow customers, with AI powering every step.",
  alternates: {
    canonical: "https://www.digilift.ai/",
  },
  openGraph: {
    type: "website",
    url: "https://www.digilift.ai/",
    title: "AI, Tech & Marketing Agency in the USA | DigiLift AI",
    description:
      "We build and market digital solutions that grow your business — from idea to impact.",
    images: [
      {
        url: "https://www.digilift.ai/og-digilift-2026.jpg",
        width: 1200,
        height: 630,
        alt: "DigiLift AI — Technology, AI and Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI, Tech & Marketing Agency in the USA | DigiLift AI",
    description:
      "We build and market digital solutions that grow your business — from idea to impact.",
    images: ["https://www.digilift.ai/og-digilift-2026.jpg"],
  },
};

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DigiLift AI",
    alternateName: "DigiLift",
    slogan: "People · Technology · Possibilities",
    description:
      "AI, technology and marketing agency serving businesses across the United States: application development, AI-powered solutions, digital marketing, lead generation, customer acquisition and growth strategy.",
    url: "https://www.digilift.ai/",
    email: "team@digilift.ai",
    telephone: "+1-571-571-3949",
    logo: "https://www.digilift.ai/brand/logo/digilift-ai-icon-512.png",
    image: "https://www.digilift.ai/og-digilift-2026.jpg",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Artificial intelligence",
      "AI automation",
      "Application development",
      "Web development",
      "Digital marketing",
      "Meta advertising",
      "Lead generation",
      "Growth strategy",
    ],
    serviceType: [
      "Application Development",
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
        <h1>AI, Technology and Marketing Agency for US Businesses</h1>
        <p>
          DigiLift AI is a US-based AI, tech and marketing agency. We build and market
          digital solutions that grow your business,
          spanning application development, AI-powered solutions, digital marketing, customer
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
