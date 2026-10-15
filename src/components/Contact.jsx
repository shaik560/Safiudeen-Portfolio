import { useState } from "react";
import { CONTACT } from "../data/portfolio";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="section contact" id="contact">
      <SectionHeading
        badge="Connect"
        title="Let's Build Something"
        text="Have a project, a role, or a question about how something was designed? Send a message or reach out directly."
      />

      <div className="contact__grid">
        <Reveal className="panel contact__form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input required value={form.name} onChange={updateField("name")} placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={updateField("email")}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={updateField("message")}
                placeholder="Tell me about your project"
              />
            </label>
            <button className="connect-button contact-form__submit" type="submit">
              Send message
            </button>
            {submitted && (
              <p className="contact-form__note" role="status">
                Opening your email app to send the message.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal className="panel contact__info" delay={100}>
          <h3>Currently</h3>
          <p>Actively seeking full-time UI/UX Designer roles.</p>

          <h3>Direct</h3>
          <p>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <br />
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
            <br />
            {CONTACT.location}
          </p>

          <h3>Elsewhere</h3>
          <div className="chip-list">
            <a className="chip chip--link" href={`mailto:${CONTACT.email}`}>Email</a>
            <a className="chip chip--link" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="chip chip--link" href={CONTACT.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
          </div>

          <ArrowButton href={CONTACT.resume} className="contact__resume" target="_blank" rel="noreferrer">
            Download Resume
          </ArrowButton>
        </Reveal>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Shaik Safiudeen · UI/UX Designer</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </section>
  );
}
