export default function Process() {
  const steps = [
    { num: "01", title: "Consultation", desc: "We listen deeply to understand your vision, lifestyle, and requirements." },
    { num: "02", title: "Concept & Design", desc: "Creative concepts, 3D visualizations, and material selections tailored for you." },
    { num: "03", title: "Execution", desc: "Seamless project management from detailing to on-site supervision." },
    { num: "04", title: "Handover", desc: "Final styling and a space that feels uniquely yours, ready to live in." },
  ];

  return (
    <section id="process" className="process fade-up">
      <div className="container">
        <h2 className="section-title">The Process</h2>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
