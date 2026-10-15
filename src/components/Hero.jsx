import ArrowButton from "./ArrowButton";
import heroBackground from "../assets/hero-background.webp";
import heroGlow from "../assets/hero-glow.svg";

const BADGES = [
  "Eight+ Project Shipment’s",
  "A range of design tools",
  "One+ Year Of Craft",
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img className="hero__background" src={heroBackground} alt="" />
      <img className="hero__glow" src={heroGlow} alt="" />

      <div className="hero__content">
        <p className="hero__eyebrow">Welcome - Glad You’re Here</p>
        <h1>Shaik Safiudeen</h1>
        <p className="hero__description">
          A process that's still stuck in spreadsheets, endless resume scanning, and gut-feel
          decisions
        </p>
        <div className="hero__badges" aria-label="Highlights">
          {BADGES.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <ArrowButton href="#projects" className="hero__button">
          View My Work
        </ArrowButton>
      </div>
    </section>
  );
}
