import Reveal from "./Reveal";

export default function SectionHeading({ badge, title, text }) {
  return (
    <Reveal className="section-heading">
      <div className="section-badge">
        <span />
        {badge}
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
