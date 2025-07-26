import contacts from '@/data/contacts.json';
import Image from 'next/image';
import Footer from '../Footer';
import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="snap-start snap-always min-h-screen flex flex-col justify-between px-6 text-gray-400"
    >
      <div className="flex-grow py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">📬 Let&apos;s Connect!</h2>
        <p className="text-lg md:text-xl mb-6">
          Ready to build something amazing together? Whether it&apos;s discussing cutting-edge DevOps solutions, exploring infrastructure challenges, or just sharing tech stories over coffee — I&apos;m all ears! Let&apos;s turn your ideas into reality.
        </p>
        <div className='px-2 py-4'>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.link}
                className='h-16 bg-gray-800 rounded-xl p-2 flex items-center justify-center hover:bg-sky-200 transition cursor-pointer'
              >
                <Image 
                  src={contact.img}
                  alt={contact.name}
                  width={48}
                  height={48}
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
