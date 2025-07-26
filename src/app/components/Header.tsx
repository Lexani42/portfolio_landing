'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 left-0 w-full z-50'>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
          <Link href="/" className="text-xl font-extrabold text-gray-300">Oleksii Syrov</Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-semibold text-sm">
            <li>
              <a href="#about" className="px-4 py-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer">About</a>
            </li>
            <li>
              <a href="#contact" className="px-4 py-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer">Contacts</a>
            </li>
            <li>
              <a href="/docs/CV_Oleksii_Syrov_DevOps.pdf" download className="px-4 py-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer">Download CV</a>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="flex flex-col items-center gap-4 py-4 font-semibold text-sm">
            <li>
              <a 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
              >
                Contacts
              </a>
            </li>
            <li>
              <a 
                href="/docs/CV_Oleksii_Syrov_DevOps.pdf" 
                download 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

