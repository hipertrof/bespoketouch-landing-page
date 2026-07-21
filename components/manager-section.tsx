import { Reveal } from './reveal'

const bars = [62, 74, 68, 81, 77, 88, 84, 91, 86, 93, 89, 95]

export function ManagerSection() {
  return (
    <section id="raporty" className="bg-cream-dark py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-clay-dark">
              <span className="h-px w-8 bg-clay" />
              Widok menedżera
            </p>
            <h2 className="text-balance font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              Problem widać, zanim stanie się złą opinią.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-slate">
              Krótka, całkowicie pomijalna ankieta po zabiegu zasila panel
              dostępny tylko dla menedżera: CSAT, NPS, wskaźnik niedopasowania
              nacisku i podział na terapeutów oraz zabiegi. Terapeuci nie widzą
              własnych ocen — liczby służą rozmowie, nie rankingowi.
            </p>
          </Reveal>

          {/* Dashboard mockup */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-sand/70 bg-cream p-7 shadow-lift sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-medium text-slate">
                  Ostatnie 30 dni
                </span>
                <span className="rounded-full bg-sage-tint px-3 py-1 text-xs font-medium text-sage-dark">
                  142 odpowiedzi
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Stat label="Średni CSAT" value="4,8" unit="/ 5" tone="clay" />
                <Stat label="NPS" value="+72" tone="sage" />
                <Stat label="Niedopasowanie nacisku" value="4%" tone="slate" />
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between text-xs text-slate-light">
                  <span>Satysfakcja w czasie</span>
                  <span>trend</span>
                </div>
                <div className="flex h-28 items-end gap-1.5">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-clay-light"
                      style={{
                        height: `${h}%`,
                        backgroundColor:
                          i === bars.length - 1
                            ? 'var(--color-clay-dark)'
                            : undefined,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t border-sand/60 pt-5">
                <p className="text-xs uppercase tracking-wider text-slate-light">
                  Ostatni komentarz
                </p>
                <p className="mt-2 font-serif text-lg italic leading-snug text-charcoal">
                  „Idealna cisza i dokładnie te miejsca, o które prosiłam.”
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Stat({
  label,
  value,
  unit,
  tone,
}: {
  label: string
  value: string
  unit?: string
  tone: 'clay' | 'sage' | 'slate'
}) {
  const color =
    tone === 'clay'
      ? 'text-clay-dark'
      : tone === 'sage'
        ? 'text-sage'
        : 'text-charcoal'
  return (
    <div className="rounded-2xl bg-oatmeal/70 p-4">
      <p className={`font-serif text-3xl leading-none ${color}`}>
        {value}
        {unit && <span className="text-base text-slate-light"> {unit}</span>}
      </p>
      <p className="mt-2 text-xs leading-snug text-slate">{label}</p>
    </div>
  )
}
