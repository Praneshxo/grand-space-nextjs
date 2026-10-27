export default function Testimonials() {
  const testimonials = [
    { quote: 'Grand Space Interiors transformed our home into a dream space. Their attention to detail was remarkable.', name: 'Sarah T.', project: 'Residence, Chennai' },
    { quote: 'The team listened to our needs and delivered a stunning office design that exceeded our expectations.', name: 'John D.', project: 'Workspace, Chennai' },
  ];

  return (
    <section className="testimonials-section fade-up">
      <div className="container">
        <div className="testimonials-heading">
          <p className="section-eyebrow">KIND WORDS</p>
          <h2>Made for living.<br /><em>Loved for years.</em></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={testimonial.name}>
              <span className="testimonial-index">0{index + 1}</span>
              <blockquote>“{testimonial.quote}”</blockquote>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.project}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
