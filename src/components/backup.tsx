"use client";

export default function Hero() {
    const scrollToReach = () => {
    const reachSection = document.getElementById("reach");
    if (reachSection) {
      reachSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "1rem",
        paddingRight: "6rem",
        paddingBottom: "10rem",
        paddingLeft: "6rem",
        backgroundColor: "#f6f4f4",
        fontFamily: "var(--font-jost), sans-serif",
      }}
    >
      {/* LEFT */}
      <div className="hero-left" style={{ maxWidth: "700px" }}>
        <img
          src="/logo.png"
          alt="CCA Connect Logo"
          className="hero-logo"
          style={{ width: "240px", marginBottom: "1rem", marginLeft: "-0.3rem" }}
        />

        <h1
          className="hero-heading"
        >
          Get access to the Philippines <b>top</b> <br />
          Food Beverage and Hospitality <b>experts</b>
        </h1>

        <button
          className="cta-button"
          onClick={scrollToReach} // <-- add this
          style={{
            padding: "0.6rem 2.6rem",
            backgroundColor: "#a9cee7",
            border: "none",
            borderRadius: "999px",
            fontSize: "1.7rem",
            cursor: "pointer",
            color: "#000",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          Learn More
        </button>
      </div>

      {/* RIGHT GRID */}
      <div className="hero-right" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.2rem",
        width: "fit-content",
      }}>
        <ExpertCard name="Isabel Lozano" image="experts/expert1.jpg" height="300px" />
        <ExpertCard name="Prof X" image="experts/expert4.webp" height="250px" />
        <ExpertCard name="Kerwin Fuentanilla" image="experts/expert2.jpg" height="250px" />
        <div style={{ marginTop: "-50px" }}>
          <ExpertCard name="RL Garcia" image="experts/expert3.jpg" height="300px" />
        </div>
      </div>

      <style jsx>{`
        /* Hero heading styles */
        .hero-heading {
          font-size: 2.4rem;
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 1.3rem;
          color: #000;
        }

        /* Button hover effects */
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

        /* Expert card hover effects */
        .expert-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0px 18px 40px rgba(0, 0, 0, 0.35);
        }
        .expert-card:hover img {
          transform: scale(1.08);
        }

        /* MOBILE STYLES */
        @media screen and (max-width: 768px) {
          #hero {
            flex-direction: column;
            padding: 2rem 1.5rem 5rem 1.5rem;
          }

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
            font-size: 1.5rem; /* Reduced font size for mobile */
          }

          .cta-button {
            font-size: 1.4rem;
            padding: 0.5rem 2rem;
          }

          .hero-right {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            overflow-x: auto;
            width: 100%;
            padding-bottom: 1rem;
            -webkit-overflow-scrolling: touch;
          }

          .hero-right > div {
            flex: 0 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

function ExpertCard({
  name,
  image,
  height,
}: {
  name: string;
  image: string;
  height: string;
}) {
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
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: "0.6rem",
          fontSize: "1.2rem",
          color: "white",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0, 0, 0, 0.85) 2%, rgba(0,0,0,0) 50%)",
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        {name}
      </div>
    </div>
  );
}