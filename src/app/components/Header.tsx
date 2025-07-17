'use client';

import { useEffect, useState } from "react";
import classNames from 'classnames';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

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
                    <div className="text-xl font-extrabold tesxt-sky-400">Oleksii Syrov</div>
                    <ul className="flex gap-6 font-semibold text-sm">
                        <li>
                            <a href="#about" className="px-4 oy-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300">About</a>
                        </li>
                        <li>
                            <a href="#contact" className="px-4 oy-2 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-gray-900 transition-colors duration-300">Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}