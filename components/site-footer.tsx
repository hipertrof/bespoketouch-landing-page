export function SiteFooter() {
  return (
    <footer className="bg-cream py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <p className="font-serif text-2xl text-charcoal">BespokeTouch</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate">
            Masaż skrojony na miarę. Tablet w gabinecie, panel dla zespołu.
          </p>
        </div>

        <nav aria-label="Stopka" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a href="#gosc" className="text-slate transition-colors hover:text-charcoal">
            Dla gościa
          </a>
          <a href="#terapeuta" className="text-slate transition-colors hover:text-charcoal">
            Dla terapeuty
          </a>
          <a href="#raporty" className="text-slate transition-colors hover:text-charcoal">
            Raporty
          </a>
          <a href="#kontakt" className="text-slate transition-colors hover:text-charcoal">
            Kontakt
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-sand/60 px-6 pt-6 lg:px-10">
        <p className="text-xs text-slate-light">
          © {new Date().getFullYear()} BespokeTouch. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
