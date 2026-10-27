'use client';

import { useEffect, useRef, useState } from 'react';

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

  const [scrollService, setScrollService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);
  const serviceRows = useRef([]);
  const activeService = hoveredService ?? scrollService;

  useEffect(() => {
    let frameId;

    const updateActiveService = () => {
      frameId = null;
      const section = sectionRef.current;
      if (!section) return;

      const sectionBounds = section.getBoundingClientRect();
      if (sectionBounds.bottom <= 0 || sectionBounds.top >= window.innerHeight) {
        setScrollService(null);
        return;
      }

      const viewportCenter = window.innerHeight * 0.52;
      let nearestIndex = null;
      let nearestDistance = Infinity;

      serviceRows.current.forEach((row, index) => {
        if (!row) return;
        const bounds = row.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
        const distance = Math.abs((bounds.top + bounds.bottom) / 2 - viewportCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      if (nearestIndex !== null) {
        setScrollService((current) => current === nearestIndex ? current : nearestIndex);
      }
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateActiveService);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container services-container">
        <p className="services-kicker">WHAT WE DO</p>
        <h2 className="section-title">Our Premium Services</h2>
        <div className="services-showcase">
          <div className="services-list" aria-label="Interior design services" onMouseLeave={() => setHoveredService(null)}>
          {services.map((s, i) => (
            <button
              key={s.title}
              ref={(element) => { serviceRows.current[i] = element; }}
              type="button"
              className={`service-row ${activeService === i ? 'is-active' : ''}`}
              onMouseEnter={() => setHoveredService(i)}
              onFocus={() => setHoveredService(i)}
              onClick={() => setHoveredService(i)}
            >
              <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="service-name">{s.title}</span>
              <span className="service-arrow" aria-hidden="true">↗</span>
              <span className="service-hover-image" aria-hidden="true">
                <img src={s.img} alt="" />
              </span>
            </button>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
