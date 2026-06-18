import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const groups = [
  { label: 'Frontend',            color: '#5b9bf8', skills: ['React', 'TypeScript', 'Vite', 'Vue.js', 'HTML', 'CSS', 'Tailwind CSS'] },
  { label: 'Backend',             color: '#7ab8ff', skills: ['Java', 'Spring Boot', 'Laravel', '.NET', 'EF Core', 'REST APIs'] },
  { label: 'Databases',           color: '#a5c8ff', skills: ['PostgreSQL', 'MySQL'] },
  { label: 'DevOps & Infra',      color: '#4a85f5', skills: ['Docker', 'AWS CodeArtifact', 'Maven', 'Git', 'GitHub', 'Linux', 'Nginx'] },
  { label: 'Other',               color: '#82b4ff', skills: ['Python', 'scikit-learn'] },
  { label: 'Security (Hobbyist)', color: '#6fa0f7', skills: ['Kali Linux', 'Burp Suite', 'Nmap', 'Aircrack-ng', 'Hydra', 'Proxychains'] },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}
          className="gradient-text"
        >
          Skills &amp; Tech Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '3rem' }}
        >
          Tools I work with
        </motion.h2>

        <div className="skills-grid">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="glass"
              style={{ borderRadius: 20, padding: '1.5rem', transition: 'all 0.3s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: group.color, flexShrink: 0 }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(224,234,255,0.7)' }}>{group.label}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: gi * 0.08 + si * 0.04 + 0.15 }}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.75rem', fontWeight: 500,
                      borderRadius: 10,
                      color: 'rgba(224,234,255,0.8)',
                      background: `${group.color}16`,
                      border: `1px solid ${group.color}30`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .skills-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .skills-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
      `}</style>
    </section>
  )
}
