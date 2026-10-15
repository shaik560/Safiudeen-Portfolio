import ArrowButton from "./ArrowButton";
import aboutBlob from "../assets/about-blob.svg";
import portrait from "../assets/portrait.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__visual" aria-hidden="true">
        <img className="about__blob" src={aboutBlob} alt="" />
        <div className="about__portrait-frame">
          <img className="about__portrait" src={portrait} alt="" />
        </div>
      </div>

      <div className="about__badge">
        <span />
        About Me
      </div>

      <div className="about__content">
        <h2>Get To Know Me</h2>
        <p>
          UI/UX Designer with over a year of experience designing user-centric web and mobile
          interfaces across agency, freelance, and self-driven projects.
        </p>
        <p>
          Skilled in User Research, wire-framing, Prototyping, and Usability Testing Using Figma,
          Framer, WixStudio, WordPress, Dora, Lovable, Balsamiq, and Miro/FigJam — with a strong
          product-thinking mindset that turns user needs into functional, responsive digital
          products.
        </p>
        <ArrowButton href="#experience" className="about__button">
          More about My Story
        </ArrowButton>
      </div>
    </section>
  );
}
