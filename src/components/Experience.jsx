import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const bullets = [
  'Building af-novadesk, an internal ERP system covering finance, expense tracking, asset management, and payroll modules',
  'Developing the React/Vite/TypeScript frontend with component-driven architecture and clean routing',
  'Working on a Java/Spring Boot modular monolith backend with Maven and AWS CodeArtifact for dependency management',
  'Managing Git workflows, PR reviews, and cross-module feature development',
  'Resolved complex infrastructure challenges including React SPA routing on Nginx/Docker and SSH multi-account Git on Windows',
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} style={{ padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}
          className="gradient-text"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '3rem' }}
        >
          Where I&apos;ve worked
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', paddingLeft: '3rem' }}
        >
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 12, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(180deg, #5b9bf8 0%, #2e6cf5 60%, transparent 100%)',
          }} />
          {/* Timeline dot */}
          <div style={{
            position: 'absolute', left: 6, top: '2rem',
            width: 14, height: 14, borderRadius: '50%',
            border: '2px solid #5b9bf8',
            background: '#020d22',
          }} />

          <motion.div
            whileHover={{ boxShadow: '0 0 60px rgba(46,108,245,0.1)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="glass"
            style={{ borderRadius: 24, padding: '2rem' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>Full-Stack Developer</h3>
                <p className="gradient-text" style={{ fontWeight: 600, fontSize: '1rem' }}>Aurora Forge LLC</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.8rem', color: 'rgba(165,200,255,0.45)', textAlign: 'right' }}>
                <span>Current</span>
                <span>Kathmandu, Nepal</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(165,200,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}
                >
                  <span style={{ marginTop: '0.55rem', width: 6, height: 6, borderRadius: '50%', background: '#5b9bf8', flexShrink: 0 }} />
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
