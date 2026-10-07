import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | DigiLift AI',
  description:
    'How DigiLift AI handles the personal and business information you share with us. We do not sell, rent or trade your data, and we do not share it with third parties for their own purposes.',
  alternates: {
    canonical: '/privacy',
  },
};

/**
 * Shown in the page header and used for the "last updated" line. Bump this
 * whenever the wording below changes materially.
 */
const LAST_UPDATED = 'October 7, 2026';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

/**
 * The processors that actually receive data today. Keeping the list specific
 * is what makes the "we do not share your data" commitment meaningful — it
 * says exactly who touches it and why.
 */
const processors = [
  {
    name: 'Vercel',
    role: 'Hosting and aggregate traffic analytics for this website.',
  },
  {
    name: 'Resend',
    role: 'Delivers the form submissions from this site to our inbox as email.',
  },
  {
    name: 'OpenAI',
    role: 'Powers the assistant on our homepage; it processes the messages you type into it.',
  },
  {
    name: 'Meta (Facebook and Instagram)',
    role: 'Hosts the daycare lead forms we run on Facebook and Instagram; enquiries submitted there reach us through Meta.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1>
            Privacy <i>policy.</i>
          </h1>
          <p className="lede">
            What we collect, why we collect it, and the commitment that matters most:
            we do not sell your information, and we do not hand it to third parties for
            their own purposes.
          </p>
          <div className="pill-row">
            <span className="tag">Last updated {LAST_UPDATED}</span>
          </div>
          <div className="rule" />
        </div>
      </section>

      <section className="sec tight legal" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <div className="prose">
            <p>
              This policy explains how DigiLift AI (&ldquo;DigiLift AI&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information when you use{' '}
              <a href="https://www.digilift.ai">www.digilift.ai</a>, contact us, or work
              with us on a project. It covers both the personal information you give us
              and the confidential business information we come across while doing the
              work.
            </p>

            <h3>The short version</h3>
            <p>
              <strong>We do not sell, rent or trade your information.</strong> We do not
              share it with third parties for their own marketing, advertising, profiling
              or model training. We do not pass one client&rsquo;s data to another client.
              The only parties who ever handle your information are the service providers
              listed below, who process it on our behalf, under contract, solely to run
              this site and deliver the work you have asked us for.
            </p>
            <p>
              There is one deliberate exception, and you control it: if you ask us to
              arrange a daycare tour, we pass your name and contact details to that
              daycare so they can host you &mdash; and only after you have agreed to the
              tour. See &ldquo;Daycare enquiries&rdquo; below.
            </p>

            <h3>What we collect</h3>
            <p>
              <strong>Information you give us directly.</strong> When you submit the
              booking form we collect your name, organisation, industry, team size, city
              and state, email address, phone number, preferred contact method, the area
              you want the audit to focus on, the issues you select, the tools and website
              you tell us about, your timeline, how you heard about us, and anything you
              write in the free-text field.
            </p>
            <p>
              <strong>Messages to the assistant.</strong> If you use the chat assistant on
              our homepage, the messages you type are sent to our AI provider so it can
              generate a reply. Please do not paste credentials, financial details or
              anything confidential into it.
            </p>
            <p>
              <strong>Technical information.</strong> Our host records standard request
              data such as IP address, browser type and the pages requested, and we use
              aggregate analytics to understand which pages are read. This website sets no
              advertising or tracking cookies of its own.
            </p>
            <p>
              <strong>Information from an engagement.</strong> If you become a client, we
              will typically be given access to systems, accounts, documents and data in
              order to do the work — for example analytics accounts, ad accounts, CRM
              records, internal process documentation or source code.
            </p>

            <h3>Daycare enquiries (DigiLift for Daycare)</h3>
            <p>
              If you submit a daycare enquiry through one of our forms, including forms on
              Facebook or Instagram, we collect your name, phone number, email, zip code,
              your child&rsquo;s age group, and your childcare needs (start date, schedule
              and preferred tour times).
            </p>
            <p>
              We use this information only to contact you about daycare options and to
              arrange tours.{' '}
              <strong>
                We share your name and contact details with a daycare only after you have
                agreed to a tour with that daycare.
              </strong>{' '}
              We do not sell this information or use it for unrelated marketing.
            </p>
            <p>
              To have your enquiry deleted, email{' '}
              <a href="mailto:team@digilift.ai">team@digilift.ai</a>.
            </p>

            <h3>Why we use it</h3>
            <p>
              To reply to your enquiry and schedule a call; to carry out an audit and
              prepare your recommendations; to build, run and support what you have
              engaged us for; to invoice you for that work; to keep records required for
              tax and accounting; and to improve how this website works. We do not use
              your information for automated decision-making that produces legal or
              similarly significant effects.
            </p>

            <h3>Confidentiality of your business information</h3>
            <p>
              Anything you share with us in the course of an engagement — strategy,
              pricing, customer lists, internal documents, source code, credentials,
              performance figures — is treated as confidential. We use it only to perform
              the work you have engaged us for. We limit access to the people on our team
              who need it, we return or delete it on request at the end of an engagement,
              and we will not publish it, repurpose it, or disclose it to anyone outside
              our team without your written permission.
            </p>
            <p>
              We may describe work we have done for you in general terms as a case study
              or reference, including your organisation&rsquo;s name and the outcome.{' '}
              <strong>
                We will ask for your agreement in writing before we publish anything that
                identifies you.
              </strong>
            </p>

            <h3>Who processes your information</h3>
            <p>
              Running a website and delivering projects means a small number of specialist
              providers necessarily handle data on our behalf. They are bound by their
              agreements with us to process it only for the purposes we specify, and they
              may not use it for their own ends:
            </p>
            <ul>
              {processors.map((processor) => (
                <li key={processor.name}>
                  <strong>{processor.name}</strong> — {processor.role}
                </li>
              ))}
            </ul>
            <p>
              On a client project, we may also use the tools your own organisation already
              runs on — your CRM, your email platform, your cloud account. Those remain
              under your control and your agreements with those vendors.
            </p>

            <h3>When we would disclose information</h3>
            <p>
              Beyond the providers above, we disclose information only where we are
              legally required to — a court order, a lawful request from a government
              authority, or to establish or defend a legal claim — or where we need to in
              order to protect the safety or rights of someone involved. If we are ever
              compelled to hand over information about you, we will tell you unless we are
              legally prohibited from doing so.
            </p>

            <h3>How we protect it</h3>
            <p>
              This site is served over HTTPS. Access to client systems and credentials is
              restricted to the people working on your engagement, and we ask clients to
              provide scoped, revocable access rather than shared passwords wherever the
              platform supports it. No method of transmission or storage is completely
              secure, so we cannot guarantee absolute security — but if a breach affects
              your information, we will tell you promptly.
            </p>

            <h3>How long we keep it</h3>
            <p>
              Enquiries that do not lead to work are kept for up to 24 months and then
              deleted. Client records are kept for the length of the engagement and for as
              long afterwards as we need them for support, tax and accounting obligations.
              You can ask us to delete your information sooner, and we will do so unless we
              are required to retain it.
            </p>

            <h3>Your choices</h3>
            <p>
              You can ask us for a copy of the personal information we hold about you, ask
              us to correct it, or ask us to delete it. You can opt out of any email from
              us at any time. Depending on where you live, you may have additional rights
              under laws such as the GDPR or the Virginia Consumer Data Protection Act —
              including the right to object to processing and the right not to be
              discriminated against for exercising a right. Write to us at the address
              below and we will respond within 30 days.
            </p>

            <h3>Children</h3>
            <p>
              Our forms are for adults &mdash; business decision-makers, and parents or
              guardians arranging childcare. We do not collect information directly from
              children, and children should not submit our forms. Where a daycare enquiry
              includes a child&rsquo;s age group, a parent or guardian gives us that
              detail, and we use it only to match the enquiry to suitable childcare and
              tour times. If you believe a child has given us information directly,
              contact us and we will delete it.
            </p>

            <h3>International transfers</h3>
            <p>
              We are based in the United States, and the providers listed above may process
              data in the United States and elsewhere. If you contact us from outside the
              United States, you are sending your information to the United States.
            </p>

            <h3>Changes to this policy</h3>
            <p>
              If we change this policy we will update the date at the top of this page. If
              a change materially affects how we handle information you have already given
              us, we will tell you directly.
            </p>

            <h3>Contact us</h3>
            <p>
              Questions about this policy, or a request about your information, go to{' '}
              <a href="mailto:team@digilift.ai">team@digilift.ai</a> or{' '}
              <a href="tel:+15715713949">(571) 571-3949</a>.
            </p>
          </div>

          <div className="custom" style={{ marginTop: 56 }}>
            <div>
              <h3>Want to talk it through first?</h3>
              <p>
                If you would rather understand how we would handle your data before you
                send us anything, ask us. We will answer plainly.
              </p>
            </div>
            <Link className="btn btn-ink" href="/bookings">
              Get in touch <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
