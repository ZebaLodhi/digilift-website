import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import faqData from '@/data/faq.json';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about DigiLift for Daycare - our mission to help local childcare centers modernize their digital presence, our proven process, and why we are passionate about supporting daycare owners.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-neutral via-white to-neutral-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Mission: Empowering Local Daycares</h1>
            <p className="text-xl md:text-2xl text-dark/80">
              We believe every daycare deserves a professional digital presence that fills seats
              and builds trust with parents—without breaking the bank or requiring technical
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h2 className="text-3xl mb-6">Why DigiLift Exists</h2>
              <div className="space-y-4 text-lg text-dark/80">
                <p>
                  We started DigiLift after noticing a frustrating pattern: amazing daycare centers
                  with incredible staff, beautiful facilities, and proven track records were
                  struggling to fill seats—not because they weren't great, but because parents
                  couldn't find them online.
                </p>
                <p>
                  Meanwhile, newer centers with slick websites and optimized Google profiles were
                  getting all the tour requests, even when their programs weren't as strong.
                </p>
                <p>
                  The playing field wasn't level. Legacy daycare businesses were being left behind
                  in the digital age, losing families to competitors who simply had better online
                  visibility.
                </p>
                <p className="font-semibold text-primary">We created DigiLift to change that.</p>
                <p>
                  Our packages are designed specifically for daycare owners—busy operators who
                  don't have time to learn digital marketing or web design. We handle everything
                  from start to finish, delivering a complete digital transformation at a fair,
                  one-time price with fast turnaround.
                </p>
                <p>
                  No confusing monthly retainers. No surprise fees. No tech jargon. Just honest
                  service that helps you compete in today's digital-first world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our 4-Step Process</h2>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto">
              A proven methodology that delivers results every time
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Audit',
                description:
                  'We analyze your current digital presence: website, Google Business Profile, online reviews, social media, and competitor positioning. We identify gaps and opportunities to help you stand out.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Revamp Plan',
                description:
                  "Based on the audit and your goals, we create a detailed roadmap with timelines, deliverables, and milestones. You'll know exactly what we're building and when you'll receive it.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Build & Launch',
                description:
                  'Our team gets to work on your branding, website, Google optimization, and marketing systems. We keep you updated and incorporate your feedback through structured revision rounds.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                ),
              },
              {
                step: '04',
                title: 'Measure & Improve',
                description:
                  "After launch, we set up analytics tracking and train you on how to maintain everything. We monitor performance and guide you on how to keep growing enrollment.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
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

      {/* TEAM SECTION (HIDDEN UNTIL YOU HAVE A TEAM) */}
      {/*
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Emily Rodriguez',
                role: 'Founder & Strategy Director',
                bio: '10+ years in digital marketing for local businesses, specializing in childcare providers.',
              },
              {
                name: 'Marcus Chen',
                role: 'Lead Designer',
                bio: 'Brand and web design expert with a passion for creating trust-building visuals.',
              },
              {
                name: 'Sarah Thompson',
                role: 'SEO & Analytics Specialist',
                bio: 'Local SEO guru helping daycares dominate search results and track meaningful metrics.',
              },
            ].map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 bg-neutral-200 rounded-full mx-auto mb-4">
                  <div className="w-full h-full flex items-center justify-center text-dark/40 font-semibold">
                    Photo
                  </div>
                </div>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-accent font-semibold mb-3">{member.role}</p>
                <p className="text-dark/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* FAQ Section */}
      <section id="faq" className="section bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto">
              Everything you need to know about working with DigiLift
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
