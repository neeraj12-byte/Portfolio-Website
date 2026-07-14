import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Certifications" title="Staying at the edge." />

        <FadeIn delay={0.05}>
          <p className="font-sans text-sm text-[#6B6B6B] -mt-8 mb-12 max-w-2xl leading-relaxed">
            Anthropic certifications are among the first issued, less than a year old. These aren't box-ticking; they're a direct signal of where I spend my learning time.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.credential} delay={i * 0.08}>
              <div className="group bg-[#F8F4E8] rounded-2xl p-6 border border-[#1C1C1E]/8 hover:border-[#A07640]/30 hover:shadow-sm transition-all duration-300 h-full flex flex-col">
                {/* Anthropic badge */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-[#D4570C] flex items-center justify-center flex-shrink-0">
                    <span className="font-serif italic text-white text-sm font-bold leading-none">A</span>
                  </div>
                  <span className="font-sans text-xs font-semibold text-[#6B6B6B]">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-[#1C1C1E] leading-snug mb-3">
                  {cert.title}
                </h3>

                <p className="font-sans text-xs text-[#6B6B6B] leading-relaxed flex-1 mb-4">
                  {cert.description}
                </p>

                <div className="mt-auto border-t border-[#1C1C1E]/8 pt-3">
                  <p className="font-sans text-xs text-[#6B6B6B]">{cert.date}</p>
                  <p className="font-sans text-[10px] text-[#6B6B6B]/50 mt-0.5 font-mono">
                    {cert.credential}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
