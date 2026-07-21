'use client'

import { useMemo } from 'react'

export function Hero() {
  // Deterministic-ish motes generated once on mount
  const motes = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280
        const rnd = seed / 233280
        const rnd2 = ((i * 4931 + 7919) % 997) / 997
        return {
          left: `${Math.round(rnd * 100)}%`,
          size: 2 + Math.round(rnd2 * 4),
          duration: 16 + Math.round(rnd * 20),
          delay: -Math.round(rnd2 * 30),
          opacity: 0.25 + rnd2 * 0.4,
          drift: `${Math.round((rnd - 0.5) * 80)}px`,
        }
      }),
    [],
  )

  return (
    <section
      id="gora"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      {/* Photograph */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-room.png"
          alt="Przyciemniony gabinet masażu oświetlony świecami, tablet spoczywa na złożonym lnianym ręczniku, ekran delikatnie świeci"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Warm scrim for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(28,25,21,0.92) 0%, rgba(38,33,27,0.55) 38%, rgba(51,49,44,0.15) 70%, rgba(51,49,44,0.35) 100%)',
        }}
      />

      {/* Ambient candle glow */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div
          className="glow-a candle-flicker absolute h-[46vh] w-[46vh] rounded-full blur-3xl"
          style={{
            left: '14%',
            bottom: '18%',
            background:
              'radial-gradient(circle, rgba(227,201,160,0.55) 0%, rgba(201,154,106,0.28) 45%, rgba(201,154,106,0) 70%)',
          }}
        />
        <div
          className="glow-b absolute h-[38vh] w-[38vh] rounded-full blur-3xl"
          style={{
            right: '10%',
            top: '22%',
            background:
              'radial-gradient(circle, rgba(201,154,106,0.4) 0%, rgba(169,124,79,0.2) 50%, rgba(169,124,79,0) 72%)',
          }}
        />
      </div>

      {/* Rising light motes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {motes.map((m, i) => (
          <span
            key={i}
            className="mote absolute bottom-[-10px] rounded-full bg-clay-light"
            style={{
              left: m.left,
              width: m.size,
              height: m.size,
              animationDuration: `${m.duration}s`,
              animationDelay: `${m.delay}s`,
              // @ts-expect-error custom props
              '--mote-opacity': m.opacity,
              '--mote-drift': m.drift,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Copy */}
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-cream/70">
          <span className="h-px w-8 bg-clay-light" />
          Masaż skrojony na miarę
        </p>
        <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
          Wchodzi,
          <br />
          już wiedząc.
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-cream/80">
          Gość zaznacza na tablecie, gdzie boli, jaki olejek lubi i czy woli
          ciszę. Terapeuta otwiera drzwi z gotowym powitaniem — bez ankiet przy
          leżance, bez zgadywania.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-clay px-7 py-3.5 text-base font-medium text-charcoal shadow-lift transition-colors hover:bg-clay-light"
          >
            Umów pokaz w swoim gabinecie
          </a>
          <a
            href="#gosc"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-base font-medium text-cream transition-colors hover:bg-cream/10"
          >
            Zobacz, jak to działa
          </a>
        </div>
      </div>
    </section>
  )
}
