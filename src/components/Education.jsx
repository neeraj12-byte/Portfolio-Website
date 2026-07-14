import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import CompanyLogo from '../assets/logos/CompanyLogo'

const education = [
  {
    school: 'Purdue University',
    degree: 'Master of Engineering Management',
    period: 'Aug 2025 – May 2027',
    gpa: 'GPA: 3.86',
    location: 'West Lafayette, IN',
    note: 'Top 10 Engineering School in the US',
    logo: 'purdue',
    coursework: ['Technical Program Management', 'Project Management', 'Supply Chain Engineering', 'Systems Thinking', 'Change Management', 'Applied Ergonomics', 'Student Consulting'],
  },
  {
    school: 'BITS Pilani',
    degree: 'B.E. Electronics & Instrumentation',
    period: 'Aug 2018 – May 2022',
    gpa: '',
    location: 'Pilani, India',
    note: "India's MIT equivalent, entrance tougher than IIT in many disciplines",
    logo: 'bits',
    coursework: ['Digital Signal Processing', 'Control Systems', 'Microprocessors', 'VLSI Design', 'Probability & Statistics'],
    activity: 'Dance Club Coordinator, negotiated INR 75K budget and drove 75% increase in event participation.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Education" title="Where I learned to think." />
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <FadeIn key={edu.school} delay={i * 0.1}>
              <div className="bg-[#F8F4E8] rounded-2xl p-8 h-full border border-[#1C1C1E]/8 hover:border-[#1C1C1E]/18 hover:shadow-sm transition-all duration-200">

                {/* Logo + note row */}
                <div className="flex items-start justify-between mb-5">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#A07640] max-w-[70%] leading-relaxed">
                    {edu.note}
                  </p>
                  <CompanyLogo name={edu.logo} size="md" />
                </div>

                <h3 className="font-serif text-3xl font-semibold text-[#1C1C1E] mb-1">
                  {edu.school}
                </h3>
                <p className="font-sans text-sm font-medium text-[#1C1C1E]/70 mb-1">
                  {edu.degree}
                </p>
                <p className="font-sans text-xs text-[#6B6B6B] mb-5">
                  {edu.period} · {edu.location}
                  {edu.gpa && <span className="ml-3 font-semibold text-[#1C1C1E]">{edu.gpa}</span>}
                </p>

                <div className="border-t border-[#1C1C1E]/8 pt-4">
                  <p className="font-sans text-xs uppercase tracking-widest text-[#6B6B6B] mb-3">
                    Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="font-sans text-[11px] px-3 py-1 rounded-full border border-[#1C1C1E]/12 text-[#6B6B6B] bg-white"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {edu.activity && (
                  <div className="border-t border-[#1C1C1E]/8 pt-4 mt-4">
                    <p className="font-sans text-xs uppercase tracking-widest text-[#6B6B6B] mb-2">
                      Beyond Class
                    </p>
                    <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed">
                      {edu.activity}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
