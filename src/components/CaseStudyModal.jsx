import { useEffect } from "react";
import ArrowButton from "./ArrowButton";

export default function CaseStudyModal({ project, onClose }) {
  // Close on Escape and lock page scroll while the modal is open.
  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const { title, role, tags, overview, problem, process, solution, stats, link } = project;

  return (
    <div className="modal" role="presentation" onClick={onClose}>
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__close" type="button" onClick={onClose} aria-label="Close case study">
          ×
        </button>

        <div className="chip-list">
          {tags.map((tag) => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>

        <h3 id="case-title">{title}</h3>
        <p className="modal__role">{role}</p>

        <h4>Overview</h4>
        <p>{overview}</p>

        <h4>Problem</h4>
        <p>{problem}</p>

        <h4>Process</h4>
        <ul>
          {process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <h4>Solution</h4>
        <p>{solution}</p>

        <div className="stat-row">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {link && (
          <ArrowButton href={link.href} className="modal__link" target="_blank" rel="noreferrer">
            {link.label}
          </ArrowButton>
        )}
      </div>
    </div>
  );
}
