import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const bio = [
  "I'm a full-stack developer with a frontend-leaning bias and a genuine interest in building systems from the ground up. Currently at Aurora Forge LLC, I'm part of the core team building an enterprise-grade ERP platform, working across a React/Vite/TypeScript frontend and a modular Java/Spring Boot backend.",
  "My background spans artisan marketplaces, library management systems, expense trackers, and blog platforms — I enjoy problems that require both solid backend thinking and polished user experience. I studied Computing at Islington College Kathmandu, affiliated with London Metropolitan University.",
  "Outside of work, I tinker with Linux, explore network security, and play guitar. I like understanding how systems work — at every layer.",
]

const info = [
  { label: 'Role',     value: 'Full-Stack Developer' },
  { label: 'Company',  value: 'Aurora Forge LLC' },
  { label: 'Location', value: 'Kathmandu, Nepal' },
  { label: 'Status',   value: '🟢 Open to opportunities' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 36 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="about" ref={ref} style={{ padding: '7rem 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        <motion.p {...fadeUp(0)} style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }} className="gradient-text">
          About Me
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="about-grid">
          {/* Text */}
          <div>
            <motion.h2 {...fadeUp(0.1)} style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: '1.5rem' }}>
              Builder at heart,{' '}
              <span className="gradient-text">curious by nature.</span>
            </motion.h2>
            {bio.map((p, i) => (
              <motion.p key={i} {...fadeUp(0.2 + i * 0.12)} style={{ color: 'rgba(165,200,255,0.55)', lineHeight: 1.75, marginBottom: '1rem', fontSize: '1rem' }}>
                {p}
              </motion.p>
            ))}
          </div>

          {/* Card */}
          <motion.div {...fadeUp(0.25)} style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 0 60px rgba(46,108,245,0.15)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="glass"
              style={{ borderRadius: 24, padding: '2rem', width: '100%', maxWidth: 360 }}
            >
              <div style={{
                width: 80, height: 80, borderRadius: 18, margin: '0 auto 1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg, #2e6cf5, #5b9bf8)',
                fontSize: '1.75rem', fontWeight: 900, color: '#fff',
              }}>
                SO
              </div>
              {info.map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }} className="info-row">
                  <span style={{ fontSize: '0.8rem', color: 'rgba(165,200,255,0.4)', flexShrink: 0 }}>{label}</span>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(224,234,255,0.85)', textAlign: 'right' }}>{value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .info-row:last-child { border-bottom: none !important; }
      `}</style>
    </section>
  )
}
