import appleLogo from './apple-logo.jpg'
import olaLogo from './ola-logo.png'
import purdueLog from './purdue-logo.png'
import bitsLogo from './bits-logo.webp'
import jswLogo from './jsw-logo.png'

const logos = {
  apple: {
    bg: '#000000',
    render: () => (
      <img src={appleLogo} alt="Apple" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
    ),
  },

  ola: {
    bg: '#FFFFFF',
    render: () => (
      <img src={olaLogo} alt="OLA Electric" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} />
    ),
  },

  purdue: {
    bg: '#000000',
    render: () => (
      <img src={purdueLog} alt="Purdue" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} />
    ),
  },

  bits: {
    bg: '#FFFFFF',
    render: () => (
      <img src={bitsLogo} alt="BITS Pilani" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} />
    ),
  },

  nextleap: {
    bg: '#6D28D9',
    render: () => (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },

  hourglass: {
    bg: '#78350F',
    render: () => (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 2h14M5 22h14M6 2v4l4 4-4 4v4M18 2v4l-4 4 4 4v4" />
      </svg>
    ),
  },

  jsw: {
    bg: '#FFFFFF',
    render: () => (
      <img src={jswLogo} alt="JSW Steel" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} />
    ),
  },

  hwc: {
    bg: '#065F46',
    render: () => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <span style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: '6px', fontWeight: 700, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.85)',
        }}>HWC</span>
      </div>
    ),
  },
}

const sizes = {
  sm: { outer: '36px', radius: '10px' },
  md: { outer: '44px', radius: '12px' },
  lg: { outer: '52px', radius: '14px' },
}

export default function CompanyLogo({ name, size = 'md' }) {
  const logo = logos[name]
  if (!logo) return null
  const { outer, radius } = sizes[size]

  return (
    <div
      style={{
        width: outer, height: outer, borderRadius: radius,
        backgroundColor: logo.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        overflow: 'hidden',
      }}
      aria-label={name}
    >
      {logo.render()}
    </div>
  )
}
