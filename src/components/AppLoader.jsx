import { useEffect, useState } from "react";
import TechText from "./TechText";

export default function AppLoader({ onDone, duration = 7000 }) {
  const [gone, setGone] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), duration - 300);
    const unmountTimer = setTimeout(() => {
      setGone(true);
      onDone?.();
    }, duration);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [duration, onDone]);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-navy flex items-center justify-center transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Soft blue glow behind the wordmark */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(30,77,183,0.18), transparent 70%)",
        }}
      />

      {/* Animated wordmark */}
      <div className="relative w-full h-full max-w-[1200px] max-h-[520px] px-6">
        <TechText
          text="CODE AXIS TECH"
          fontWeight={800}
          fontSize={170}
          letterSpacing={-0.02}
          color="#ffffff"
          accentColor="#1E4DB7"
          reach={220}
          softness={0.7}
          dashLength={4}
          dashGap={2}
          strokeWidth={1.5}
          lineStyle="dashed"
          reveal="letter"
          specks={15}
          selection
          labels={false}
          draggable={false}
          sweep
          speed={1.4}
        />
      </div>

      {/* Tagline */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center">
        <div className="text-[10px] sm:text-[11px] tracking-[.28em] uppercase text-white/45 font-semibold">
          Digital Solutions
        </div>
      </div>
    </div>
  );
}