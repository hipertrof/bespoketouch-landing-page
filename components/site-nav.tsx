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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#gora" className="flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight text-charcoal">
            BespokeTouch
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate transition-colors hover:text-charcoal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="rounded-full bg-clay-dark px-5 py-2.5 text-sm font-medium text-cream shadow-soft transition-colors hover:bg-charcoal"
        >
          Umów pokaz
        </a>
      </nav>
    </header>
  )
}
