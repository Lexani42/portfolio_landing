'use client';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur shadow-sm">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800">Syrov Oleksii</div>
                <ul className="fkex gap-6 text-gray-700 font-medium text-sm">
                    <li>
                        <a href="#about" className="hover:text-blue-600 transition">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}