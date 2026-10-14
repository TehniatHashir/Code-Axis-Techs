import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";

export default function Logo({ variant = "dark" }) {
  return (
    <Link
      to="/"
      aria-label="Code Axis Tech — home"
      className="inline-flex items-center"
    >
      <img
        src={logoImg}
        alt="Code Axis Tech logo"
        className={`w-auto object-contain ${variant === "light" ? "h-24 sm:h-32" : "h-14 sm:h-20"}`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}