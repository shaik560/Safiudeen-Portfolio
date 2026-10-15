import { useState } from "react";
import { PROJECTS } from "../data/portfolio";
import ArrowIcon from "./ArrowIcon";
import CaseStudyModal from "./CaseStudyModal";
import ProjectArt from "./ProjectArt";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, index, onOpen }) {
  const { id, title, role, summary, tags, accent } = project;

  return (
    <Reveal className="project-wrap" delay={(index % 3) * 80}>
      <button
        className="project-card"
        type="button"
        onClick={() => onOpen(project)}
        style={{ "--accent": accent }}
      >
        <span className="project-card__thumb" aria-hidden="true">
          <span className="project-card__number">0{index + 1}</span>
          <ProjectArt id={id} title={title} />
        </span>

        <span className="project-card__body">
          <span className="project-card__role">{role}</span>
          <strong>{title}</strong>
          <span className="project-card__summary">{summary}</span>
          <span className="chip-list">
            {tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </span>
          <span className="project-card__cta">
            <span className="arrow-button__icon" aria-hidden="true">
              <ArrowIcon />
            </span>
            View case study
          </span>
        </span>
      </button>
    </Reveal>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="section projects" id="projects">
      <SectionHeading
        badge="Project"
        title="Selected Projects"
        text="Agency, freelance, and self-driven work. Open any card for the full case study."
      />

      <div className="projects__grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject} />
        ))}
      </div>

      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
