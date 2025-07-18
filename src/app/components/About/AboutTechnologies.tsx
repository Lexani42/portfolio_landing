import technologies from '@/data/technologies.json';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutTechnologies() {
    const [selectedTech, setSelectedTech] = useState<null | typeof technologies[0]>(null);

    return (
        <div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-sky-600 justify-center">
                {technologies.map((tech) => (
                    <button
                        key={tech.name}
                        onClick={() => setSelectedTech(tech)}
                        className='main-w-[100px] h-[100px] bg-gray-800 rounded-xl p-3 flex items-center justify-center hover:bg-sky-200 transition cursor-pointer'
                    >
                        <Image 
                            src={tech.img}
                            alt={tech.name}
                            width={64}
                            height={64}
                            className='object-contain'
                        />
                    </button>
                ))}
            </div>
            <Dialog open={!!selectedTech} onClose={() => setSelectedTech(null)} className="relative z-50">
                <div className="fixed inset-0 bg-black/60" aria-hidden="true"></div>
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-gray-800 text-white p-6 rounded-xl max-w-md w-full">
                        <Dialog.Title className="text-xl font-bold md-2 text-center">
                            {selectedTech?.name}
                        </Dialog.Title>
                        <Dialog.Description>
                            {selectedTech?.contents.map((sentence) => (
                                <p className='md-4'>{sentence}</p>
                            ))}
                        </Dialog.Description>
                        <div className="text-center">
                            <button
                                onClick={() => setSelectedTech(null)}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}