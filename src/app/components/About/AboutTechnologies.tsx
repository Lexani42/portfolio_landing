'use client';

import technologies from '@/data/technologies.json';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function AboutTechnologies() {
  const [selectedTech, setSelectedTech] = useState<null | typeof technologies[0]>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // drag scroll vars
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown || !scrollRef.current) return;
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5; // drag speed
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div>
      {/* Scrollable Carousel */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        className="cursor-grab overflow-x-auto px-2 py-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* hide scrollbar (Chrome/Safari) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="flex snap-x snap-mandatory gap-4">
          {technologies.map((tech) => (
            <button
              key={tech.name}
              onClick={() => setSelectedTech(tech)}
              className="w-[calc(100%/3-1rem)] snap-start flex-shrink-0 h-[100px] bg-gray-800 rounded-xl p-3 flex item-center justify-center hover:bg-sky-200 transition cursor-pointer"
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

      {/* Modal Dialog */}
      <Dialog open={!!selectedTech} onClose={() => setSelectedTech(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-gray-800 text-white p-6 rounded-xl max-w-md w-full">
            <Dialog.Title className="text-xl font-bold mb-2 text-center">
              {selectedTech?.name}
            </Dialog.Title>
            <Dialog.Description>
              {selectedTech?.contents.map((sentence, index) => (
                <p key={index} className="mb-4">{sentence}</p>
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
