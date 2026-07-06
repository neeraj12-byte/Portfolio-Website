import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'
import { highlights } from '../data/highlights'

const tagColors = {
  ACHIEVEMENT: 'text-[#A07640] bg-[#A07640]/8',
  SCALE:       'text-[#2563EB] bg-[#2563EB]/8',
  IMPACT:      'text-[#059669] bg-[#059669]/8',
  PROGRAM:     'text-[#7C3AED] bg-[#7C3AED]/8',
  AI:          'text-[#0891B2] bg-[#0891B2]/8',
  AWARD:       'text-[#D97706] bg-[#D97706]/8',
}

const topBarColors = {
  ACHIEVEMENT: 'bg-[#A07640]',
  SCALE:       'bg-[#2563EB]',
  IMPACT:      'bg-[#059669]',
  PROGRAM:     'bg-[#7C3AED]',
  AI:          'bg-[#0891B2]',
  AWARD:       'bg-[#D97706]',
}

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="By the numbers" title="Impact, at a glance." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.07}>
              <div className="group relative overflow-hidden bg-white rounded-2xl border border-[#1C1C1E]/10 hover:border-[#1C1C1E]/20 hover:shadow-md transition-all duration-300 h-full">
                {/* Color top bar */}
                <div className={`h-1 w-full ${topBarColors[h.type] || 'bg-[#6B6B6B]'}`} />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`font-sans text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${tagColors[h.type] || 'text-gray-500 bg-gray-100'}`}>
                      {h.type}
                    </span>
                    <span className="font-sans text-xs text-[#6B6B6B]">{h.year}</span>
                  </div>
                  <h3 className="font-serif text-4xl font-bold text-[#1C1C1E] mb-3 leading-none">
                    {h.title}
                  </h3>
                  <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed">
                    {h.description}
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
