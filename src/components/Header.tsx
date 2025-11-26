'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react' // Lucide icons

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobile ? 'space-between' : 'flex-start',
        padding: isMobile ? '1rem' : '2rem 6rem 0.1rem 6rem',
        backgroundColor: '#f6f4f4',
        color: '#111',
        fontFamily: 'var(--font-jost), sans-serif',
        position: 'relative',
      }}
    >
      {/* Hamburger Icon */}
      {isMobile && (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ fontSize: '1.8rem', cursor: 'pointer' }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      )}

      {/* Navigation */}
      {(menuOpen || !isMobile) && (
        <nav
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '1.5rem' : '2.5rem',
            fontSize: isMobile ? '1.2rem' : '1.2rem',
            position: isMobile ? 'absolute' : 'static',
            top: isMobile ? '4rem' : undefined,
            left: isMobile ? '1rem' : undefined,
            backgroundColor: isMobile ? '#f6f4f4' : 'transparent',
            padding: isMobile ? '1rem 2rem' : undefined,
            borderRadius: isMobile ? '8px' : undefined,
            boxShadow: isMobile ? '0 4px 6px rgba(0,0,0,0.1)' : undefined,
            zIndex: 50,
          }}
        >
          <a href="#hero" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" style={navLinkStyle} onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#experts" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Our Experts</a>
          <a href="#login" style={{ ...navLinkStyle, fontWeight: 'bold' }} onClick={() => setMenuOpen(false)}>Log In</a>
          <a href="#contact" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Contact Us</a>
        </nav>
      )}
    </header>
  )
}

// Reusable style for nav links
const navLinkStyle: React.CSSProperties = {
  color: '#111',
  textDecoration: 'none',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'color 0.2s',
  fontFamily: 'var(--font-jost), sans-serif',
}
