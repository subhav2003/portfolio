import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    const onOver = (e) => { if (e.target.closest('a, button, [data-hover]')) setIsHovering(true) }
    const onOut = (e) => { if (e.target.closest('a, button, [data-hover]')) setIsHovering(false) }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <motion.div
        className="custom-cursor fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: isHovering ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 800, damping: 40, mass: 0.3 }}
        style={{ width: 8, height: 8, background: '#5b9bf8' }}
      />
      <motion.div
        className="custom-cursor-ring fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: isHovering ? 1.6 : 1, opacity: isHovering ? 0.5 : 0.3 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
        style={{
          width: 40, height: 40,
          border: '1px solid rgba(91,155,248,0.7)',
          background: isHovering ? 'rgba(46,108,245,0.1)' : 'transparent',
        }}
      />
    </>
  )
}
