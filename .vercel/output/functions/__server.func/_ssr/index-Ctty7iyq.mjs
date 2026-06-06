import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
function FloatingParticles({ count = 24 }) {
  const particles = reactExports.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 18,
      size: 10 + Math.random() * 18,
      isHeart: Math.random() > 0.4,
      opacity: 0.3 + Math.random() * 0.5
    })),
    [count]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "animate-float-up absolute bottom-0 select-none",
      style: {
        left: `${p.left}%`,
        animationDelay: `${p.delay}s`,
        animationDuration: `${p.duration}s`,
        fontSize: `${p.size}px`,
        opacity: p.opacity,
        color: "var(--rose-deep)"
      },
      children: p.isHeart ? "♥" : "✦"
    },
    p.id
  )) });
}
function Index() {
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingParticles, { count: 28 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-heart-glow flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[var(--rose-gold)] to-[var(--rose-deep)] text-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-gentle-beat", children: "♥" }) }),
        [...Array(6)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-sparkle absolute text-2xl", style: {
          top: `${Math.sin(i / 6 * Math.PI * 2) * 90 + 50}%`,
          left: `${Math.cos(i / 6 * Math.PI * 2) * 90 + 50}%`,
          color: "var(--rose-gold)",
          animationDelay: `${i * 0.3}s`
        }, children: "✦" }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-soft-pulse absolute inset-0 -z-10 rounded-full bg-[var(--rose-deep)] opacity-30 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "shimmer-text text-5xl leading-tight font-bold tracking-tight md:text-7xl lg:text-8xl", style: {
          fontFamily: "var(--font-serif)"
        }, children: "She Got the Job. 🎉" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-xl text-[var(--rose-deep)] md:text-2xl", style: {
        fontFamily: "var(--font-serif)",
        fontStyle: "italic"
      }, children: "And I couldn't be prouder of her." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 animate-bounce text-[var(--rose-deep)]/60", children: "↓ scroll" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 flex min-h-screen items-center justify-center px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm tracking-[0.3em] text-[var(--rose-deep)] uppercase", children: "Our Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-10 text-5xl md:text-6xl", style: {
        fontFamily: "var(--font-serif)",
        color: "var(--rose-deep)"
      }, children: "Since January 20th" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-8 h-px w-24 bg-[var(--rose-gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-foreground/80 md:text-xl", children: [
        "Across the distance, through every call and every",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-[var(--rose-deep)]", children: '"goodnight,"' }),
        " you've been my constant. You work hard, you dream big, you hang on and today the world finally caught up with how incredible you are."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-6 py-24", children: [
      [...Array(20)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-sparkle pointer-events-none absolute text-3xl", style: {
        top: `${i * 53 % 100}%`,
        left: `${i * 37 % 100}%`,
        color: i % 2 ? "var(--rose-gold)" : "var(--rose-deep)",
        animationDelay: `${i % 5 * 0.4}s`,
        animationDuration: `${1.5 + i % 3 * 0.5}s`
      }, children: i % 3 === 0 ? "✦" : i % 3 === 1 ? "✧" : "♥" }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "shimmer-text mb-8 text-6xl leading-none font-black tracking-tight md:text-8xl lg:text-9xl", style: {
          fontFamily: "var(--font-serif)"
        }, children: [
          "YOU GOT",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "THE JOB!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto max-w-2xl text-lg leading-relaxed text-foreground/85 md:text-xl", children: [
          "I always knew this day was coming. You are brilliant, dedicated, and you deserve every good thing that walks through your door — including this opportunity. I am ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[var(--rose-deep)]", children: "SO" }),
          " proud of you."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 flex min-h-screen items-center justify-center px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm tracking-[0.3em] text-[var(--rose-deep)] uppercase", children: "A New Chapter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-10 text-4xl md:text-6xl", style: {
        fontFamily: "var(--font-serif)",
        color: "var(--rose-deep)"
      }, children: "Here's to your next chapter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-8 h-px w-24 bg-[var(--rose-gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/80 md:text-xl", children: "More than the job, I'm excited for what comes next — your own space, your peace, your freedom. You deserve a home that feels like a safe place, not a storm. I can't wait for the day you wake up in your own apartment, make your morning coffee, and breathe easy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-2xl text-[var(--rose-deep)] md:text-3xl", style: {
        fontFamily: "var(--font-serif)",
        fontStyle: "italic"
      }, children: "That day is coming. I'll be cheering for you every step of the way." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 flex min-h-screen items-center justify-center px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-[var(--rose-gold)]/40 bg-gradient-to-br from-[var(--cream)] to-[var(--blush)] p-10 text-center shadow-2xl md:p-16", style: {
      boxShadow: "0 30px 80px -20px color-mix(in oklab, var(--rose-deep) 35%, transparent)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 text-4xl text-[var(--rose-deep)]/40", children: "“" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl leading-relaxed text-[var(--rose-deep)] md:text-3xl", style: {
        fontFamily: "var(--font-hand)"
      }, children: "No matter the miles between us, my heart is always with you. You are my favorite person and a part of me. can't wait to be right next to you Keep going. I love you soooo freaking much." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-gentle-beat text-5xl text-[var(--rose-deep)]", children: "♥" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative z-10 px-6 py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-[var(--rose-deep)]", style: {
        fontFamily: "var(--font-serif)",
        fontStyle: "italic"
      }, children: "Made with love, just for you. 💛" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: today })
    ] })
  ] });
}
export {
  Index as component
};
