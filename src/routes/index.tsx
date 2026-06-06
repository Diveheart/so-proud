import { createFileRoute } from "@tanstack/react-router";
import { FloatingParticles } from "@/components/FloatingParticles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "She Got the Job 💛" },
      { name: "description", content: "A little love letter to celebrate you." },
      { property: "og:title", content: "She Got the Job 💛" },
      { property: "og:description", content: "A little love letter to celebrate you." },
    ],
  }),
  component: Index,
});

function Index() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative overflow-x-hidden">
      <FloatingParticles count={28} />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="relative mb-12">
          <div className="animate-heart-glow flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[var(--rose-gold)] to-[var(--rose-deep)] text-6xl">
            <span className="animate-gentle-beat">♥</span>
          </div>
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="animate-sparkle absolute text-2xl"
              style={{
                top: `${Math.sin((i / 6) * Math.PI * 2) * 90 + 50}%`,
                left: `${Math.cos((i / 6) * Math.PI * 2) * 90 + 50}%`,
                color: "var(--rose-gold)",
                animationDelay: `${i * 0.3}s`,
              }}
            >
              ✦
            </span>
          ))}
        </div>
        <div className="relative">
          <div className="animate-soft-pulse absolute inset-0 -z-10 rounded-full bg-[var(--rose-deep)] opacity-30 blur-3xl" />
          <h1
            className="shimmer-text text-5xl leading-tight font-bold tracking-tight md:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            She Got the Job. 🎉
          </h1>
        </div>
        <p
          className="mt-8 max-w-2xl text-xl text-[var(--rose-deep)] md:text-2xl"
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
        >
          And I couldn't be prouder of her.
        </p>
        <div className="absolute bottom-10 animate-bounce text-[var(--rose-deep)]/60">
          ↓ scroll
        </div>
      </section>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="max-w-2xl text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-[var(--rose-deep)] uppercase">
            Our Story
          </p>
          <h2
            className="mb-10 text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-serif)", color: "var(--rose-deep)" }}
          >
            Since January 20th
          </h2>
          <div className="mx-auto mb-8 h-px w-24 bg-[var(--rose-gold)]" />
          <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
            Across the distance, through every call and every{" "}
            <em className="text-[var(--rose-deep)]">"goodnight,"</em> you've been my
            constant. You work hard, you dream big, you hang on and today the world finally caught
            up with how incredible you are.
          </p>
        </div>
      </section>

      <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="animate-sparkle pointer-events-none absolute text-3xl"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              color: i % 2 ? "var(--rose-gold)" : "var(--rose-deep)",
              animationDelay: `${(i % 5) * 0.4}s`,
              animationDuration: `${1.5 + (i % 3) * 0.5}s`,
            }}
          >
            {i % 3 === 0 ? "✦" : i % 3 === 1 ? "✧" : "♥"}
          </span>
        ))}
        <div className="relative max-w-3xl text-center">
          <h2
            className="shimmer-text mb-8 text-6xl leading-none font-black tracking-tight md:text-8xl lg:text-9xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            YOU GOT
            <br />
            THE JOB!
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/85 md:text-xl">
            I always knew this day was coming. You are brilliant, dedicated, and you
            deserve every good thing that walks through your door — including this
            opportunity. I am <strong className="text-[var(--rose-deep)]">SO</strong> proud
            of you.
          </p>
        </div>
      </section>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="max-w-2xl text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-[var(--rose-deep)] uppercase">
            A New Chapter
          </p>
          <h2
            className="mb-10 text-4xl md:text-6xl"
            style={{ fontFamily: "var(--font-serif)", color: "var(--rose-deep)" }}
          >
            Here's to your next chapter
          </h2>
          <div className="mx-auto mb-8 h-px w-24 bg-[var(--rose-gold)]" />
          <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
            More than the job, I'm excited for what comes next — your own space, your
            peace, your freedom. You deserve a home that feels like a safe place, not a
            storm. I can't wait for the day you wake up in your own apartment, make your
            morning coffee, and breathe easy.
          </p>
          <p
            className="mt-8 text-2xl text-[var(--rose-deep)] md:text-3xl"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            That day is coming. I'll be cheering for you every step of the way.
          </p>
        </div>
      </section>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="relative max-w-2xl">
          <div
            className="relative rounded-3xl border border-[var(--rose-gold)]/40 bg-gradient-to-br from-[var(--cream)] to-[var(--blush)] p-10 text-center shadow-2xl md:p-16"
            style={{
              boxShadow:
                "0 30px 80px -20px color-mix(in oklab, var(--rose-deep) 35%, transparent)",
            }}
          >
            <div className="mb-6 text-4xl text-[var(--rose-deep)]/40">“</div>
            <p
              className="text-2xl leading-relaxed text-[var(--rose-deep)] md:text-3xl"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              No matter the miles between us, my heart is always with you. You are my
              favorite person and a part of me. can't wait to be right next to you Keep going. I love you soooo freaking much.

            </p>
            <div className="mt-10 flex justify-center">
              <span className="animate-gentle-beat text-5xl text-[var(--rose-deep)]">
                ♥
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 py-16 text-center">
        <p
          className="text-lg text-[var(--rose-deep)]"
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
        >
          Made with love, just for you. 💛
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{today}</p>
      </footer>
    </div>
  );
}
