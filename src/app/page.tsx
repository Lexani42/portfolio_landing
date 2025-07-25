'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About/AboutSection';
import Contact from './components/Contacts/ContactsSection';
import CertificationsSection from './components/Certifications/CertificationsSection';

export default function Home() {
  // Remove containerRef, sectionIndex, scrolling, and useEffect for custom scroll logic
  return (
    <div
      className="h-screen" // Remove overflow-hidden to allow default scrolling
    >
      <Header />
      <main>
        <Hero />
        <About />
        <CertificationsSection />
        <Contact />
      </main>
    </div>
  );
}
