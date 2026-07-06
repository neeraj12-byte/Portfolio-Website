import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import FadeIn from './FadeIn'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F8F4E8] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading — matches reference: just the title, underline, subtitle */}
        <FadeIn className="mb-10">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1C1E] leading-tight">
            Testimonials
          </h2>
          <motion.div
            className="mt-3 mb-5 h-[2px] bg-[#A07640] origin-left"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="font-sans text-sm text-[#6B6B6B]">
            From the people I've worked with — at OLA Electric, Purdue, and BITS Pilani.
          </p>
        </FadeIn>

        {/* Carousel — not wrapped in FadeIn so Embla measures correctly */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.name} className="flex-shrink-0 min-w-full">
                {/* White card, shadow only (no border) */}
                <div className="bg-white rounded-2xl shadow-sm p-10 sm:p-14">

                  {/* " sits at top of the left border, integrated with the quote block */}
                  <div className="border-l-2 border-[#A07640]/40 pl-6 mb-10">
                    <p className="font-serif text-5xl text-[#1C1C1E]/10 leading-none mb-4 select-none">
                      &ldquo;
                    </p>
                    <p className="font-sans text-base sm:text-lg text-[#1C1C1E] leading-[1.85]">
                      {t.quote}
                    </p>
                  </div>

                  {/* Author row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1C1C1E] flex items-center justify-center flex-shrink-0">
                        <span className="font-sans text-sm font-semibold text-white tracking-wide">
                          {t.initials}
                        </span>
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators + prev/next arrows */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === selectedIndex
                    ? 'w-5 h-1.5 bg-[#A07640]'
                    : 'w-1.5 h-1.5 bg-[#1C1C1E]/20 hover:bg-[#1C1C1E]/40'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#1C1C1E]/20 flex items-center justify-center text-[#1C1C1E] hover:border-[#1C1C1E]/50 transition-colors"
            >
              ←
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#1C1C1E]/20 flex items-center justify-center text-[#1C1C1E] hover:border-[#1C1C1E]/50 transition-colors"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
