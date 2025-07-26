'use client';

import technologies from '@/data/technologies.json';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutTechnologies() {
  const [selectedTech, setSelectedTech] = useState<null | typeof technologies[0]>(null);
  return (
    <div>
      <div className="px-2 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech) => (
            <button
              key={tech.name}
              onClick={() => setSelectedTech(tech)}
              className="h-16 bg-gray-800 rounded-xl p-2 flex items-center justify-center hover:bg-sky-200 transition cursor-pointer"
            >
              <Image
                src={tech.img}
                alt={tech.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedTech} onClose={() => setSelectedTech(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-gray-800 text-white p-6 rounded-xl max-w-md w-full">
            <div className="text-xl font-bold mb-2 text-center">
              {selectedTech?.name}
            </div>
            <div>
              {selectedTech?.contents.map((sentence, index) => (
                <p key={index} className="mb-4">{sentence}</p>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={() => setSelectedTech(null)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
