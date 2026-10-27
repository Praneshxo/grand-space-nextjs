"use client";

import { useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  const moveReveal = (event) => {
    const hero = heroRef.current;
    if (!hero) return;

    const bounds = hero.getBoundingClientRect();
    hero.style.setProperty('--line-reveal-x', `${event.clientX - bounds.left}px`);
    hero.style.setProperty('--line-reveal-y', `${event.clientY - bounds.top}px`);
  };

  return (
    <section
      ref={heroRef}
      className="hero"
      onPointerEnter={moveReveal}
      onPointerMove={moveReveal}
    >
      <div className="hero-line-reveal" aria-hidden="true" />
      <div className="hero-content">
        <h1>Thoughtfully shaped around you.</h1>
        <p className="hero-description">Where every aspiration finds its expression in thoughtfully designed spaces, and every detail comes together with purpose, precision, and care.</p>
        <a href="#projects" className="oval-btn">PROJECTS</a>
      </div>
      <div className="scroll-hint">SCROLL</div>
    </section>
  );
}
