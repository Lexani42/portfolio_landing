'use client';

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import classNames from "classnames";
import technologies from '@/data/technologies.json';
import AboutAvatar from "./AboutAvatar";

export default function About() {
    const [showMore, setShowMore] = useState(false);
    const [selectedTech, setSelectedTech] = useState<null | typeof technologies[0]>(null);

    return (
        <section id="about" className="min-h-screen px-6 py-20 text-slate-100">
            <AboutAvatar />
            <br />
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Oleksii Syrov. DevOps.
                </h2>

                <button
                    onClick={() => setShowMore(!showMore)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition cursor-pointer"
                >
                    {showMore ? 'Hide' : 'Get to know me'}
                </button>

                {showMore && (
                    <div
                        className={classNames(
                            'transition-all duration-500 ease-in-out overflow-hidden',
                            showMore ? 'max-h-[1000px] mt-6 opacity-100' : 'max-h-0 mt-0 opacity-0'
                        )}
                    >
                        <div className="border border-sky-600 rounded-xl p-6 bg-gray-700 text-left text-gray-200 shadow-lg">
                            <p className="mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam earum rem enim exercitationem sapiente...
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nesciunt eos fugiat magnam praesentium...
                            </p>
                        </div>
                    </div>
                )}

                <h2 className="text-3xl font-bold mb-6 mt-6">
                    Technology stack
                </h2>

                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-sky-600 justify-center">
                    {technologies.map((tech) => (
                        <button
                            key={tech.name}
                            onClick={() => setSelectedTech(tech)}
                            className="main-w-[100px] h-[100px] bg-gray-800 rounded-xl p-3 flex items-center justify-center hover:bg-sky-200 transition"
                        >
                            <Image 
                                src={tech.img}
                                alt={tech.name}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </button>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedTech} onClose={() => setSelectedTech(null)} className="relative z-50">
                <div className="fixed inset-0 bg-black/60" aria-hidden="true"></div>
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-gray-800 text-white p-6 rounded-xl max-w-md w-full">
                        <Dialog.Title className="text-xl font-bold mb-2 text-center">
                            {selectedTech?.name}
                        </Dialog.Title>
                        <Dialog.Description>
                            {selectedTech?.desc}
                        </Dialog.Description>
                        <div className="text-center">
                            <button 
                                onClick={() => setSelectedTech(null)}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
                            >
                                Close
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </section>
    );
}