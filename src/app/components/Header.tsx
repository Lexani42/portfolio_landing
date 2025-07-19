'use client';

import { useEffect, useState } from "react";
import classNames from 'classnames';
import Link from "next/link";

interface HeaderProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Header({ scrollContainerRef }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const currentScrollY = el.scrollTop;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollContainerRef]);

  return (
    <header 
      className={classNames(
        'fixed top-0 left-0 w-full z-50 transition-transform duration-300',
        {
          'transform -translate-y-full': !isVisible,
          'transform translate-y-0': isVisible,
        }
      )}
    >
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white ">
          <Link href="/" className="text-xl font-extrabold text-sky-400">Oleksii Syrov</Link>
          <ul className="flex gap-6 font-semibold text-sm">
            <li>
              <button onClick={() => scrollToSection('about', scrollContainerRef.current)} className="px-4 oy-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer">About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact', scrollContainerRef.current)} className="px-4 oy-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer">Contacts</button>
            </li>
            <li>
              <button className="px-4 oy-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                <a
                  href="/docs/CV_Oleksii_Syrov_DevOps.pdf"
                  download
                  className=""
                >
                  Downlaod CV
                </a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function scrollToSection(id: string, container: HTMLDivElement | null) {
  if (!container) return;
  const element = document.getElementById(id);
  if (element && container) {
    const top = element.offsetTop;
    container.scrollTo({ top, behavior: 'smooth' });
  }
}

