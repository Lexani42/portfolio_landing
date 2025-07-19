import contacts from '@/data/contacts.json';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 text-gray-400">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">📬 Contact Me</h2>
        <p className="text-lg md:text-xl mb-6">
          Feel free to reach out — I’m always open to discussing DevOps, infrastructure challenges, or collaboration opportunities.
        </p>
        <div className="flex justify-center gap-6 text-xl">
          {contacts.map((contact) => (
            <a href={contact.link} className='main-w-[100px] h-[100px] bg-gray-800 rounded-xl p-3 flex items-center justify-center hover:bg-sky-200 transition cursor-pointer'>
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
    </section>
  );
}
