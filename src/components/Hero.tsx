"use client";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

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
        paddingTop: "3rem",
        paddingRight: "6rem",
        paddingBottom: "3rem",
        paddingLeft: "6rem",
        backgroundColor: "#f6f4f4",
        fontFamily: "var(--font-jost), sans-serif",
      }}
    >
      <HeroLeft scrollToReach={scrollToReach} />
      <HeroRight />

      <style jsx>{`
        @media screen and (max-width: 768px) {
          #hero {
            flex-direction: column;
            padding: 2rem 1.5rem 5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}