import Image from 'next/image';
import Link from 'next/link';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function Work() {
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="eyebrow">Partner success story</div>
            <h2 className="h2">
              Two projects, <i>one partner.</i>
            </h2>
          </div>
          <Link className="link" href="/bookings">
            Start a project <Arrow />
          </Link>
        </div>

        <div className="partner">
          <Image
            src="/work/sabcva-seal.png"
            alt="South Asian Business Council of Virginia"
            width={320}
            height={319}
            className="partner-logo"
          />
          <div>
            <div className="partner-k">Partner</div>
            <h3>South Asian Business Council of Virginia</h3>
            <p>
              A 501(c)(3) nonprofit uniting and empowering South Asian entrepreneurs,
              professionals and community leaders across Virginia.
            </p>
          </div>
        </div>

        {/* Project 1 — AI-powered portal */}
        <article className="case">
          <div className="case-media portal">
            <Image
              src="/work/sabcva-portal-matches.jpg"
              alt="SABCVA Alumni & Intern Platform home screen showing AI-ranked top matches, each with a match score and a generated explanation"
              width={1840}
              height={1438}
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>

          <div className="case-body">
            <div className="case-tags">
              <span className="case-type">AI-powered portal</span>
              <span className="tag">Custom software</span>
            </div>
            <h3>SABCVA Alumni &amp; Intern Platform</h3>
            <p className="case-lede">
              Every internship cohort used to reset the network: once the program ended,
              contacts scattered across third-party apps and relationships faded. The
              platform keeps alumni and interns connected, with AI working in the
              background to introduce the right people.
            </p>

            <ul className="checks">
              <li>Member profiles with roles, skills and interests, plus opt-in to mentor or volunteer</li>
              <li>A members-only directory, searchable by skill, field or experience</li>
              <li>AI smart-matching that ranks members by relevance and explains each match in plain language</li>
            </ul>

            <div className="case-stack">
              <span>Retrieval-augmented generation</span>
              <span>Azure SQL vector search</span>
              <span>Azure Functions</span>
              <span>Azure AI Foundry</span>
              <span>Microsoft sign-in</span>
            </div>

            <div className="case-foot">
              <div className="case-stat">
                1,000<small>+ alumni</small>
                <span>Target the platform is built to carry by 2027</span>
              </div>
            </div>
          </div>
        </article>

        {/* Project 2 — digital marketing */}
        <article className="case flip">
          <div className="case-media poster">
            <Image
              src="/work/empower-2026-poster.jpg"
              alt="Empower Virginia 2026 poster announcing 600+ tickets sold"
              width={1024}
              height={1536}
              sizes="(max-width: 900px) 60vw, 22vw"
            />
          </div>

          <div className="case-body">
            <div className="case-tags">
              <span className="case-type">Digital marketing</span>
              <span className="tag">Meta advertising</span>
            </div>
            <h3>Empower Virginia 2026</h3>
            <p className="case-lede">
              SABCVA&rsquo;s networking event and CEO summit, held on 20 September 2026 at
              the Hyatt Regency Dulles in Herndon, Virginia. We planned and ran the Meta ad
              campaign that drove its ticket sales.
            </p>

            <div className="case-foot">
              <div className="case-stat">
                600<small>+ tickets</small>
                <span>Sold for Empower Virginia 2026</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
