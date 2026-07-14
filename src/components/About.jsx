import { Plane, Trophy, Waves, Spade, Music, Dumbbell } from 'lucide-react'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'

const hobbies = [
  {
    Icon: Plane,
    label: '11 US States',
    sub: 'in under a year, and counting',
  },
  {
    Icon: Trophy,
    label: 'Basketball',
    sub: 'school team · now just for fun',
  },
  {
    Icon: Waves,
    label: 'Scuba Diving',
    sub: 'done it, loved it',
  },
  {
    Icon: Spade,
    label: 'Poker',
    sub: "it's just applied probability",
  },
  {
    Icon: Music,
    label: 'Dancing',
    sub: 'club coordinator at BITS Pilani',
  },
  {
    Icon: Dumbbell,
    label: 'All Sports',
    sub: 'pickleball, table tennis, you name it',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F8F4E8] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — narrative */}
          <div>
            <SectionHeading label="About" title="The story so far." />
            <FadeIn delay={0.1}>
              <div className="font-sans text-[#6B6B6B] text-base leading-loose space-y-5">
                <p>
                  I graduated from{' '}
                  <span className="text-[#1C1C1E] font-medium">BITS Pilani</span>{' '}
                  in 2022 with a hardware degree and a software mindset, and a growing itch to work on the thing between the two: the program.
                </p>
                <p>
                  Three years at{' '}
                  <span className="text-[#1C1C1E] font-medium">OLA Electric</span>{' '}
                  answered that fast. Three roles, three years, one company building the future of electric mobility in real time. I shipped MOVE OS to a million customers, delivered 22,000 chargers, and built an ABS system that saved $2.8M. It was intense, real, and addictive.
                </p>
                <p>
                  Then came{' '}
                  <span className="text-[#1C1C1E] font-medium">Purdue</span>{' '}
                  , a chance to build the strategic layer. How to think about systems, not just execute inside them. And now I'm here at{' '}
                  <span className="text-[#1C1C1E] font-medium">Apple in Cupertino</span>
                  , running Pricing Platform programs and shipping AI agents that actually work.
                </p>
                <p>
                  Outside work, I run the same playbook I use at a poker table: read the table, manage risk, and make decisions with incomplete information. I play basketball (school team back in the day), travel every chance I get, 11 states in under a year, and yes, I've gone scuba diving. Quietest place I've ever been.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right — hobby tiles */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4 mt-2 md:mt-10">
              {hobbies.map(({ Icon, label, sub }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 border border-[#1C1C1E]/10 hover:border-[#A07640]/25 hover:shadow-sm transition-all duration-200"
                >
                  <div className="mb-3 w-8 h-8 flex items-center justify-center">
                    <Icon size={22} className="text-[#A07640]" strokeWidth={1.5} />
                  </div>
                  <p className="font-sans font-semibold text-sm text-[#1C1C1E]">{label}</p>
                  <p className="font-sans text-xs text-[#6B6B6B] mt-0.5 leading-snug">{sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
