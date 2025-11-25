export default function Hero() {
    return (
      <section
        id="hero"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "3.5rem 6rem",
          backgroundColor: "#f6f4f4",
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ maxWidth: "700px" }}>
          {/* Logo */}
          <img
            src="/logo.png"
            alt="CCA Connect Logo"
            style={{ width: "240px", marginBottom: "1rem", marginLeft: "-0.3rem", }}
          />
  
          {/* Headline */}
          <h1
            style={{
              fontSize: "2.4rem",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "1.3rem",
              color: "#000",
            }}
          >
            Get access to the Philippines <b>top</b> <br />
            Food Beverage and Hospitality <b>experts</b>
          </h1>
  
          {/* Button */}
          <button
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
            Get Access
          </button>
        </div>
  
        {/* RIGHT SIDE — EXPERT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "1.2rem",
            width: "fit-content",
          }}
        >
          {/* Top Left - Tall */}
          <div style={{ gridColumn: "1", gridRow: "1" }}>
            <ExpertCard name="Isabel Lozano" image="experts/expert1.jpg" height="300px" />
          </div>
          
          {/* Top Right - Short */}
          <div style={{ gridColumn: "2", gridRow: "1" }}>
            <ExpertCard name="Prof X" image="experts/expert2.jpg" height="250px" />
          </div>
          
          {/* Bottom Left - Short */}
          <div style={{ gridColumn: "1", gridRow: "2", marginTop: "0px" }}>
            <ExpertCard name="Kerwin Fuentanilla" image="experts/expert3.jpg" height="250px" />
          </div>
          
          {/* Bottom Right - Tall */}
          <div style={{ gridColumn: "2", gridRow: "2", marginTop: "-50px" }}>
            <ExpertCard name="RL Garcia" image="experts/expert4.webp" height="300px" />
          </div>
        </div>
      </section>
    );
  }
  
  /* Expert Card Component */
  function ExpertCard({ name, image, height }: { name: string; image: string; height: string }) {
    return (
      <div
        style={{
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          width: "230px",
          height: height,
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            padding: "0.8rem",
            fontSize: "1.1rem",
            color: "white",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))",
          }}
        >
          {name}
        </div>
      </div>
    );
  }