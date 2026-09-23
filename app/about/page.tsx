import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import faqData from '@/data/faq.json';

export const metadata: Metadata = {
  title: 'About DigiLift AI | AI Growth & Automation Consultant',
  description:
    'DigiLift AI was built to help small businesses move beyond scattered marketing tactics and into structured growth systems. Learn about our approach and founder Zeba Lodhi.',
};

const steps = [
  {
    title: 'Audit',
    description:
      'We review your current website, ads, lead forms, follow-up process, and reporting to identify where leads are being lost and where the biggest improvements are possible.',
  },
  {
    title: 'Build',
    description:
      'We create or improve your lead funnel, automation workflows, and tracking setup based on what the audit reveals. Every build is scoped around a specific outcome.',
  },
  {
    title: 'Automate',
    description:
      'We connect your lead sources to tools like Google Sheets, CRM systems, email and SMS platforms, and AI-assisted workflows — so follow-up happens automatically.',
  },
  {
    title: 'Optimize',
    description:
      'We monitor performance, improve lead quality, reduce wasted spend, and help convert more inquiries into customers. Results improve month over month.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">About DigiLift AI</div>
          <h1>
            Built to replace scattered marketing with <i>structured growth systems.</i>
          </h1>
          <p className="lede">
            We combine data analytics, AI tools, automation workflows, and performance
            marketing to help businesses capture, qualify, and convert leads more efficiently.
          </p>
          <div className="pill-row">
            <span className="tag">Data analytics</span>
            <span className="tag">AI &amp; automation</span>
            <span className="tag">Performance marketing</span>
          </div>
          <div className="rule" />
        </div>
      </section>

      <section className="sec" id="story">
        <div className="wrap">
          <div className="split">
            <div>
              <div className="eyebrow">Why DigiLift AI exists</div>
              <h2 className="h2">
                The problem is rarely the ads. <i>It is the system around them.</i>
              </h2>
            </div>
            <div className="prose">
              <p>
                DigiLift AI was built to help small businesses move beyond scattered
                marketing tactics and into structured growth systems. Most businesses
                are running ads, building websites, and sending follow-up emails
                manually — without a clear picture of what&rsquo;s working or why leads go cold.
              </p>
              <p>
                The problem isn&rsquo;t always the ads or the website. It&rsquo;s the system around
                them — how leads are captured, qualified, routed, and followed up with.
                When that system is broken or missing, marketing spend gets wasted and
                good leads fall through the cracks.
              </p>
              <p>
                We build the systems that connect those pieces and make the whole process
                measurable and repeatable — so businesses can grow without adding more
                manual work to their plate.
              </p>
              <p>
                <strong>
                  The goal is not just more leads. It&rsquo;s better leads that actually convert.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec paper" id="founder">
        <div className="wrap">
          <div className="eyebrow">Founder</div>
          <h2 className="h2">
            The person behind <i>the work.</i>
          </h2>

          <div className="founder">
            <div className="portrait">
              <Image
                src="/brand/zeba-founder.jpg"
                alt="Zeba Lodhi — AI Growth & Automation Consultant"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: '100% 50%' }}
              />
            </div>
            <div>
              <h3>Zeba Lodhi</h3>
              <p className="role">AI Growth &amp; Automation Consultant</p>
              <div className="prose">
                <p>
                  Zeba Lodhi is an AI Growth &amp; Automation Consultant with a background
                  in business intelligence, data analytics, machine learning projects,
                  and digital growth systems. She helps businesses use AI tools,
                  automation platforms, and analytics to improve lead generation,
                  follow-up, and conversion workflows.
                </p>
              </div>
              <div style={{ marginTop: 32 }}>
                <Link className="btn btn-ink" href="/bookings">
                  Book a call with Zeba
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="process">
        <div className="wrap">
          <div className="eyebrow">How we work</div>
          <h2 className="h2">
            One process, <i>four steps.</i>
          </h2>
          <p className="lede">
            Every engagement follows the same structured approach — from understanding
            your current setup to optimizing results over time.
          </p>

          <div className="steps">
            {steps.map((step, i) => (
              <div className="step" key={step.title}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tight" id="faq">
        <div className="wrap">
          <div className="faq">
            <div>
              <div className="eyebrow">FAQ</div>
              <h2 className="h2">
                Questions, <i>answered.</i>
              </h2>
              <p className="lede">
                Everything you need to know about working with DigiLift AI.
              </p>
            </div>
            <FAQ items={faqData} />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
