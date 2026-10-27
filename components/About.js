export default function About() {
  return (
    <section id="about" className="about-section fade-up">
      <div className="container about-editorial">
        <div className="about-intro">
          <p className="section-eyebrow">THE GRAND SPACE WAY</p>
          <h2>Interiors that feel <em>entirely yours.</em></h2>
          <p className="about-lead">At Grand Space Interiors, we believe thoughtful design transforms the way you live, work and feel at home.</p>
          <a href="#contact" className="text-link">START A CONVERSATION <span>↗</span></a>
        </div>
        <figure className="about-image">
          <img src="/images/living-commercial.jpg" alt="Warm contemporary interior designed by Grand Space" />
          <figcaption>Designed around your life, down to the last detail.</figcaption>
        </figure>
        <div className="about-philosophy">
          <span className="about-number">01</span>
          <h3>Our design philosophy</h3>
          <p>We combine creativity, function and close collaboration to create spaces that are beautiful to look at and effortless to live in.</p>
          <div className="about-principles">
            <span>Personalized design</span>
            <span>Crafted with care</span>
            <span>Seamless delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
