import { Link } from "react-router";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "text-[10px]" }: LogoProps) {
  return (
    <Link to="/" className={`nc-logo ${className}`} aria-label="Nimrod Cambalon">
      <span className="nc-mark">
        <span>N</span>
        <span>C</span>
      </span>
      <span className="nc-rule" />
      <span className="nc-name">
        Nimrod Cambalon
      </span>
    </Link>
  );
}
