import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Chatbot from "@/components/Chatbot";
import faqData from "@/data/faq.json";

/* =========================
   SEO + OPEN GRAPH METADATA
   ========================= */
export const metadata: Metadata = {
  title: "AI Growth & Automation Systems for Schools and Small Businesses | DigiLift AI",
  description:
    "DigiLift AI helps schools, daycares, childcare centers, and small businesses generate qualified leads, automate follow-up, and turn inquiries into booked appointments using AI-powered growth systems.",

  alternates: {
    canonical: "https://digilift.ai/",
  },

  openGraph: {
    type: "website",
    url: "https://digilift.ai/",
    title: "AI Growth & Automation Systems for Schools and Small Businesses | DigiLift AI",
    description:
      "AI-powered lead generation, automation, and conversion systems for schools, daycares, and local businesses.",
    images: [
      {
        url: "https://digilift.ai/og-facebook-v2.jpg",
        width: 1200,
        height: 630,
        alt: "DigiLift AI – AI Growth & Automation Systems",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Growth & Automation Systems | DigiLift AI",
    description:
      "Lead generation automation and growth systems for schools, daycares, and small businesses.",
    images: ["https://digilift.ai/og-facebook-v2.jpg"],
  },
};

/* =========================
   PAGE
   ========================= */
export default function Home() {

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DigiLift AI",
    description:
      "AI growth and automation systems for schools, daycares, childcare centers, and small businesses.",
    url: "https://digilift.ai/",
    logo: "https://digilift.ai/logo.png",
    image: "https://digilift.ai/og-facebook-v2.jpg",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "AI Lead Generation Automation",
      "Enrollment Funnel Automation",
      "AI Lead Nurture Systems",
      "Growth Analytics and Optimization",
    ],
  };

  const heroFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a growth automation system?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A growth automation system connects your lead sources, forms, CRM or tracking tools, and follow-up workflows so that leads are captured, qualified, and followed up with automatically.",
        },
      },
      {
        "@type": "Question",
        name: "Who does DigiLift AI work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "DigiLift AI works with schools, daycares, childcare centers, and local small businesses that rely on inquiries, tours, or appointments to grow.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can I see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most clients see faster lead follow-up and better lead qualification within the first few weeks of launching their growth system.",
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroFaqSchema) }}
      />

      {/* SEO Intro (invisible) */}
      <section className="sr-only">
        <h1>AI Growth & Automation Systems for Schools and Small Businesses</h1>
        <p>
          DigiLift AI helps schools, daycares, childcare centers, and local businesses
          generate qualified leads, automate follow-up, and turn inquiries into booked
          tours and appointments using AI-powered growth systems.
        </p>
      </section>

      {/* Hero */}
      <Hero />

      {/* Value Props */}
      <ValueProps />

      {/* How It Works */}
      <section id="how-it-works" className="section bg-neutral px-4 md:px-0">
        <div className="container-custom max-w-6xl">
          <header className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold text-[#00C2A8] uppercase tracking-widest mb-3">
              The Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto">
              A simple, structured process — from audit to ongoing optimization.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit",
                description:
                  "We review your current website, ads, lead forms, follow-up process, and reporting to identify exactly where leads are being lost.",
              },
              {
                step: "02",
                title: "Build",
                description:
                  "We create or improve your lead funnel, automation workflows, and tracking setup based on what the audit reveals.",
              },
              {
                step: "03",
                title: "Automate",
                description:
                  "We connect your lead sources to Google Sheets, CRM systems, email and SMS platforms, and AI-assisted follow-up workflows.",
              },
              {
                step: "04",
                title: "Optimize",
                description:
                  "We monitor performance, improve lead quality, reduce wasted spend, and help convert more inquiries into customers over time.",
              },
            ].map((item, i) => (
              <div key={i} className="card-hover text-center">
                <div className="w-14 h-14 rounded-full bg-[#1F3B73] text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/bookings"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#1F3B73] text-white font-semibold text-base hover:bg-[#162D5C] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book a Growth Automation Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section bg-white px-4 md:px-0">
        <div className="container-custom max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-sm font-semibold text-[#00C2A8] uppercase tracking-widest mb-3">
              Client Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Enrollment-Driven Businesses
            </h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Real systems built for schools and small businesses that depend on
              booked appointments and enrolled students.
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <div className="card p-8 md:p-10 ring-1 ring-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#00C2A8] px-3 py-1 rounded-full">
                  Case Study
                </span>
                <span className="text-sm text-dark/50">Ashburn, VA</span>
              </div>

              <h3 className="text-2xl font-bold mb-2">Seeds Academy</h3>
              <p className="text-dark/60 text-sm mb-6">
                Early childhood education center — Summer Camp 2026 & School Year 2026–2027 enrollment campaigns
              </p>

              <p className="text-dark/70 leading-relaxed mb-8">
                Created two enrollment lead funnels using Meta Lead Ads, instant
                form qualification, Google Sheets routing, and automated follow-up
                workflows to improve lead quality and reduce manual tracking.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Summer Camp Leads", value: "13" },
                  { label: "School Year Leads", value: "1" },
                  { label: "Total Leads", value: "14" },
                  { label: "Tools Used", value: "Meta · Sheets · Make.com · AI" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-sm font-bold text-[#1F3B73] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-dark/40 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-100 pt-6">
                <p className="text-xs text-dark/40 uppercase tracking-widest font-medium mb-3">
                  Automation stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Meta Business Suite", "Google Sheets", "Make.com", "ChatGPT", "Claude"].map(
                    (tool, i) => (
                      <span
                        key={i}
                        className="text-xs bg-neutral-100 text-dark/60 px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-neutral px-4 md:px-0">
        <div className="container-custom max-w-5xl">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Questions
            </h2>
            <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto">
              Everything you need to know about how DigiLift AI works.
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

      {/* CTA */}
      <CTA />

      {/* Chatbot */}
      <Chatbot />
    </>
  );
}