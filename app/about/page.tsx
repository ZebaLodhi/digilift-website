import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import faqData from '@/data/faq.json';

export const metadata: Metadata = {
  title: 'About DigiLift AI | AI Growth & Automation Consultant',
  description:
    'DigiLift AI was built to help small businesses move beyond scattered marketing tactics and into structured growth systems. Learn about our approach and founder Zeba Lodhi.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-neutral via-white to-neutral-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#00C2A8] uppercase tracking-widest mb-4">
              About DigiLift AI
            </p>
            <h1 className="mb-6">
              Built to Replace Scattered Marketing with Structured Growth Systems
            </h1>
            <p className="text-xl md:text-2xl text-dark/70">
              We combine data analytics, AI tools, automation workflows, and performance
              marketing to help businesses capture, qualify, and convert leads more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h2 className="text-3xl mb-6">Why DigiLift AI Exists</h2>
              <div className="space-y-4 text-lg text-dark/80">
                <p>
                  DigiLift AI was built to help small businesses move beyond scattered
                  marketing tactics and into structured growth systems. Most businesses
                  are running ads, building websites, and sending follow-up emails
                  manually — without a clear picture of what's working or why leads go cold.
                </p>
                <p>
                  The problem isn't always the ads or the website. It's the system around
                  them — how leads are captured, qualified, routed, and followed up with.
                  When that system is broken or missing, marketing spend gets wasted and
                  good leads fall through the cracks.
                </p>
                <p>
                  We build the systems that connect those pieces and make the whole process
                  measurable and repeatable — so businesses can grow without adding more
                  manual work to their plate.
                </p>
                <p className="font-semibold text-primary">
                  The goal is not just more leads. It's better leads that actually convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section bg-neutral">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card-hover">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-[#1F3B73]/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#1F3B73]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#00C2A8] uppercase tracking-widest mb-2">
                    Founder
                  </p>
                  <h3 className="text-2xl font-bold mb-1">Zeba Lodhi</h3>
                  <p className="text-[#1F3B73] font-semibold mb-4">
                    AI Growth & Automation Consultant
                  </p>
                  <p className="text-dark/70 leading-relaxed">
                    Zeba Lodhi is an AI Growth & Automation Consultant with a background
                    in business intelligence, data analytics, machine learning projects,
                    and digital growth systems. She helps businesses use AI tools,
                    automation platforms, and analytics to improve lead generation,
                    follow-up, and conversion workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#00C2A8] uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="mb-4">Our 4-Step Process</h2>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto">
              Every engagement follows the same structured approach —
              from understanding your current setup to optimizing results over time.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Audit',
                description:
                  'We review your current website, ads, lead forms, follow-up process, and reporting to identify where leads are being lost and where the biggest improvements are possible.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Build',
                description:
                  'We create or improve your lead funnel, automation workflows, and tracking setup based on what the audit reveals. Every build is scoped around a specific outcome.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Automate',
                description:
                  'We connect your lead sources to tools like Google Sheets, CRM systems, email and SMS platforms, and AI-assisted workflows — so follow-up happens automatically.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                step: '04',
                title: 'Optimize',
                description:
                  'We monitor performance, improve lead quality, reduce wasted spend, and help convert more inquiries into customers. Results improve month over month.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
            ].map((process, index) => (
              <div key={index} className="card-hover">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4 md:mb-0">
                      {process.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-5xl font-bold text-accent/20">{process.step}</span>
                      <h3 className="text-2xl">{process.title}</h3>
                    </div>
                    <p className="text-dark/70 text-lg">{process.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto">
              Everything you need to know about working with DigiLift AI
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqData} />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}