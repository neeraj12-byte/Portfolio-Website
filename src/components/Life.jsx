import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import { lifePhotos } from '../data/life'

const tagColors = {
  Work:      'bg-[#1C1C1E] text-white',
  Travel:    'bg-[#A07640] text-white',
  Adventure: 'bg-[#059669] text-white',
  Personal:  'bg-[#7C3AED] text-white',
}

export default function Life() {
  const row1 = lifePhotos.slice(0, 3)
  const row2 = lifePhotos.slice(3, 5)
  const row3 = lifePhotos.slice(5, 8)

  return (
    <section id="life" className="py-24 bg-[#F8F4E8] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Life" title="Beyond the brief." />
        <FadeIn delay={0.05}>
          <p className="font-sans text-base text-[#6B6B6B] mb-12 max-w-xl">
            11 US states in under a year. Always learning, always moving, on a court, in the water, or at a new city.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {/* Row 1 — 2-col mobile, 3-col sm+ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {row1.map((photo, i) => (
              <FadeIn key={photo.caption} delay={i * 0.06}>
                <PhotoCard photo={photo} aspectClass="aspect-square sm:aspect-[4/3]" />
              </FadeIn>
            ))}
          </div>

          {/* Row 2 — 2-col both mobile and desktop (wider feel) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {row2.map((photo, i) => (
              <FadeIn key={photo.caption} delay={i * 0.06}>
                <PhotoCard photo={photo} aspectClass="aspect-square sm:aspect-[16/9]" />
              </FadeIn>
            ))}
          </div>

          {/* Row 3 — 2-col mobile, 3-col sm+ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {row3.map((photo, i) => (
              <FadeIn key={photo.caption} delay={i * 0.06}>
                <PhotoCard photo={photo} aspectClass="aspect-square sm:aspect-[4/3]" />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhotoCard({ photo, aspectClass }) {
  const tagColor = tagColors[photo.tag] || 'bg-white/20 text-white'
  return (
    <div className={`group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-default w-full ${aspectClass}`}>
      <img
        src={photo.src}
        alt={photo.caption}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Permanent gradient at bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

      {/* Hover caption */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className={`font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5 inline-block ${tagColor}`}>
          {photo.tag}
        </span>
        <p className="font-sans text-xs sm:text-sm text-white font-medium leading-snug hidden sm:block">
          {photo.caption}
        </p>
      </div>

      {/* Always-visible caption on mobile */}
      <div className="sm:hidden absolute bottom-0 left-0 right-0 p-2">
        <p className="font-sans text-[10px] text-white/80 leading-tight line-clamp-2">
          {photo.caption}
        </p>
      </div>
    </div>
  )
}
