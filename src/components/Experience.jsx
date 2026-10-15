import { EDUCATION, EXPERIENCE } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <SectionHeading
        badge="Career Journey"
        title="Where I've Worked"
        text="From freelance beginnings to agency work to where I am now."
      />

      <ol className="timeline">
        {EXPERIENCE.map((job, index) => (
          <li className="timeline__item" key={`${job.company}-${job.role}`}>
            <span className="timeline__dot" aria-hidden="true" />
            <Reveal className="timeline__card" delay={index * 60}>
              <span className="timeline__period">{job.period}</span>
              <h3>{job.role}</h3>
              <p className="timeline__company">{job.company}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="chip-list">
                {job.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}

        <li className="timeline__item">
          <span className="timeline__dot timeline__dot--edu" aria-hidden="true" />
          <Reveal className="timeline__card">
            <span className="timeline__period">{EDUCATION.period}</span>
            <h3>{EDUCATION.degree}</h3>
            <p className="timeline__company">{EDUCATION.detail}</p>
          </Reveal>
        </li>
      </ol>
    </section>
  );
}
