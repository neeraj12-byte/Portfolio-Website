export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] border-t border-white/8 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="#hero"
          className="font-serif text-xl font-semibold text-white/50 hover:text-white/80 transition-colors duration-200"
        >
          NK
        </a>

        {/* Links — shown second on mobile for usability */}
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/neeraj-karumanchi/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors py-3 px-1"
          >
            LinkedIn
          </a>
          <a
            href="mailto:neeraj.karumanchi25@gmail.com"
            className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors py-3 px-1"
          >
            Email
          </a>
          <a
            href="https://github.com/neeraj12-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors py-3 px-1"
          >
            GitHub
          </a>
        </div>

        <p className="font-sans text-xs text-white/25">
          © 2026 Neeraj Karumanchi
        </p>
      </div>
    </footer>
  )
}
