import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About/AboutSection'
import Contact from './components/Contacts/ContactsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
