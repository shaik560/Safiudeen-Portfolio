import ArrowIcon from "./ArrowIcon";

export default function ArrowButton({ children, href, className = "", ...rest }) {
  return (
    <a className={`arrow-button ${className}`} href={href} {...rest}>
      <span className="arrow-button__icon" aria-hidden="true">
        <ArrowIcon />
      </span>
      <span>{children}</span>
    </a>
  );
}
