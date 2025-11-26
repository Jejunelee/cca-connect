export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ ...footerStyles, fontFamily: 'var(--font-jost), sans-serif' }}>
      <div style={containerStyles}>
        {/* Main Footer Content */}
        <div style={contentStyles}>
          {/* Brand Section */}
          <div style={brandSectionStyles}>
            <h3 style={brandTitleStyles}>CCA Connect</h3>
            <p style={brandDescriptionStyles}>
              A platform that connects you to the best Food, Beverage, and Hospitality experts in the Philippines
            </p>
            <div style={socialLinksStyles}>
              <a href="https://www.facebook.com/ccamanila/" style={socialLinkStyles} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ccaconnectph/" style={socialLinkStyles} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.33 3.608 1.305.975.975 1.243 2.242 1.305 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.242 1.243-3.608 1.305-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.243-2.242-1.305-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.062-1.366.33-2.633 1.305-3.608C4.513 2.493 5.78 2.225 7.146 2.163 8.411 2.105 8.791 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07 5.748.129 4.462.417 3.392 1.487 2.322 2.557 2.034 3.843 1.975 5.147.917 6.426.905 6.829.905 12s.012 5.574.07 6.853c.058 1.304.346 2.59 1.416 3.66 1.07 1.07 2.356 1.358 3.66 1.416 1.279.058 1.682.07 6.853.07s5.574-.012 6.853-.07c1.304-.058 2.59-.346 3.66-1.416 1.07-1.07 1.358-2.356 1.416-3.66.058-1.279.07-1.682.07-6.853s-.012-5.574-.07-6.853c-.058-1.304-.346-2.59-1.416-3.66C20.495.417 19.209.129 17.905.07 16.626.012 16.223 0 12 0z"/>
                  <circle cx="12" cy="12" r="3.6"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/ccamanila/?viewAsMember=true" style={socialLinkStyles} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={linksSectionStyles}>
            <h4 style={sectionTitleStyles}>Quick Links</h4>
            <ul style={linksListStyles}>
              <li><a href="/#" style={linkStyles}>About Us</a></li>
              <li><a href="/#" style={linkStyles}>Services</a></li>
              <li><a href="/#" style={linkStyles}>Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div style={linksSectionStyles}>
            <h4 style={sectionTitleStyles}>Support</h4>
            <ul style={linksListStyles}>
              <li><a href="/#" style={linkStyles}>Help Center</a></li>
              <li><a href="/#" style={linkStyles}>Privacy Policy</a></li>
              <li><a href="/#" style={linkStyles}>Terms of Service</a></li>
              <li><a href="/#" style={linkStyles}>FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={contactSectionStyles}>
            <h4 style={sectionTitleStyles}>Contact Us</h4>
            <div style={contactInfoStyles}>
              <p style={contactTextStyles}>📧 piagtrinidad@cca-manila.edu.ph</p>
              <p style={contactTextStyles}>📞 +639178968528</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={bottomBarStyles}>
          <p style={copyrightStyles}>
            &copy; {currentYear} CCA Connect. All rights reserved.
          </p>
          <div style={legalLinksStyles}>
            <a href="/#" style={legalLinkStyles}>Privacy Policy</a>
            <span style={separatorStyles}>•</span>
            <a href="/#" style={legalLinkStyles}>Terms of Service</a>
            <span style={separatorStyles}>•</span>
            <a href="/#" style={legalLinkStyles}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Styles ---

const footerStyles: React.CSSProperties = {
  backgroundColor: '#111',
  color: '#fff',
  padding: '3rem 0 0',
  marginTop: 'auto',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
};

const contentStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  marginBottom: '2rem',
};

const brandSectionStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const brandTitleStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: 0,
  color: '#fff',
};

const brandDescriptionStyles: React.CSSProperties = {
  color: '#ccc',
  lineHeight: 1.6,
  margin: 0,
};

const socialLinksStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  marginTop: '0.5rem',
};

const socialLinkStyles: React.CSSProperties = {
  color: '#ccc',
  transition: 'color 0.3s ease',
  padding: '0.5rem',
  borderRadius: '4px',
  textDecoration: 'none',
};

const linksSectionStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const sectionTitleStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 600,
  margin: '0 0 0.5rem',
  color: '#fff',
};

const linksListStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const linkStyles: React.CSSProperties = {
  color: '#ccc',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const contactSectionStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const contactInfoStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const contactTextStyles: React.CSSProperties = {
  color: '#ccc',
  margin: 0,
  fontSize: '0.9rem',
};

const bottomBarStyles: React.CSSProperties = {
  borderTop: '1px solid #333',
  paddingTop: '1.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
};

const copyrightStyles: React.CSSProperties = {
  color: '#999',
  margin: 0,
  fontSize: '0.9rem',
};

const legalLinksStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const legalLinkStyles: React.CSSProperties = {
  color: '#999',
  textDecoration: 'none',
  fontSize: '0.9rem',
  transition: 'color 0.3s ease',
};

const separatorStyles: React.CSSProperties = {
  color: '#666',
  fontSize: '0.8rem',
};
