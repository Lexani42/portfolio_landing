'use client';

import AboutAvatar from "./AboutAvatar";
import AboutDetails from "./AboutDetails";
import AboutTechnologies from "./AboutTechnologies";

export default function About() {

    return (
        <section id="about" className="snap-start snap-always min-h-screen px-6 py-20 text-slate-100">
            <AboutAvatar />
            <br />
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Oleksii Syrov. DevOps.
                </h2>

                <AboutDetails />

                <h2 className="text-2xl font-bold mb-6 mt-6">
                    Technology stack
                </h2>

                <AboutTechnologies />
            </div>
        </section>
    );
}