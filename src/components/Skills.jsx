import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import { skills } from '../data/skills'

// These AI skills get a terracotta tint to signal they're the standout capability
const aiHighlights = new Set(['Claude Code', 'Agentic AI', 'MCP Servers'])

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[#F8F4E8] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Skills" title="What I work with." />
        <div className="space-y-10">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-5">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => {
                    const isHighlight = aiHighlights.has(item)
                    return (
                      <span
                        key={item}
                        className={`font-sans text-sm font-medium px-4 py-2 rounded-full border transition-colors duration-200 cursor-default ${
                          isHighlight
                            ? 'bg-[#A07640]/8 border-[#A07640]/25 text-[#A07640] hover:bg-[#A07640]/14'
                            : 'border-[#1C1C1E]/15 text-[#1C1C1E] bg-white hover:border-[#A07640]/30 hover:text-[#A07640]'
                        }`}
                      >
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
