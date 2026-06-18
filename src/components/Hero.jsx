import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Full-Stack Developer',
  'Frontend Enthusiast',
  'Security Curious',
  'Guitar Player',
]

function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [pause, setPause] = useState(false)
  const t = useRef(null)

  useEffect(() => {
    if (pause) {
      t.current = setTimeout(() => setPause(false), 1800)
      return () => clearTimeout(t.current)
    }
    const full = roles[roleIdx]
    if (!deleting && displayed.length < full.length) {
      t.current = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 65)
    } else if (!deleting && displayed.length === full.length) {
      t.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      t.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setPause(true)
      setRoleIdx(i => (i + 1) % roles.length)
    }
    return () => clearTimeout(t.current)
  }, [displayed, deleting, roleIdx, pause])

  return (
    <span style={{ color: '#a5c8ff', fontWeight: 600 }}>
      {displayed}<span style={{ opacity: 0.6, animation: 'pulse 1s infinite' }}>|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* iCloud-style large fluid background shapes */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Main large left shape */}
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-25%',
            width: '80vw',
            height: '80vw',
            maxWidth: 900,
            maxHeight: 900,
            background: 'radial-gradient(ellipse at 40% 40%, #1a52d4 0%, #0b2d8c 35%, transparent 70%)',
            filter: 'blur(70px)',
            opacity: 0.75,
            borderRadius: '50%',
          }}
        />
        {/* Right upper shape */}
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-20%',
            width: '70vw',
            height: '70vw',
            maxWidth: 800,
            maxHeight: 800,
            background: 'radial-gradient(ellipse at 60% 40%, #2258d8 0%, #0a1e6e 40%, transparent 72%)',
            filter: 'blur(80px)',
            opacity: 0.65,
            borderRadius: '50%',
          }}
        />
        {/* Bottom centre glow */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100vw',
            height: '50vw',
            maxHeight: 500,
            background: 'radial-gradient(ellipse at 50% 80%, #1040c8 0%, transparent 65%)',
            filter: 'blur(90px)',
            opacity: 0.5,
          }}
        />
        {/* Small top-right accent */}
        <motion.div
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '8%',
            right: '12%',
            width: 320,
            height: 320,
            background: 'radial-gradient(circle, #4a85f5 0%, transparent 70%)',
            filter: 'blur(55px)',
            opacity: 0.4,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'rgba(165,200,255,0.65)', fontSize: '1.125rem', fontWeight: 500, marginBottom: '1rem', letterSpacing: '0.02em' }}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <motion.h1
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="shimmer-text"
            style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}
          >
            Subhav Osti
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '1.25rem', minHeight: '2rem' }}
        >
          <Typewriter />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{ color: 'rgba(165,200,255,0.5)', fontSize: '1.05rem', maxWidth: '36rem', margin: '0 auto 2.5rem', lineHeight: 1.7 }}
        >
          I build systems that work behind the scenes and interfaces people actually enjoy using.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(46,108,245,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.875rem 2rem',
              borderRadius: '1rem',
              background: 'linear-gradient(135deg, #2e6cf5, #5b9bf8)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.02em',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.875rem 2rem',
              borderRadius: '1rem',
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.02em',
              border: '1px solid rgba(255,255,255,0.14)',
              cursor: 'pointer',
            }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.65rem', color: 'rgba(165,200,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1.5, height: 32, borderRadius: 999, background: 'linear-gradient(180deg, rgba(91,155,248,0.6), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
