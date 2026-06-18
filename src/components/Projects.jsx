import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    name: 'CraftConnect',
    tag: 'Final Year Project',
    tagColor: '#5b9bf8',
    description: 'A platform connecting local artisans and craftspeople with customers. Handles artisan listings, product showcasing, and buyer interactions — built with a Vue.js frontend and a Laravel REST API backend.',
    stack: ['Vue.js', 'Laravel', 'MySQL'],
    github: 'https://github.com/subhav2003/CraftConnect-Final-Year-Project',
  },
  {
    name: 'ExpenseEase',
    tag: 'Coursework',
    tagColor: '#7ab8ff',
    description: 'A cross-platform expense tracking app built as part of a .NET coursework module. Allows users to log, categorize, and review personal expenses across devices.',
    stack: ['.NET MAUI'],
    github: 'https://github.com/subhav2003/ExpenseEase-dotnet-MAUI',
  },
  {
    name: 'Pustakalaya',
    tag: 'Side Project',
    tagColor: '#a5c8ff',
    description: 'A web application for managing a digital library — browse, search, and manage books. Built with a Vue.js frontend backed by a .NET Web API with Entity Framework Core.',
    stack: ['Vue.js', '.NET', 'EF Core'],
    github: 'https://github.com/subhav2003/vuedotnetwebapp',
  },
]

function ProjectCard({ project, index, inView }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
    setTilt({ x: dy * -7, y: dx * 7 })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'transform 0.5s ease' : 'transform 0.1s ease',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div className="glass" style={{ borderRadius: 24, padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', height: '100%', transition: 'border-color 0.3s' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{project.name}</h3>
            <span style={{
              fontSize: '0.7rem', fontWeight: 600,
              padding: '0.25rem 0.6rem', borderRadius: 8,
              color: project.tagColor,
              background: `${project.tagColor}18`,
              border: `1px solid ${project.tagColor}35`,
            }}>
              {project.tag}
            </span>
          </div>
          <motion.a
            href={project.github} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.12, color: '#5b9bf8' }}
            whileTap={{ scale: 0.94 }}
            style={{ color: 'rgba(165,200,255,0.4)', flexShrink: 0, marginTop: 2 }}
          >
            <FiGithub size={20} />
          </motion.a>
        </div>

        {/* Description */}
        <p style={{ color: 'rgba(165,200,255,0.5)', fontSize: '0.875rem', lineHeight: 1.75, flex: 1 }}>{project.description}</p>

        {/* Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.stack.map(tech => (
            <span key={tech} style={{
              fontSize: '0.72rem', padding: '0.3rem 0.7rem', borderRadius: 8,
              color: 'rgba(224,234,255,0.65)',
              background: 'rgba(91,155,248,0.08)',
              border: '1px solid rgba(91,155,248,0.18)',
            }}>{tech}</span>
          ))}
        </div>

        <motion.a
          href={project.github} target="_blank" rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', fontWeight: 500, color: 'rgba(165,200,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(165,200,255,0.4)'}
        >
          <FiExternalLink size={13} /> View on GitHub
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} style={{ padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}
          className="gradient-text"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '3rem' }}
        >
          Things I&apos;ve built
        </motion.h2>

        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} inView={inView} />)}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .projects-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
      `}</style>
    </section>
  )
}
