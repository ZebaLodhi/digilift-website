const principles = [
  {
    title: 'One partner',
    copy: 'The people who design and build your product are the same people who automate, launch and grow it. No handoffs between agencies, no translating between vendors.',
  },
  {
    title: 'Systems, not tactics',
    copy: 'We build the system around your marketing: how leads are captured, qualified, routed, followed up and measured. Not just more leads. Better leads that convert.',
  },
  {
    title: 'Scoped around outcomes',
    copy: 'Every engagement is scoped around a specific result: more qualified leads, faster follow-up, booked tours and appointments that actually show up.',
  },
];

export default function Approach() {
  return (
    <section className="sec" id="approach">
      <div className="wrap">
        <div className="eyebrow">Our approach</div>

        <p className="statement">
          We turn ideas into results. We design and build digital products, put AI and
          automation to work on the tasks that slow you down, launch it properly, and
          market it to <i>the right audience.</i>
        </p>

        <div className="cols3">
          {principles.map((item, i) => (
            <div key={item.title}>
              <h3>
                {item.title} <span>{String(i + 1).padStart(2, '0')}</span>
              </h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
