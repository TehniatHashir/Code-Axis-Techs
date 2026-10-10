import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate, motion, motionValue, useReducedMotion, useTransform } from "motion/react";

const Chip = forwardRef(function Chip({ mv, children, ...rest }, ref) {
  const transform = useTransform(
    () => `translateX(${mv.x.get()}px) scale(${mv.sx.get()}, ${mv.sy.get()})`
  );
  return (
    <motion.div ref={ref} style={{ transform }} {...rest}>
      {children}
    </motion.div>
  );
});

export default function JellyNav({
  items,
  activePath,
  renderItem,
  gap = 4,
  swell = 0.1,
  barge = 3,
  shrink = 0.02,
  jelly = 0.8,
  bounce = 0.25,
  stagger = 18,
  stiffness = 620,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const reduce = useReducedMotion();
  const groupRef = useRef(null);
  const chipRefs = useRef([]);
  const widths = useRef([]);
  const mvs = useRef([]);
  const activeIndex = Math.max(0, items.findIndex((it) => it[1] === activePath));
  const targetIndex = hoveredIndex >= 0 ? hoveredIndex : activeIndex;
  const applied = useRef(targetIndex);
  const cfg = useRef({});
  cfg.current = {
    swell,
    barge,
    shrink,
    jelly,
    bounce,
    stagger,
    stiffness,
    reduce,
    count: items.length,
  };

  const mvFor = (i) => {
    let mv = mvs.current[i];
    if (!mv) {
      mv = { x: motionValue(0), sx: motionValue(1), sy: motionValue(1) };
      mvs.current[i] = mv;
    }
    return mv;
  };

  const apply = (sel, instant) => {
    const C = cfg.current;
    const push = ((widths.current[sel] ?? 0) * C.swell) / 2 + C.barge;
    for (let i = 0; i < C.count; i++) {
      const mv = mvFor(i);
      const on = i === sel;
      const far = Math.abs(i - sel);
      const dir = Math.sign(i - sel);
      const x = dir * push;
      const s = on ? 1 + C.swell : 1 - C.shrink;
      if (instant || C.reduce) {
        mv.x.jump(x);
        mv.sx.jump(s);
        mv.sy.jump(s);
        continue;
      }
      const k = C.stiffness * (1 - 0.12 * Math.min(far, 3));
      const inFlight =
        mv.x.isAnimating() || mv.sx.isAnimating() || mv.sy.isAnimating();
      const delay = inFlight ? 0 : (far * C.stagger) / 1000;
      animate(mv.x, x, {
        type: "spring",
        stiffness: k,
        damping: 2 * Math.sqrt(k * 0.9) * (1 - C.bounce),
        mass: 0.9,
        delay,
      });
      const j = C.jelly;
      animate(mv.sx, s, {
        type: "spring",
        stiffness: k * (1 + 0.24 * j),
        damping:
          2 *
          Math.sqrt(k * (1 + 0.24 * j) * (0.9 - 0.1 * j)) *
          (1 - Math.min(0.85, C.bounce + 0.3 * j)),
        mass: 0.9,
        delay,
      });
      animate(mv.sy, s, {
        type: "spring",
        stiffness: k * (1 - 0.14 * j),
        damping:
          2 *
          Math.sqrt(k * (1 - 0.14 * j) * (0.9 + 0.05 * j)) *
          (1 - C.bounce),
        mass: 0.9,
        delay: delay + 0.05 * j,
      });
    }
  };

  const measure = () => {
    widths.current = chipRefs.current.map((el) => el?.offsetWidth ?? 0);
  };

  useLayoutEffect(() => {
    const settle = () => {
      measure();
      apply(applied.current, true);
    };
    settle();
    const observer = new ResizeObserver(settle);
    if (groupRef.current) observer.observe(groupRef.current);
    document.fonts?.ready.then(settle);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.map((i) => i[0]).join("|"), gap, swell, barge, shrink]);

  useEffect(() => {
    applied.current = targetIndex;
    apply(targetIndex, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIndex]);

  useEffect(
    () => () =>
      mvs.current.forEach((mv) => {
        mv.x.destroy();
        mv.sx.destroy();
        mv.sy.destroy();
      }),
    []
  );

  return (
    <div
      ref={groupRef}
      className="inline-flex items-center"
      style={{ gap: `${gap}px` }}
      onMouseLeave={() => setHoveredIndex(-1)}
    >
      {items.map((it, i) => {
        const isActive = it[1] === activePath;
        return (
          <Chip
            key={it[1]}
            mv={mvFor(i)}
            ref={(el) => {
              chipRefs.current[i] = el;
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            className="origin-center"
          >
            {renderItem(it, isActive, i, targetIndex === i)}
          </Chip>
        );
      })}
    </div>
  );
}