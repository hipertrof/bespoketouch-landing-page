import { Reveal } from './reveal'

const steps = [
  {
    tag: 'Powitanie',
    body: (
      <>
        Powitaj gościa słowami:{' '}
        <em className="text-clay-light">
          „Dzień dobry Anno, przygotowałem olejek Lawenda i rumianek…”
        </em>
      </>
    ),
  },
  {
    tag: 'Skupienie',
    body: <>Potwierdź strefy priorytetowe: kark, obręcz barkowa.</>,
  },
  {
    tag: 'Unikaj',
    body: <>Omiń dolną część brzucha — strefa oznaczona jako wykluczona.</>,
  },
  {
    tag: 'Rozmowa',
    body: <>Ogranicz rozmowę do minimum — gość wybrał sesję w ciszy.</>,
  },
]

export function TherapistProcedure() {
  return (
    <section
      id="terapeuta"
      className="relative overflow-hidden bg-charcoal py-28 text-cream lg:py-40"
    >
      {/* Candlelit backdrop */}
      <div className="absolute inset-0">
        <img
          src="/images/candlelit-hands.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 78% 30%, rgba(201,154,106,0.22) 0%, rgba(28,25,21,0.65) 45%, rgba(24,22,18,0.94) 80%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-clay-light">
            <span className="h-px w-8 bg-clay" />
            Procedura powitalna terapeuty
          </p>
          <h2 className="text-balance font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            Maszyna pamięta, żeby człowiek mógł być obecny.
          </h2>
          <p className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-cream/75">
            Zanim terapeuta otworzy drzwi, wybory gościa zamieniają się w krótki
            scenariusz do przeczytania jednym spojrzeniem. Imię, olejek, strefy,
            cisza — powitanie godne concierge, za każdym razem, bez uczenia się
            na pamięć.
          </p>
          <p className="mt-6 inline-block rounded-full border border-cream/20 px-4 py-1.5 text-xs uppercase tracking-wider text-cream/50">
            Funkcja w planach rozwoju
          </p>
        </Reveal>

        {/* Procedure card mockup */}
        <Reveal delay={140}>
          <div className="rounded-3xl border border-cream/12 bg-cream/[0.06] p-7 shadow-lift backdrop-blur-md sm:p-9">
            <div className="mb-7 flex items-center justify-between border-b border-cream/12 pb-5">
              <span className="font-serif text-lg text-cream">
                Procedura powitalna
              </span>
              <span className="text-xs uppercase tracking-wider text-clay-light">
                Anna · 16:30 · Lomi Lomi
              </span>
            </div>

            <ol className="flex flex-col gap-6">
              {steps.map((step) => (
                <li key={step.tag} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-clay/60 text-clay-light"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12.5l5 5L20 6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-clay-light/80">
                      {step.tag}
                    </p>
                    <p className="mt-1.5 leading-relaxed text-cream/90">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
