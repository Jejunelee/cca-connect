"use client";

import { useEffect, useState } from "react";

interface HeroLeftProps {
  scrollToReach: () => void;
}

export default function HeroLeft({ scrollToReach }: HeroLeftProps) {
  const [logoVisible, setLogoVisible] = useState(false);
  const [firstLineVisible, setFirstLineVisible] = useState(false);
  const [secondLineVisible, setSecondLineVisible] = useState(false);

  useEffect(() => {
    // Logo appears first
    setLogoVisible(true);
    
    // First line appears after a short delay
    const firstLineTimer = setTimeout(() => {
      setFirstLineVisible(true);
    }, 400); // 0.4 second delay
    
    // Second line appears after another delay
    const secondLineTimer = setTimeout(() => {
      setSecondLineVisible(true);
    }, 1000); // 1 second total delay

    return () => {
      clearTimeout(firstLineTimer);
      clearTimeout(secondLineTimer);
    };
  }, []);

  return (
    <div className="hero-left" style={{ maxWidth: "700px" }}>
      <img
        src="/logo.png"
        alt="CCA Connect Logo"
        className="hero-logo"
        style={{
          width: "240px",
          marginBottom: "1rem",
          marginLeft: "-0.3rem",
          opacity: logoVisible ? 1 : 0,
          transform: logoVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}
      />

      <h1 className="hero-heading">
        <div 
          className={`fade-line ${firstLineVisible ? 'fade-in' : ''}`}
          style={{
            opacity: firstLineVisible ? 1 : 0,
            transform: firstLineVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          Get access to the Philippines <b>top</b>
        </div>
        <div 
          className={`fade-line ${secondLineVisible ? 'fade-in' : ''}`}
          style={{
            opacity: secondLineVisible ? 1 : 0,
            transform: secondLineVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            marginTop: '0.5rem'
          }}
        >
          Food Beverage and Hospitality <b>experts</b>
        </div>
      </h1>

      <button
        className="cta-button"
        onClick={scrollToReach}
        style={{
          padding: "0.6rem 2.6rem",
          backgroundColor: "#a9cee7",
          border: "none",
          borderRadius: "999px",
          fontSize: "1.7rem",
          cursor: "pointer",
          color: "#000",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
          opacity: secondLineVisible ? 1 : 0,
          transform: secondLineVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s, background-color 0.5s ease, box-shadow 0.35s ease'
        }}
      >
        Learn More
      </button>

      <style jsx>{`
        .hero-heading {
          font-size: 2.4rem;
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 1.3rem;
          color: #000;
          min-height: 120px; /* Prevent layout shift */
        }

        .fade-line {
          display: block;
        }

        .cta-button {
          transition: background-color 0.5s ease,
                      transform 0.35s ease,
                      box-shadow 0.35s ease;
          font-family: var(--font-jost), sans-serif;
        }

        .cta-button:hover {
          background-color: #6fb3dd;
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.25);
        }

        .cta-button:active {
          transform: scale(0.98);
        }

        @media screen and (max-width: 768px) {
          .hero-left {
            text-align: center;
            margin-bottom: 2rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-logo {
            margin-left: 0;
            width: 180px;
          }

          .hero-heading {
            font-size: 1.5rem;
            min-height: 90px; /* Adjusted for mobile */
          }

          .cta-button {
            font-size: 1.4rem;
            padding: 0.5rem 2rem;
          }
        }
      `}</style>
    </div>
  );
}