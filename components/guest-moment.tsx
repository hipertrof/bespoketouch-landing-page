import { Reveal } from './reveal'
import { BodyMap } from './body-map'

const scents = [
  { name: 'Lawenda i rumianek', note: 'Relaksujący', active: true },
  { name: 'Eukaliptus i mięta', note: 'Regenerujący', active: false },
  { name: 'Drzewo sandałowe', note: 'Uziemiający', active: false },
]

const pressures = ['Lekki', 'Średni', 'Mocny', 'Głęboki']

export function GuestMoment() {
  return (
    <section id="gosc" className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-clay-dark">
            <span className="h-px w-8 bg-clay" />
            Chwila gościa
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
            Podajesz tablet. Reszta dzieje się sama.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
            Bez aplikacji, bez zakładania konta. Gość dotyka sylwetki tam, gdzie
            chce więcej uwagi, i tam, gdzie prosi, by nie dotykać. Wybiera
            zapach, nacisk i to, czy chce rozmawiać, czy milczeć.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Body map card */}
          <Reveal className="lg:col-span-2" delay={80}>
            <div className="flex h-full flex-col rounded-3xl border border-sand/70 bg-cream-dark p-7 shadow-soft">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-medium text-slate">
                  Mapa ciała
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-light">
                  Widok z przodu
                </span>
              </div>
              <div className="mx-auto h-72 w-full max-w-[220px]">
                <BodyMap />
              </div>
              <div className="mt-6 flex flex-wrap gap-4 border-t border-sand/60 pt-5 text-sm">
                <span className="flex items-center gap-2 text-slate">
                  <span className="h-3 w-3 rounded-full bg-clay-dark" />
                  Priorytet
                </span>
                <span className="flex items-center gap-2 text-slate">
                  <span className="h-3 w-3 rounded-full bg-rose" />
                  Nie dotykać
                </span>
                <span className="flex items-center gap-2 text-slate-light">
                  <span className="h-3 w-3 rounded-full border border-sand-dark bg-sand" />
                  Standard
                </span>
              </div>
            </div>
          </Reveal>

          {/* Preferences card */}
          <Reveal className="lg:col-span-3" delay={160}>
            <div className="flex h-full flex-col gap-8 rounded-3xl border border-sand/70 bg-oatmeal p-7 shadow-soft sm:p-9">
              <div>
                <span className="text-sm font-medium text-slate">Zapach olejku</span>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {scents.map((s) => (
                    <div
                      key={s.name}
                      className={`rounded-2xl border p-4 transition-colors ${
                        s.active
                          ? 'border-clay bg-clay-tint'
                          : 'border-sand-dark/60 bg-cream/60'
                      }`}
                    >
                      <p className="text-sm font-medium leading-snug text-charcoal">
                        {s.name}
                      </p>
                      <p className="mt-1 text-xs text-slate-light">{s.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-slate">Nacisk</span>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {pressures.map((p) => (
                    <span
                      key={p}
                      className={`rounded-full px-4 py-2 text-sm ${
                        p === 'Mocny'
                          ? 'bg-charcoal text-cream'
                          : 'border border-sand-dark/60 bg-cream/60 text-slate'
                      }`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-sage-tint px-4 py-2 text-sm text-sage-dark">
                  Podgrzewana leżanka
                </span>
                <span className="rounded-full bg-sage-tint px-4 py-2 text-sm text-sage-dark">
                  Dźwięki natury
                </span>
                <span className="rounded-full border border-sand-dark/60 bg-cream/60 px-4 py-2 text-sm text-slate">
                  Sesja w ciszy
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
