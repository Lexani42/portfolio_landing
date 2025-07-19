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

  useEffect(() => {
    const scrollTo = (index: number) => {
      const target = document.getElementById(sections[index]);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (scrolling) return;

      setScrolling(true);
      setTimeout(() => setScrolling(false), 800);

      let nextIndex = sectionIndex;
      if (e.deltaY > 0) {
        nextIndex = Math.min(sectionIndex + 1, sections.length - 1);
      } else {
        nextIndex = Math.max(sectionIndex - 1, 0);
      }

      scrollTo(nextIndex);
      setSectionIndex(nextIndex);
    };

    // ✅ Touch support
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (scrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) < 30) return;

      setScrolling(true);
      setTimeout(() => setScrolling(false), 800);

      let nextIndex = sectionIndex;
      if (deltaY > 0) {
        nextIndex = Math.min(sectionIndex + 1, sections.length - 1);
      } else {
        nextIndex = Math.max(sectionIndex - 1, 0);
      }

      scrollTo(nextIndex);
      setSectionIndex(nextIndex);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
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
