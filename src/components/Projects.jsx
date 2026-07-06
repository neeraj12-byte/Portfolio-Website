import { TrendingUp, Gauge, MapPin, Layers } from 'lucide-react'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import { projects } from '../data/projects'

const iconMap = {
  TrendingUp,
  Gauge,
  MapPin,
  Layers,
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#F8F4E8] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Projects" title="Things I've shipped." />
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = iconMap[p.icon]
            return (
              <FadeIn key={p.id} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl border border-[#1C1C1E]/10 hover:border-[#1C1C1E]/20 hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden">
                  {/* Gradient cover */}
                  <div className={`h-36 bg-gradient-to-b ${p.color} flex items-center justify-center flex-shrink-0`}>
                    {Icon && (
                      <Icon
                        size={36}
                        className="text-[#1C1C1E]/20 group-hover:text-[#1C1C1E]/30 transition-colors duration-300"
                        strokeWidth={1}
                      />
                    )}
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-widest text-[#6B6B6B] mb-1">
                          {p.subtitle}
                        </p>
                        <h3 className="font-serif text-2xl font-semibold text-[#1C1C1E] leading-tight">
                          {p.title}
                        </h3>
                      </div>
                      <span className="font-sans text-xs text-[#6B6B6B] whitespace-nowrap mt-1 flex-shrink-0">
                        {p.period}
                      </span>
                    </div>

                    <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed flex-1 mb-5">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-sans text-[11px] font-medium px-3 py-1 rounded-full bg-[#F8F4E8] text-[#6B6B6B] border border-[#1C1C1E]/8"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
