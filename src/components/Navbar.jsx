import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(2,13,34,0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(28px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(28px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{ maxWidth: 1152, margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            style={{
              width: 40, height: 40, borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, #2e6cf5, #5b9bf8)',
              color: '#fff', fontWeight: 700, fontSize: '0.875rem',
              border: 'none', cursor: 'pointer',
            }}
          >
            SO
          </motion.button>

          {/* Desktop links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0 }} className="hidden-mobile">
            {links.map(link => (
              <li key={link}>
                <motion.button
                  onClick={() => scrollTo(link)}
                  whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.06)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem', fontWeight: 500,
                    color: 'rgba(165,200,255,0.65)',
                    background: 'transparent',
                    border: 'none', borderRadius: 10, cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(165,200,255,0.65)'}
                >
                  {link}
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{ display: 'none', flexDirection: 'column', gap: 6, padding: 8, background: 'transparent', border: 'none', cursor: 'pointer', borderRadius: 10 }}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: 20, height: 2, background: '#fff', borderRadius: 999 }} />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(0,0,0,0.45)' }}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              style={{
                position: 'fixed', top: 0, bottom: 0, right: 0, zIndex: 50,
                width: 280,
                background: 'rgba(3,17,46,0.96)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
                borderLeft: '1px solid rgba(255,255,255,0.09)',
                paddingTop: '6rem',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: 8,
              }}
            >
              {links.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => scrollTo(link)}
                  style={{
                    textAlign: 'left', padding: '0.875rem 1rem',
                    fontSize: '1rem', fontWeight: 500,
                    color: 'rgba(165,200,255,0.7)',
                    background: 'transparent', border: 'none',
                    borderRadius: 12, cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(165,200,255,0.7)'; e.currentTarget.style.background = 'transparent' }}
                >
                  {link}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
