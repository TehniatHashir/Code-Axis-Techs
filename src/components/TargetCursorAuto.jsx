import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SELECTOR = [
  "a",
  "button",
  "[role='button']",
  "[role='link']",
  "[role='menuitem']",
  "[role='tab']",
  "[role='radio']",
  "input",
  "textarea",
  "select",
  "summary",
  "label",
  "details",
  "article",
  "[data-cursor-target]",
  ".cursor-target",
  "[class*='rounded-2xl']",
  "[class*='rounded-xl']",
].join(",");

export default function TargetCursorAuto() {
  const { pathname } = useLocation();

  useEffect(() => {
    const apply = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (el.closest("[data-no-cursor-target]")) return;
        const r = el.getBoundingClientRect();
        if (r.width > 900 || r.height > 700) return;
        el.classList.add("cursor-target");
      });
    };
    apply();
    const mo = new MutationObserver(apply);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, [pathname]);

  return null;
}