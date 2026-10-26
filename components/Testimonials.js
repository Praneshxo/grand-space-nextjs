export default function Testimonials() {
  return (
    <section className="fade-up" style={{ background: 'var(--cream)', textAlign: 'center' }}>
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: 800, margin: '0 auto 24px', fontStyle: 'italic' }}>
          “Grand Space Interiors transformed our home into a dream space! Their attention to detail was remarkable.” – Sarah T.
        </p>
        <p style={{ fontSize: '1.25rem', maxWidth: 800, margin: '0 auto', fontStyle: 'italic' }}>
          “The team listened to our needs and delivered a stunning office design that exceeded our expectations.” – John D.
        </p>
      </div>
    </section>
  );
}
