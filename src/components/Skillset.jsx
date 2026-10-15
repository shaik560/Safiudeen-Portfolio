import { TOOLS, UX_PROCESS, WORKING_STYLE } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ToolCard({ tool, delay }) {
  const { name, note, logo, logoBg } = tool;

  return (
    <Reveal className="tool-card" delay={delay}>
      {logo ? (
        <span className="tool-card__logo" style={logoBg ? { background: logoBg } : undefined}>
          <img src={logo} alt={`${name} logo`} loading="lazy" />
        </span>
      ) : (
        <span className="tool-card__icon" aria-hidden="true">
          {name.charAt(0)}
        </span>
      )}
      <h3>{name}</h3>
      <p>{note}</p>
    </Reveal>
  );
}

export default function Skillset() {
  return (
    <section className="section skillset" id="skillset">
      <SectionHeading
        badge="Skillset"
        title="Tools & Process"
        text="The tools I reach for daily, and the process that shapes how I approach a brief."
      />

      <div className="skillset__grid">
        {TOOLS.map((tool, index) => (
          <ToolCard key={tool.name} tool={tool} delay={index * 50} />
        ))}
      </div>

      <div className="skillset__panels">
        <Reveal className="panel">
          <h3>UX Process</h3>
          <div className="chip-list">
            {UX_PROCESS.map((step) => (
              <span key={step} className="chip">
                {step}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="panel" delay={100}>
          <h3>Working Style</h3>
          <ul className="style-list">
            {WORKING_STYLE.map(({ title, note }) => (
              <li key={title}>
                <strong>{title}</strong>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
