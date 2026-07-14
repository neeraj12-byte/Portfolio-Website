import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(i => (i + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F8F4E8] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading label="Testimonials" title="What they say." />

        <FadeIn delay={0.15}>
          <p className="font-sans text-sm text-[#6B6B6B] -mt-8 mb-10">
            From the people I've worked with, at OLA Electric, Purdue, and BITS Pilani.
          </p>

          {/* Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm min-h-[260px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Quote */}
                <div className="border-l-[3px] border-[#A07640] pl-6 mb-8">
                  <p className="font-serif text-4xl text-[#A07640]/50 leading-none mb-3 select-none">&ldquo;</p>
                  <p className="font-sans text-lg sm:text-xl text-[#1C1C1E] leading-[1.85]">
                    {t.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={t.photo}
                        alt={t.name}
                        className={`w-full h-full object-cover ${t.imgStyle ? '' : 'object-top'}`}
                        style={t.imgStyle || undefined}
                      />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-[#1C1C1E]">{t.name}</p>
                      <p className="font-sans text-xs text-[#6B6B6B] mt-0.5">{t.title}</p>
                    </div>
                  </div>
                  {t.linkedin && (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-1.5 border border-[#1C1C1E]/20 rounded-full px-4 py-2 font-sans text-xs text-[#6B6B6B] hover:border-[#1C1C1E]/40 hover:text-[#1C1C1E] transition-colors"
                    >
                      in →
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === current
                      ? 'w-5 h-1.5 bg-[#A07640]'
                      : 'w-1.5 h-1.5 bg-[#1C1C1E]/20 hover:bg-[#1C1C1E]/40'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-[#1C1C1E]/20 flex items-center justify-center text-[#1C1C1E] hover:border-[#1C1C1E]/50 transition-colors"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[#1C1C1E]/20 flex items-center justify-center text-[#1C1C1E] hover:border-[#1C1C1E]/50 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
