import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook } from 'react-icons/fi'

const entries = [
  {
    degree: 'BSc (Hons) Computing',
    institution: 'Islington College, Kathmandu',
    sub: 'Affiliated with London Metropolitan University',
    color: '#5b9bf8',
  },
  {
    degree: '+2 Science',
    institution: 'Trinity International College',
    sub: 'Higher Secondary Education',
    color: '#7ab8ff',
  },
  {
    degree: 'Secondary Education (NEB)',
    institution: 'Little Angels School',
    sub: 'National Examination Board',
    color: '#a5c8ff',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} style={{ padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}
          className="gradient-text"
        >
          Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '3rem' }}
        >
          Academic background
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 640 }}>
          {entries.map((entry, i) => (
            <motion.div
              key={entry.institution}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01, boxShadow: `0 0 40px ${entry.color}14` }}
              className="glass"
              style={{ borderRadius: 20, padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${entry.color}14`,
                border: `1px solid ${entry.color}28`,
              }}>
                <FiBook size={20} color={entry.color} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>{entry.degree}</h3>
                <p style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.15rem', color: entry.color }}>{entry.institution}</p>
                <p style={{ color: 'rgba(165,200,255,0.4)', fontSize: '0.8rem' }}>{entry.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
