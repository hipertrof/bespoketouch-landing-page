'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#gosc', label: 'Dla gościa' },
  { href: '#terapeuta', label: 'Dla terapeuty' },
  { href: '#raporty', label: 'Raporty' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b border-sand/50'
          : 'bg-transparent'
      }`}
    >
      {/* Subtle top scrim so light nav text stays legible over the dark hero (no page background change) */}
      {!scrolled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal/55 to-transparent"
        />
      )}

      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#gora" className="flex items-center gap-3">
          <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-sand/60 shadow-soft">
            <img
              src="/images/logo-mark.jpg"
              alt="BespokeTouch"
              className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 object-cover"
            />
          </span>
          <span
            className={`font-serif text-xl tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-charcoal' : 'text-cream drop-shadow-sm'
            }`}
          >
            BespokeTouch
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors duration-500 ${
                  scrolled
                    ? 'text-slate hover:text-charcoal'
                    : 'text-cream/90 drop-shadow-sm hover:text-cream'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className={`rounded-full px-5 py-2.5 text-sm font-medium shadow-soft transition-colors duration-500 ${
            scrolled
              ? 'bg-clay-dark text-cream hover:bg-charcoal'
              : 'bg-cream/95 text-charcoal hover:bg-cream'
          }`}
        >
          Umów pokaz
        </a>
      </nav>
    </header>
  )
}
