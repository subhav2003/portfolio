import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiGlobe, FiGithub, FiMapPin } from 'react-icons/fi'

const contacts = [
  { icon: FiMail,   label: 'Email',    display: 'contact@subhavosti.com',  href: 'mailto:contact@subhavosti.com', color: '#5b9bf8' },
  { icon: FiGlobe,  label: 'Website',  display: 'subhavosti.com',          href: 'https://subhavosti.com',        color: '#7ab8ff' },
  { icon: FiGithub, label: 'GitHub',   display: 'github.com/subhav2003',   href: 'https://github.com/subhav2003', color: '#a5c8ff' },
  { icon: FiMapPin, label: 'Location', display: 'Kathmandu, Nepal',        href: null,                            color: '#82b4ff' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} style={{ padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}
          className="gradient-text"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}
        >
          Let&apos;s work together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'rgba(165,200,255,0.5)', fontSize: '1rem', marginBottom: '3rem', maxWidth: 480 }}
        >
          Open to full-time roles, freelance projects, and interesting collaborations.
        </motion.p>

        <div className="contact-grid">
          {contacts.map((c, i) => {
            const Icon = c.icon
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={c.href ? { scale: 1.04, boxShadow: `0 0 30px ${c.color}22` } : {}}
                className="glass"
                style={{
                  borderRadius: 20, padding: '1.25rem',
                  display: 'flex', flexDirection: 'column', gap: '0.75rem',
                  cursor: c.href ? 'pointer' : 'default',
                  transition: 'all 0.3s',
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${c.color}14`,
                  border: `1px solid ${c.color}30`,
                }}>
                  <Icon size={18} color={c.color} />
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(165,200,255,0.35)', marginBottom: 4 }}>{c.label}</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(224,234,255,0.85)', wordBreak: 'break-all' }}>{c.display}</p>
                </div>
              </motion.div>
            )
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                {card}
              </a>
            ) : <div key={c.label}>{card}</div>
          })}
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1fr 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
