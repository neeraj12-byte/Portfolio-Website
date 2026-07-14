import { motion } from 'framer-motion'
import profilePhoto from '../../Photos/Professional_photo_web.jpg'
import appleLogo from '../assets/logos/apple-logo.jpg'
import olaLogo from '../assets/logos/ola-logo.png'
import purdueLog from '../assets/logos/purdue-logo.png'
import bitsLogo from '../assets/logos/bits-logo.webp'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-64px)] flex flex-col justify-center bg-[#F8F4E8] pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 py-16 md:py-20">

          {/* Left — Text */}
          <div className="flex-1 text-center md:text-left">
            {/* Availability pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-5"
            >
              <div className="inline-flex items-center gap-2 bg-[#059669]/10 border border-[#059669]/20 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                <span className="font-sans text-xs font-medium text-[#059669]">
                  Seeking Fall 2026 Internships
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#059669]/10 border border-[#059669]/20 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                <span className="font-sans text-xs font-medium text-[#059669]">
                  Seeking Full-time Job Opportunities
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold text-[#1C1C1E] leading-[1.05] mb-3"
            >
              Neeraj<br />Karumanchi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="font-sans text-[17px] text-[#6B6B6B] mb-6"
            >
              EPM Intern · Apple · Cupertino, CA
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-sans text-base md:text-lg text-[#6B6B6B] leading-relaxed max-w-lg mx-auto md:mx-0 mb-10"
            >
              I run programs that ship. From India's fastest-growing EV startup to{' '}
              <span className="text-[#1C1C1E] font-medium">Apple's Pricing Platform</span>
              , turning complex, multi-team work into{' '}
              <span className="text-[#1C1C1E] font-medium">outcomes that actually land</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 bg-[#1C1C1E] text-white font-sans text-sm font-medium px-6 py-3 rounded-full hover:bg-[#333] transition-colors"
              >
                See my work →
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border border-[#1C1C1E]/20 text-[#1C1C1E] font-sans text-sm font-medium px-6 py-3 rounded-full hover:border-[#1C1C1E]/50 transition-colors"
              >
                My journey
              </a>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 pt-6 md:pt-0"
          >
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-[#1C1C1E]/5">
              <img
                src={profilePhoto}
                alt="Neeraj Karumanchi"
                className="w-full h-full object-cover object-top"
                style={{ transform: 'scale(1.85)', transformOrigin: 'center 71%' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="border-t border-[#1C1C1E]/10 pt-8 pb-12"
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-5 flex-wrap">
              <span className="font-sans text-[15px] font-semibold uppercase tracking-[0.18em] text-[#6B6B6B]/80">
                Worked at
              </span>
              <LogoChip name="Apple" logo={appleLogo} />
              <LogoChip name="OLA Electric" logo={olaLogo} />
            </div>
            <div className="hidden sm:block w-px h-6 bg-[#1C1C1E]/12" />
            <div className="flex items-center gap-5 flex-wrap">
              <span className="font-sans text-[15px] font-semibold uppercase tracking-[0.18em] text-[#6B6B6B]/80">
                Studied at
              </span>
              <LogoChip name="Purdue University" logo={purdueLog} logoBg="#000000" />
              <LogoChip name="BITS Pilani" logo={bitsLogo} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function LogoChip({ name, logo, square = true, logoBg = '#ffffff' }) {
  return (
    <div className="flex items-center gap-2 cursor-default group">
      {logo && (
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          style={{ backgroundColor: logoBg }}
          className={`h-[23px] md:h-[27px] rounded-[5px] object-contain flex-shrink-0 ring-1 ring-[#1C1C1E]/10 ${square ? 'w-[23px] md:w-[27px]' : 'w-auto'}`}
        />
      )}
      <span className="font-serif text-[23px] md:text-[27px] font-semibold text-[#1C1C1E]/70 tracking-tight group-hover:text-[#1C1C1E] transition-colors duration-200">
        {name}
      </span>
    </div>
  )
}
