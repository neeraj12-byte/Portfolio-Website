import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#1C1C1E] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#A07640] mb-5">
            Let's Connect
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-semibold text-white leading-tight mb-6">
            Let's make<br />something happen.
          </h2>
          <p className="font-sans text-base text-white/60 mb-3 max-w-lg mx-auto">
            Actively seeking a Fall 2026 EPM or PM internship. Always happy to talk AI, EV systems, poker strategy, or the fastest route between US states.
          </p>
          <p className="font-sans text-xs text-white/30 mb-12">
            Based in Cupertino, CA · Open to remote & relocation
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/neeraj-karumanchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1C1C1E] font-sans text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#F8F4E8] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:neeraj.karumanchi25@gmail.com"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-sans text-sm font-medium px-6 py-3 rounded-full hover:border-white/50 transition-colors"
            >
              neeraj.karumanchi25@gmail.com
            </a>
            <a
              href="/Portfolio-Website/Neeraj%20Karumanchi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-white/50 hover:text-white underline underline-offset-4 transition-colors px-2 py-3"
            >
              Download Resume ↓
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
