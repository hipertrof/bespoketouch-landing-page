import { Reveal } from './reveal'
import { withBasePath } from '@/lib/asset-path'

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
              Problem widzisz,
              <br />
              <em className="text-clay-dark">zanim stanie się recenzją.</em>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-slate">
              Krótka, całkowicie pomijalna ankieta po zabiegu zasila panel
              dostępny tylko dla menedżera: ocena zadowolenia i chęci polecenia
              usługi, wskaźnik niedopasowania nacisku oraz podział wyników na
              terapeutów i zabiegi. Terapeuci nie widzą
              własnych ocen — liczby służą rozmowie, nie rankingowi.
            </p>
          </Reveal>

          {/* Reports mockup */}
          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-3xl border border-sand/70 shadow-soft">
              <img
                src={withBasePath('/images/reports.png')}
                alt="Panel menedżera BespokeTouch wyświetlający wyniki ankiet zadowolenia i wskaźniki wydajności terapeutów"
                className="h-full w-full object-cover"
              />
            </figure>
            <p className="mt-4 text-center text-sm italic text-slate-light">
              Trafia do Ciebie. Nie do wyszukiwarki.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
