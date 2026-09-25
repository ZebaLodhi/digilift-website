import type { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book a Free Growth Audit',
  description:
    "Tell us about your business, your current lead process, and where follow-up or conversion is breaking down. We'll help identify where AI and automation can create the biggest impact.",
  alternates: {
    canonical: '/bookings',
  },
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
                      <b>Tell us where you are today.</b> Fill out the form so we
                      understand what you have built, how you reach customers and
                      where growth is stalling.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>We review and respond.</b> Within 24 hours we reach out to
                      schedule a free strategy call.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Free growth audit.</b> We look at each step of your
                      pipeline, from your app or website through marketing, lead
                      generation and customer acquisition to reporting, to find where
                      results are leaking.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>A clear roadmap.</b> You receive a prioritized plan showing
                      which step to start with and where AI can take on the manual
                      work — no pressure, no hard sell.
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
                  href="tel:+15715713949"
                  style={{ display: 'block', marginTop: 6 }}
                >
                  (571) 571-3949
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
