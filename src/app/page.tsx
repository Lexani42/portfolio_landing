'use client';

import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About/AboutSection';
import Contact from './components/Contacts/ContactsSection';
import Footer from './components/Footer';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const sections = ['hero', 'about', 'contact', 'footer'];

  const scrollTo = (index: number) => {
    const target = document.getElementById(sections[index]);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (scrolling) return;

      setScrolling(true);
      setTimeout(() => setScrolling(false), 800);

      let nextIndex = sectionIndex;

      if (e.deltaY > 0) {
        nextIndex = Math.min(sectionIndex + 1, sections.length - 1);
        console.log(nextIndex)
      } else {
        nextIndex = Math.max(sectionIndex - 1, 0);
        console.log(nextIndex)
      }

      scrollTo(nextIndex);
      setSectionIndex(nextIndex);
    };

    const container = containerRef.current;
    container?.addEventListener('wheel', handleWheel, { passive: false });

    return () => container?.removeEventListener('wheel', handleWheel);
  }, [sectionIndex, scrolling]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden"
    >
      <Header scrollContainerRef={containerRef} />
      <main>
          <Hero />
          <About />
          <Contact />
          <Footer />
      </main>
    </div>
  );
}
