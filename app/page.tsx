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

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

      {/* Case Study 1 - Millcreek */}
      <div className="card p-8 ring-1 ring-neutral-200">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#1F3B73] px-3 py-1 rounded-full">
            Completed
          </span>
          <span className="text-sm text-dark/50">Northern Virginia</span>
        </div>

        <h3 className="text-2xl font-bold mb-2">Millcreek Home Childcare</h3>
        <p className="text-dark/60 text-sm mb-6">
          Home-based childcare center — Full digital presence build
        </p>

        <p className="text-dark/70 leading-relaxed mb-8">
          Built a complete digital presence from scratch including a new website,
          brand identity, enrollment graphics, and lead capture forms — giving
          the owner a professional online presence that consistently generates
          parent inquiries.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {[
            { label: "Avg Monthly Form Submissions", value: "4" },
            { label: "Site Live Since", value: "4 months" },
            { label: "Total Leads Generated", value: "~16" },
            { label: "Forms Connected", value: "2" },
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

        <div className="border-t border-neutral-100 pt-6 mb-6">
          <p className="text-xs text-dark/40 uppercase tracking-widest font-medium mb-3">
            Deliverables
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Website Build",
              "Logo & Branding",
              "Cover Photos",
              "Enrollment Graphics",
              "Instagram Templates",
              "Contact Form",
              "Book a Tour Form",
              "GBP Reviews Display",
            ].map((item, i) => (
              <span
                key={i}
                className="text-xs bg-neutral-100 text-dark/60 px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-6">
          <p className="text-xs text-dark/40 uppercase tracking-widest font-medium mb-3">
            Tools Used
          </p>
          <div className="flex flex-wrap gap-2">
            {["Claude", "Cursor", "ChatGPT", "Canva", "Google Gemini"].map(
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

        
          href="https://www.millcreekhomechildcare.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#00C2A8] hover:text-[#00A890] transition-colors"
        >
          View Live Site
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Case Study 2 - Seeds Academy */}
      <div className="card p-8 ring-1 ring-neutral-200">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#00C2A8] px-3 py-1 rounded-full">
            Ongoing
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

        <div className="grid grid-cols-2 gap-6 mb-8">
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

        <div className="border-t border-neutral-100 pt-6 mb-6">
          <p className="text-xs text-dark/40 uppercase tracking-widest font-medium mb-3">
            Deliverables
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Meta Lead Ads",
              "Lead Form Qualification",
              "Google Sheets Routing",
              "Automated Follow-up",
              "Lead Tracking",
            ].map((item, i) => (
              <span
                key={i}
                className="text-xs bg-neutral-100 text-dark/60 px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-6">
          <p className="text-xs text-dark/40 uppercase tracking-widest font-medium mb-3">
            Automation Stack
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