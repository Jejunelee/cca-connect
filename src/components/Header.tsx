export default function Header() {
    return (
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start', // left-aligned
          paddingTop: '2rem',
          paddingRight: '6rem',
          paddingBottom: '0.1rem',
          paddingLeft: '6rem',
          backgroundColor: '#f6f4f4', // light background
          color: '#111', // dark text for visibility
        }}
      >
        {/* Navigation Buttons */}
        <nav style={{ display: 'flex', gap: '2.5rem', fontSize: '1.2rem' }}>
          <a href="#hero" style={navLinkStyle}>Home</a>
          <a href="#about" style={navLinkStyle}>About Us</a>
          <a href="#experts" style={navLinkStyle}>Our Experts</a>
          <a href="#login" style={{ ...navLinkStyle, fontWeight: 'bold' }}>Log In</a>
          <a href="#contact" style={navLinkStyle}>Contact Us</a>
        </nav>
      </header>
    )
  }
  
  // Reusable style for nav links
  const navLinkStyle: React.CSSProperties = {
    color: '#111', // dark text
    textDecoration: 'none',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'color 0.2s',
  }
  