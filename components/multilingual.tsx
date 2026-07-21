'use client'

import { useEffect, useState } from 'react'

// "Welcome" in the eight languages the kiosk speaks.
const phrases = [
  { text: 'Witamy', lang: 'polski' },
  { text: 'Welcome', lang: 'English' },
  { text: 'Ласкаво просимо', lang: 'українська' },
  { text: 'Benvenuti', lang: 'italiano' },
  { text: 'Bienvenue', lang: 'français' },
  { text: 'Willkommen', lang: 'Deutsch' },
  { text: 'Bienvenidos', lang: 'español' },
  { text: 'Selamat datang', lang: 'Bahasa Indonesia' },
]

export function Multilingual() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, 2600)
    return () => clearInterval(id)
  }, [paused])

  const current = phrases[index]

  return (
    <section
      className="bg-cream py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="mb-8 text-sm uppercase tracking-[0.22em] text-slate-light">
          Ten sam ciepły gest, w ośmiu językach
        </p>
        <p className="flex min-h-[1.2em] items-center justify-center font-serif text-6xl leading-none text-charcoal sm:text-7xl lg:text-8xl">
          <span key={index} className="animate-in fade-in duration-700">
            {current.text}
          </span>
        </p>
        <p className="mt-6 text-base text-slate">{current.lang}</p>
        <p className="mx-auto mt-10 max-w-lg text-pretty leading-relaxed text-slate">
          Gość wybiera swój język jednym dotknięciem globusa. Ekran mówi do
          niego po swojemu — a przyciski dla zespołu zostają po polsku.
        </p>
      </div>
    </section>
  )
}
