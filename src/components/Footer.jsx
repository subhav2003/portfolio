export default function Footer() {
  return (
    <footer style={{ padding: '2rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8, fontSize: '0.85rem', color: 'rgba(165,200,255,0.35)' }}>
        <span style={{ fontWeight: 600, color: 'rgba(165,200,255,0.55)' }}>Subhav Osti</span>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  )
}
