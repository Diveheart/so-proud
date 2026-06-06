import { useMemo } from "react";

export function FloatingParticles({ count = 24 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 18,
        size: 10 + Math.random() * 18,
        isHeart: Math.random() > 0.4,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-float-up absolute bottom-0 select-none"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            color: "var(--rose-deep)",
          }}
        >
          {p.isHeart ? "♥" : "✦"}
        </span>
      ))}
    </div>
  );
}