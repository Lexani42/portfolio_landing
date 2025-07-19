'use client';

export default function Hero() {
    return (
        // snap-start snap-always min-h-screen px-6 py-20 text-slate-100
        <section id="hero" className="snap-start snap-always min-h-screen flex flex-col justify-center items-center text-center px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                🚀 DevOps that ships. Fast.
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mb-8">
                I automate infrastructure, CI/CD and monitoring. You can ship confidently and scale effortlessly.
            </p>
            <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
                Contact Me
            </a>
        </section>
    )
}
