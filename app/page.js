'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import HowWeWork from '../components/HowWeWork';
import Values from '../components/Values';
import Services from '../components/Services';
import ThreeCards from '../components/ThreeCards';
import Stats from '../components/Stats';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Register browser-only plugins after the page has mounted. Registering
    // at module scope can break server rendering and leave a blank page.
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
    // Fade-up animations for sections
    gsap.utils.toArray('.fade-up').forEach((el) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      });
    });

    // Stats counter
    gsap.utils.toArray('.stat-num').forEach((el) => {
      const end = Number(el.dataset.value);
      gsap.fromTo(el, { textContent: 0 }, {
        textContent: end,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
        onUpdate: function () {
          el.textContent = Math.ceil(this.targets()[0].textContent);
        },
        onComplete: () => { el.textContent = end; },
      });
    });

    gsap.from('.services-showcase', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.services-showcase', start: 'top 82%' },
    });

    // Revert animations and ScrollTriggers when leaving the page or during
    // Fast Refresh so stale triggers cannot break the next render.
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <HowWeWork />
      <Values />
      <Services />
      <ThreeCards />
      <Stats />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
