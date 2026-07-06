import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Life', href: '#life' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#F8F4E8]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-serif text-2xl font-semibold text-[#1C1C1E] tracking-tight hover:text-[#A07640] transition-colors duration-200"
        >
          NK
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm text-[#6B6B6B] hover:text-[#1C1C1E] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#A07640] hover:text-[#9a4c2e] transition-colors"
        >
          Say hello →
        </a>

        {/* Mobile hamburger — 44×44px tap target */}
        <button
          className="md:hidden flex flex-col justify-center gap-[6px] w-11 h-11 -mr-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#1C1C1E] transition-all duration-200 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1C1C1E] transition-all duration-200 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1C1C1E] transition-all duration-200 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-[#1C1C1E]/8 bg-[#F8F4E8]/95 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-base text-[#1C1C1E] py-3 border-b border-[#1C1C1E]/6 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sans text-base font-medium text-[#A07640] pt-3"
            onClick={() => setMenuOpen(false)}
          >
            Say hello →
          </a>
        </div>
      )}
    </nav>
  )
}
