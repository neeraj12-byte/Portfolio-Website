import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import { primaryExperience, secondaryExperience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Experience" title="Where I've built." />

        {/* Primary timeline */}
        <div className="space-y-8 mb-16">
          {primaryExperience.map((job, i) => (
            <FadeIn key={job.id} delay={i * 0.08}>
              <div className="relative pl-0 md:pl-10">
                {/* Dot + line — desktop only */}
                <div className="hidden md:block">
                  <div className="absolute left-0 top-7 w-3 h-3 rounded-full bg-[#A07640] ring-2 ring-[#A07640]/20 z-10" />
                  {i < primaryExperience.length - 1 && (
                    <div className="absolute left-[5px] top-10 bottom-[-32px] w-px bg-[#1C1C1E]/10" />
                  )}
                </div>

                {/* Card */}
                <div className="bg-[#F8F4E8] rounded-2xl p-6 sm:p-7">
                  {/* Header — stacks on mobile */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-1">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#1C1C1E]">
                        {job.company}
                      </h3>
                      <p className="font-sans text-sm font-medium text-[#A07640] mt-0.5">
                        {job.role}
                      </p>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                      <p className="font-sans text-sm text-[#6B6B6B]">{job.period}</p>
                      <p className="font-sans text-xs text-[#6B6B6B] mt-0.5">{job.location}</p>
                    </div>
                  </div>

                  {job.team && (
                    <p className="font-sans text-xs uppercase tracking-widest text-[#6B6B6B] mb-4 mt-2">
                      {job.team}
                    </p>
                  )}

                  {/* Flat bullets */}
                  {job.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="font-sans text-sm text-[#6B6B6B] flex gap-3 items-start">
                          <span className="text-[#1C1C1E]/25 leading-5 flex-shrink-0 mt-0.5">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Subroles (OLA) */}
                  {job.subroles && (
                    <div className="mt-5 border-t border-[#1C1C1E]/8 pt-5 space-y-5">
                      {job.subroles.map((sub, si) => (
                        <div key={sub.title} className={si > 0 ? 'border-t border-[#1C1C1E]/6 pt-4' : ''}>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                            <p className="font-sans text-sm font-semibold text-[#1C1C1E]">
                              {sub.title}
                            </p>
                            <p className="font-sans text-xs text-[#6B6B6B]">{sub.period}</p>
                          </div>
                          <ul className="space-y-2">
                            {sub.bullets.map((b) => (
                              <li key={b} className="font-sans text-sm text-[#6B6B6B] flex gap-3 items-start">
                                <span className="text-[#1C1C1E]/25 leading-5 flex-shrink-0 mt-0.5">›</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Secondary — condensed */}
        <FadeIn>
          <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-6">
            Earlier Roles
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {secondaryExperience.map((job) => (
              <div
                key={job.company}
                className="border border-[#1C1C1E]/10 rounded-2xl p-5 hover:border-[#1C1C1E]/20 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-2">
                  <div>
                    <p className="font-sans text-sm font-semibold text-[#1C1C1E]">{job.company}</p>
                    <p className="font-sans text-xs text-[#A07640] mt-0.5">{job.role}</p>
                  </div>
                  <p className="font-sans text-xs text-[#6B6B6B] sm:text-right flex-shrink-0">{job.period}</p>
                </div>
                <p className="font-sans text-xs text-[#6B6B6B] leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
