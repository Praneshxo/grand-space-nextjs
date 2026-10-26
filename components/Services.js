export default function Services() {
  const services = [
    { title: "Residential Interior Design", desc: "Creating personalized living spaces that blend comfort and aesthetics. From cozy apartments to luxurious homes.", img: "/images/ai-residential.png" },
    { title: "Commercial Interior Design", desc: "Designing professional environments that enhance productivity and brand identity for offices and retail.", img: "/images/ai-commercial.png" },
    { title: "Office Space Planning", desc: "Optimizing layouts to improve workflow, collaboration, and employee satisfaction.", img: "/images/gallery-18.jpg" },
    { title: "Custom Furniture Design", desc: "Crafting unique furniture pieces tailored to fit your space and style perfectly.", img: "/images/gallery-21.jpg" },
    { title: "Modular Kitchen Interiors", desc: "Bespoke modular kitchen solutions that enhance functionality and everyday living.", img: "/images/ai-kitchen.png" },
    { title: "Renovation & Remodeling", desc: "Transforming existing spaces into fresh, modern environments from concept to completion.", img: "/images/gallery-25.jpg" },
    { title: "Lighting Design", desc: "Enhancing ambiance and functionality through thoughtful, layered lighting solutions.", img: "/images/gallery-19.jpg" },
    { title: "Bedroom & Home Interiors", desc: "Designing peaceful bedrooms and complete homes with soft colors and elegant décor.", img: "/images/gallery-20.jpg" },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <p className="services-kicker">WHAT WE DO</p>
        <h2 className="section-title">Our Premium Services</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className={`service-panel ${i % 2 ? 'service-panel-reverse' : ''}`}>
              <div className="service-panel-media">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="service-panel-copy">
                <span className="service-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#contact" className="service-link">DISCUSS YOUR SPACE <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
