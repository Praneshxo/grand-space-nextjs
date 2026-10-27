export default function Projects() {
  const projects = [
    { title: "there’s no place like home", img: "/images/gallery-21.jpg" },
    { title: "the moody blues", img: "/images/gallery-19.jpg" },
    { title: "chase the sun", img: "/images/living-residential.jpg" },
  ];

  return (
    <section id="projects" className="fade-up">
      <div className="container projects-container">
        <h2 className="section-title">our latest projects</h2>
        <a href="/gallery" className="view-all">VIEW ALL</a>
        <div className="project-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
