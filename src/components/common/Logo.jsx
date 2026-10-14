import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import logoFooterImg from "../../assets/images/logo-footer.png";

export default function Logo({ variant = "dark" }) {
  const src = variant === "light" ? logoFooterImg : logoImg;
  return (
    <Link
      to="/"
      aria-label="Code Axis Tech — home"
      className="inline-flex items-center"
    >
      <img
        src={src}
        alt="Code Axis Tech logo"
        className={`w-auto object-contain ${variant === "light" ? "h-24 sm:h-32" : "h-14 sm:h-20"}`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}