export default function ThreeCards() {
  const cards = [
    { title: "KITCHENS", sub: "CUSTOM DESIGN KITCHENS", img: "/images/living-residential.jpg" },
    { title: "INTERIOR DESIGN", sub: "DISCOVER OUR PROJECTS", img: "/images/gallery-19.jpg" },
    { title: "MATERIALS", sub: "ADVISORY, CONSULTING, AND SALES OF MATERIALS", img: "/images/gallery-18.jpg" },
  ];

  return (
    <section className="fade-up" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="three-cards">
          {cards.map((c, i) => (
            <div key={i} className="card-overlay">
              <img src={c.img} alt={c.title} />
              <div className="card-content">
                <h2>{c.title}</h2>
                <p>{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
