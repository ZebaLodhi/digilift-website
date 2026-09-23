import type { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book a Growth Automation Audit | DigiLift AI',
  description:
    "Tell us about your business, your current lead process, and where follow-up or conversion is breaking down. We'll help identify where AI and automation can create the biggest impact.",
};

export default function BookingsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Get started</div>
          <h1>
            Ready to build a <i>smarter growth system?</i>
          </h1>
          <p className="lede">
            Tell us about your business, your current lead process, and where
            follow-up or conversion is breaking down. We will help identify where
            AI and automation can create the biggest impact.
          </p>
          <div className="pill-row">
            <span className="tag">No long-term contracts</span>
            <span className="tag">Response within 24 hours</span>
            <span className="tag">Built for schools and small businesses</span>
          </div>
          <div className="rule" />
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="contact-grid">
            <BookingForm />

            <aside className="side">
              <div className="box">
                <h4>What happens next</h4>
                <ol>
                  <li>
                    <span>
                      <b>Tell us about your business.</b> Fill out the form so we
                      understand your current setup, lead process, and where things
                      are breaking down.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>We review and respond.</b> Within 24 hours we will reach out
                      to schedule a strategy call and discuss next steps.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Growth automation audit.</b> We review your ads, forms,
                      follow-up process, and reporting to identify exactly where leads
                      are being lost.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Clear roadmap and recommendation.</b> You receive a
                      prioritized action plan and a recommendation for the right next
                      step — no pressure, no hard sell.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="box">
                <h4>Prefer to talk directly?</h4>
                <a className="big" href="mailto:team@digilift.ai" style={{ display: 'block' }}>
                  team@digilift.ai
                </a>
                <a
                  className="big"
                  href="tel:+15715876824"
                  style={{ display: 'block', marginTop: 6 }}
                >
                  (571) 587-6824
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
