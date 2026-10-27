'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY < 100) {
        setNavHidden(false);
      } else if (currentScrollY > lastScrollY + 8) {
        setNavHidden(true);
      } else if (currentScrollY < lastScrollY - 8) {
        setNavHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${navHidden && !open ? 'nav-hidden' : ''}`}>
        <div className="logo">GS Interior Studio</div>
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
