import { Reveal } from './reveal'

const moments = [
  {
    index: '01',
    kicker: 'Przed zabiegiem',
    title: 'Cisza',
    body: 'Gość w skupieniu personalizuje zabieg na tablecie. Brak pośpiechu, brak papierowych podkładek z długopisem. Sam na sam ze swoimi potrzebami.',
  },
  {
    index: '02',
    kicker: 'Powitanie',
    title: 'Pewność',
    body: 'Terapeuta zna kartę przed otwarciem drzwi. Wita gościa gotowym zapachem i potwierdzeniem, że skupi się dokładnie na tych strefach, które wybrano.',
  },
  {
    index: '03',
    kicker: 'Efekt końcowy',
    title: 'Głębsze odprężenie',
    body: 'Uniknięcie bolesnych stref i trafienie w kluczowe napięcia sprawia, że masaż jest efektywniejszy. Gość opuszcza spa z poczuciem autentycznego zaopiekowania.',
  },
]

export function SilenceRitual() {
  return (
    <section
      id="rytual"
      className="relative overflow-hidden bg-charcoal py-28 text-cream lg:py-40"
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.22em] text-clay-light">
            Trzy chwile jednej wizyty
          </p>
          <h2 className="text-balance font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            Prawdziwy luksus zaczyna się od
            <br />
            <em className="text-clay-light">braku zbędnych pytań</em>
          </h2>
          <span className="mx-auto mt-8 block h-px w-12 bg-cream/25" />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {moments.map((moment, i) => (
            <Reveal key={moment.index} delay={i * 100}>
              <article className="h-full rounded-3xl border border-cream/12 bg-cream/[0.03] p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-clay-light">
                  {moment.index} <span className="text-cream/40">/</span>{' '}
                  {moment.kicker}
                </p>
                <h3 className="mt-5 font-serif text-2xl leading-snug text-cream">
                  {moment.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-cream/70">
                  {moment.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
