'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">grand space<br /><small style={{ fontSize: '0.65rem', letterSpacing: '3px' }}>INTERIOR DESIGN STUDIO</small></div>
        <div className={`hamburger ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      <div className={`menu-overlay ${open ? 'open' : ''}`}>
        <div className="menu-links">
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="/gallery" onClick={closeMenu}>Gallery</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </>
  );
}
