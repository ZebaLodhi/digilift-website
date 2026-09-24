import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { icons, services } from '@/components/serviceData';
import faqData from '@/data/faq.json';

export const metadata: Metadata = {
  title: 'About DigiLift AI | From First Build to Lasting Growth',
  description:
    'DigiLift AI runs the whole pipeline — IT development, digital marketing, lead generation, customer acquisition and growth strategy — with AI powering every step.',
};

// What we do at each pipeline step, keyed to the shared service list.
const whatWeDo: Record<string, string> = {
  'IT Development':
    'We build the product your growth runs on: websites, portals and custom software designed around how your organization works.',
  'Digital Marketing':
    'We put that product in front of the right people with targeted campaigns, content and creative.',
  'Lead Generation':
    'We turn that attention into inquiries, capturing and qualifying every one automatically.',
  'Customer Acquisition':
    'We follow up, book and recover missed leads, so qualified interest becomes new business.',
  'Growth Strategy':
    'We track what worked, report on cost per lead and keep optimizing, so the next cycle starts stronger.',
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">About DigiLift AI</div>
          <h1>
            One team, from first build to <i>lasting growth.</i>
          </h1>
          <p className="lede">
            DigiLift AI takes a business from the product it runs on to the customers it
            wins: IT development, digital marketing, lead generation, customer
            acquisition and growth strategy, with AI powering every step.
          </p>
          <div className="pill-row">
            <span className="tag">Five services, one pipeline</span>
            <span className="tag">AI-powered throughout</span>
            <span className="tag">Fixed prices agreed up front</span>
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
                Growth rarely breaks at one step. <i>It breaks between them.</i>
              </h2>
            </div>
            <div className="prose">
              <p>
                Most businesses hire one vendor for the website, another for the ads and a
                third for the CRM. Each does its part, then hands off, and results leak at
                every handoff: campaigns send traffic to a site that does not convert, leads
                arrive with no one to follow them up, and nobody can say which spend
                actually worked.
              </p>
              <p>
                DigiLift AI runs the whole pipeline instead. Each step hands a result to the
                next: the product we build becomes something to market, marketing builds an
                audience, the audience becomes qualified leads, leads become paying
                customers, and customers become growth you can measure.
              </p>
              <p>
                AI works underneath all of it, taking on the repetitive work at every step
                so the pipeline keeps moving without adding manual work to your plate.
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

      <section className="sec tight" id="process">
        <div className="wrap">
          <div className="eyebrow">How we work</div>
          <h2 className="h2">
            One pipeline, <i>five steps.</i>
          </h2>
          <p className="lede">
            Every engagement is built around the same flow, and each step is scoped
            around the result it hands to the next.
          </p>

          <div className="steps five">
            {services.map((step) => (
              <div className="step" key={step.n}>
                <span className="n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{whatWeDo[step.title]}</p>
                <div className="out">{step.output}</div>
              </div>
            ))}
          </div>

          <div className="about-ai">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {icons.ai}
            </svg>
            <p>
              <b>AI powers every step:</b> AI assistants, workflow automation and data
              processing take on the repetitive work, from build to reporting.
            </p>
          </div>

          <div className="custom" style={{ marginTop: 24 }}>
            <div>
              <h3>Already have part of the pipeline in place?</h3>
              <p>
                Start with a free growth audit. We find the step where results are leaking
                and begin there.
              </p>
            </div>
            <Link className="btn btn-ink" href="/bookings">
              Book a free growth audit <Arrow />
            </Link>
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
