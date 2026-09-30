import { Link } from "react-router-dom";

export default function Logo({ variant = "dark" }) {
  const text = variant === "light" ? "text-white" : "text-ink";
  return (
    <Link
      to="/"
      className={`flex items-center gap-3 font-display text-[28px] font-semibold ${text}`}
    >
      <i className="w-[38px] h-[38px] rounded-full bg-[conic-gradient(var(--color-pink),var(--color-violet),var(--color-primary),var(--color-pink))]" />
      Code <span className="text-accent">Axis</span> Tech
    </Link>
  );
}