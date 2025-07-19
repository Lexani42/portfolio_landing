import contacts from '@/data/contacts.json';
import Image from 'next/image';
import Footer from '../Footer';
import React, { useRef } from 'react';

export default function Contact() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

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
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }

    const handleMouseUp = () => {
      isDown = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <section
      id="contact"
      className="snap-start snap-always min-h-screen flex flex-col justify-between px-6 text-gray-400"
    >
      <div className="flex-grow py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">📬 Contact Me</h2>
        <p className="text-lg md:text-xl mb-6">
          Feel free to reach out — I’m always open to discussing DevOps, infrastructure challenges, or collaboration opportunities.
        </p>
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          className='cursor-grab overflow-x-auto px-2 py-4'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
          `}</style>

          <div className="flex snap-x snap-mandatory gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.link}
                className='w-[calc(100%/3-1rem)] snap-start flex-shrink-0 h-[100px] bg-gray-800 rounded-xl p-3 flex item-center justify-center hover:bg-sky-200 transition cursor-pointer'
              >
                <Image 
                  src={contact.img}
                  alt={contact.name}
                  width={64}
                  height={64}
                  className='object-contain'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-10">
        <Footer />
      </div>
    </section>
  );
}
