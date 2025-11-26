"use client";

import { useState } from "react";

export default function HeroRight() {
  const [currentSet, setCurrentSet] = useState(0);
  
  const expertSets = [
    // First set - exact same layout as original
    [
      { name: "Isabel Lozano", label: "Service and Space Design", image: "experts/expert1.jpg", height: "300px" },
      { name: "Prof X", label: "Training Development", image: "experts/expert4.webp", height: "250px" },
      { name: "Kerwin Fuentanilla", label: "Menu Development", image: "experts/expert2.jpg", height: "250px" },
      { name: "RL Garcia", label: "Human Resources", image: "experts/expert3.jpg", height: "300px" }
    ],
    // Second set - same layout structure
    [
      { name: "Miguel Lorino", label: "Menu Development", image: "experts/expert5.jpg", height: "300px" },
      { name: "Bea Trinidad", label: "PR & Marketing", image: "experts/expert6.jpg", height: "250px" },
      { name: "Ram Caronongan", label: "Menu Development", image: "experts/expert7.jpg", height: "250px" },
      { name: "Cedric Mendoza", label: "Beverage Consultancy", image: "experts/expert8.jpg", height: "300px" }
    ]
  ];

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % expertSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + expertSets.length) % expertSets.length);
  };

  return (
    <div className="hero-right-container">
      <div className="hero-right" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.2rem",
        width: "fit-content",
        position: "relative",
      }}>
        {/* Expert Cards Grid - maintaining exact original structure */}
        <ExpertCard 
          name={expertSets[currentSet][0].name} 
          label={expertSets[currentSet][0].label}
          image={expertSets[currentSet][0].image} 
          height={expertSets[currentSet][0].height} 
        />
        <ExpertCard 
          name={expertSets[currentSet][1].name} 
          label={expertSets[currentSet][1].label}
          image={expertSets[currentSet][1].image} 
          height={expertSets[currentSet][1].height} 
        />
        <ExpertCard 
          name={expertSets[currentSet][2].name} 
          label={expertSets[currentSet][2].label}
          image={expertSets[currentSet][2].image} 
          height={expertSets[currentSet][2].height} 
        />
        <div style={{ marginTop: "-50px" }}>
          <ExpertCard 
            name={expertSets[currentSet][3].name} 
            label={expertSets[currentSet][3].label}
            image={expertSets[currentSet][3].image} 
            height={expertSets[currentSet][3].height} 
          />
        </div>
        
        {/* Navigation Arrows - positioned absolutely outside the grid */}
        <button 
          className="nav-arrow nav-arrow-left"
          onClick={prevSet}
          aria-label="Previous experts"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        <button 
          className="nav-arrow nav-arrow-right"
          onClick={nextSet}
          aria-label="Next experts"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="dots-indicator">
        {expertSets.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSet ? 'active' : ''}`}
            onClick={() => setCurrentSet(index)}
            aria-label={`Show expert set ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .hero-right-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-right {
          /* Grid layout remains untouched */
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.95);
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          z-index: 10;
          color: #333;
          backdrop-filter: blur(4px);
        }

        .nav-arrow:hover {
          background: white;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow:active {
          transform: translateY(-50%) scale(0.95);
        }

        .nav-arrow-left {
          left: -60px;
        }

        .nav-arrow-right {
          right: -60px;
        }

        .dots-indicator {
          display: flex;
          gap: 10px;
          margin-top: 2rem;
          justify-content: center;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: #d1d1d1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #a9cee7;
          transform: scale(1.3);
        }

        .dot:hover {
          background: #6fb3dd;
          transform: scale(1.2);
        }

        /* Mobile Styles */
        @media screen and (max-width: 768px) {
          .hero-right {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            overflow-x: auto;
            width: 100%;
            padding-bottom: 1rem;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }

          .hero-right > div {
            flex: 0 0 auto;
            scroll-snap-align: start;
          }

          .nav-arrow {
            display: none;
          }

          .dots-indicator {
            margin-top: 1rem;
          }
        }

        /* Adjust arrow position for smaller desktop screens */
        @media screen and (max-width: 1200px) {
          .nav-arrow-left {
            left: -40px;
          }
          
          .nav-arrow-right {
            right: -40px;
          }
        }

        @media screen and (max-width: 1024px) {
          .nav-arrow-left {
            left: -30px;
          }
          
          .nav-arrow-right {
            right: -30px;
          }
          
          .nav-arrow {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}

function ExpertCard({
  name,
  label,
  image,
  height,
}: {
  name: string;
  label: string;
  image: string;
  height: string;
}) {
  // Set specific objectPosition for each expert who needs adjustment
  const getImageStyle = () => {
    switch(name) {
      case "Kerwin Fuentanilla":
        return { objectPosition: "center 10%" }; // Adjust Kerwin's image downward
      case "Ram Caronongan":
        return { objectPosition: "center 0%" }; // Adjust Ram's image downward
      default:
        return {};
    }
  };
  
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "18px",
        overflow: "hidden",
        width: "230px",
        height,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.25)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        fontFamily: "var(--font-jost), sans-serif",
      }}
      className="expert-card"
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.35s ease",
          ...getImageStyle(), // Apply the specific positioning
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: "0.6rem",
          color: "white",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0, 0, 0, 0.85) 2%, rgba(0,0,0,0) 50%)",
          textAlign: "center",
        }}
      >
        <div style={{
          fontSize: "1.2rem",
          fontWeight: 500,
          marginBottom: "0.2rem",
          lineHeight: "1.2",
        }}>
          {name}
        </div>
        <div style={{
          fontSize: "0.85rem",
          fontWeight: 400,
          opacity: 0.9,
          lineHeight: "1.1",
        }}>
          {label}
        </div>
      </div>

      <style jsx>{`
        .expert-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0px 18px 40px rgba(0, 0, 0, 0.35);
        }
        .expert-card:hover img {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}