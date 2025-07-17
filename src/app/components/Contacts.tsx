export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">📬 Contact Me</h2>
        <p className="text-lg md:text-xl mb-6">
          Feel free to reach out — I’m always open to discussing DevOps, infrastructure challenges, or collaboration opportunities.
        </p>
        <div className="flex justify-center gap-6 text-xl">
          <a href="mailto:lexxani42@gmail.com" className="hover:underline text-blue-400">Email</a>
          <a href="https://github.com/lexani42" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/oleksii-syrov/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
