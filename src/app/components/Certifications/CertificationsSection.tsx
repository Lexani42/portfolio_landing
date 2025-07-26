import React from 'react';
import certs from '@/data/certs.json';
import Image from 'next/image';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="min-h-screen flex flex-col justify-center px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-200">🎓 Certifications</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Completed Block */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">Completed</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certs.completed.map((cert) => (
              <div key={cert.name} className="bg-gray-800 rounded-xl p-4 flex flex-col items-center shadow-md">
                {cert.credlyLink ? (
                  <a 
                    href={cert.credlyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-110 transition-transform duration-200"
                    title="View on Credly"
                  >
                    <Image src={cert.badge} alt={cert.name} width={48} height={48} className="w-12 h-12 mb-3 object-contain" />
                  </a>
                ) : (
                  <Image src={cert.badge} alt={cert.name} width={48} height={48} className="w-12 h-12 mb-3 object-contain" />
                )}
                <div className="text-lg font-bold text-gray-100 text-center mb-1">{cert.name}</div>
                <div className="text-sm text-gray-400 text-center mb-1">{cert.issuer}</div>
                <div className="text-xs text-gray-500">{cert.date}</div>
                {cert.credlyLink && (
                  <div className="text-xs text-sky-400 mt-2">
                    <a 
                      href={cert.credlyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-sky-300 transition-colors"
                    >
                      View on Credly ↗
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* TBD Block */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400 text-center">TBD</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certs.tbd.map((cert) => (
              <div key={cert.name} className="bg-gray-800 rounded-xl p-4 flex flex-col items-center shadow-md opacity-70">
                <Image src={cert.badge} alt={cert.name} width={48} height={48} className="w-12 h-12 mb-3 object-contain grayscale" />
                <div className="text-lg font-bold text-gray-100 text-center mb-1">{cert.name}</div>
                <div className="text-sm text-gray-400 text-center mb-1">{cert.issuer}</div>
                <div className="text-xs text-gray-500">{cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 